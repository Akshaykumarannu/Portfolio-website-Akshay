"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, ChevronDown, Download, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 239;

function getFramePath(index: number): string {
    const num = Math.min(Math.max(index, 1), TOTAL_FRAMES);
    return `/frames/frame_${String(num).padStart(4, "0")}.jpg`;
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Frame caches & references
    const framesRef = useRef<Map<number, HTMLImageElement>>(new Map());
    const isLoadedRef = useRef<Map<number, boolean>>(new Map());
    const targetFrameRef = useRef<number>(1);
    const currentFrameRef = useRef<number>(1);
    const lastDrawnFrameRef = useRef<number>(-1);
    const rafIdRef = useRef<number | null>(null);

    // UI state for reactive text staging & loading
    const [scrollProgress, setScrollProgress] = useState(0);
    const [initialFrameReady, setInitialFrameReady] = useState(false);
    const [loadedCount, setLoadedCount] = useState(1);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check prefers-reduced-motion
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    // Canvas draw logic
    const drawFrame = useCallback((frameNumber: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Try to get exact frame, or fallback to closest loaded frame
        let img = framesRef.current.get(frameNumber);
        if (!img || !isLoadedRef.current.get(frameNumber)) {
            // Find closest available frame
            let closestFrame = -1;
            let minDiff = Infinity;
            for (const [key, isReady] of isLoadedRef.current.entries()) {
                if (isReady) {
                    const diff = Math.abs(key - frameNumber);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestFrame = key;
                    }
                }
            }
            if (closestFrame !== -1) {
                img = framesRef.current.get(closestFrame);
            }
        }

        if (!img || !img.complete || img.naturalWidth === 0) return;

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Cover calculation to preserve aspect ratio (1920x1080)
        const scale = Math.max(cw / iw, ch / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const x = (cw - nw) / 2;
        const y = (ch - nh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, nw, nh);
        lastDrawnFrameRef.current = frameNumber;
    }, []);

    // Frame preloader engine
    useEffect(() => {
        let isCancelled = false;

        // Preload helper
        const loadSingleFrame = (index: number): Promise<void> => {
            return new Promise((resolve) => {
                if (framesRef.current.has(index)) {
                    resolve();
                    return;
                }
                const img = new Image();
                img.src = getFramePath(index);
                img.onload = () => {
                    if (isCancelled) return;
                    framesRef.current.set(index, img);
                    isLoadedRef.current.set(index, true);
                    setLoadedCount((prev) => prev + 1);
                    resolve();
                };
                img.onerror = () => {
                    resolve();
                };
            });
        };

        // 1. Immediately load frame 1 for zero-delay paint
        const firstImg = new Image();
        firstImg.src = getFramePath(1);
        firstImg.onload = () => {
            if (isCancelled) return;
            framesRef.current.set(1, firstImg);
            isLoadedRef.current.set(1, true);
            setInitialFrameReady(true);
            drawFrame(1);

            // 2. Load initial burst (frames 2 to 25) for immediate smooth start
            const burstPromises: Promise<void>[] = [];
            for (let i = 2; i <= 25; i++) {
                burstPromises.push(loadSingleFrame(i));
            }

            Promise.all(burstPromises).then(() => {
                if (isCancelled) return;
                // 3. Load keyframes across entire timeline (every 4th frame) to ensure full scrub coverage
                const keyframes: number[] = [];
                for (let i = 28; i <= TOTAL_FRAMES; i += 4) {
                    keyframes.push(i);
                }

                // Batch keyframe loads
                let keyframeIdx = 0;
                const loadKeyframeBatch = () => {
                    if (isCancelled || keyframeIdx >= keyframes.length) {
                        // 4. Finally load all remaining intermediate frames
                        loadRemainingFrames();
                        return;
                    }
                    const batch = keyframes.slice(keyframeIdx, keyframeIdx + 8);
                    keyframeIdx += 8;
                    Promise.all(batch.map((f) => loadSingleFrame(f))).then(() => {
                        if ("requestIdleCallback" in window) {
                            (window as Window).requestIdleCallback(loadKeyframeBatch);
                        } else {
                            setTimeout(loadKeyframeBatch, 40);
                        }
                    });
                };

                const loadRemainingFrames = () => {
                    let nextFrame = 2;
                    const loadNextMissingBatch = () => {
                        if (isCancelled || nextFrame > TOTAL_FRAMES) return;
                        const batch: Promise<void>[] = [];
                        let count = 0;
                        while (nextFrame <= TOTAL_FRAMES && count < 10) {
                            if (!isLoadedRef.current.get(nextFrame)) {
                                batch.push(loadSingleFrame(nextFrame));
                                count++;
                            }
                            nextFrame++;
                        }
                        if (batch.length > 0) {
                            Promise.all(batch).then(() => {
                                setTimeout(loadNextMissingBatch, 30);
                            });
                        } else if (nextFrame <= TOTAL_FRAMES) {
                            setTimeout(loadNextMissingBatch, 30);
                        }
                    };
                    loadNextMissingBatch();
                };

                loadKeyframeBatch();
            });
        };

        return () => {
            isCancelled = true;
        };
    }, [drawFrame]);

    // Handle Resize & Canvas Resolution
    useEffect(() => {
        const updateCanvasSize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            drawFrame(Math.round(currentFrameRef.current));
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);
        return () => window.removeEventListener("resize", updateCanvasSize);
    }, [drawFrame]);

    // Smooth Scroll Listener & Lerp Animation Loop
    useEffect(() => {
        let isRunning = true;

        const onScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const totalScrollable = container.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;

            const rawProgress = -rect.top / totalScrollable;
            const progress = Math.min(Math.max(rawProgress, 0), 1);
            setScrollProgress(progress);

            // Compute target frame index (1 to TOTAL_FRAMES)
            const targetFrame = 1 + progress * (TOTAL_FRAMES - 1);
            targetFrameRef.current = targetFrame;
        };

        const renderLoop = () => {
            if (!isRunning) return;

            if (prefersReducedMotion) {
                // If reduced motion, keep frame 1 or simple static pose
                if (lastDrawnFrameRef.current !== 1) {
                    drawFrame(1);
                }
            } else {
                // Lerp interpolation (0.16 smoothing factor)
                const diff = targetFrameRef.current - currentFrameRef.current;
                if (Math.abs(diff) > 0.01) {
                    currentFrameRef.current += diff * 0.16;
                    const frameToDraw = Math.round(currentFrameRef.current);
                    if (frameToDraw !== lastDrawnFrameRef.current) {
                        drawFrame(frameToDraw);
                    }
                }
            }

            rafIdRef.current = requestAnimationFrame(renderLoop);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        rafIdRef.current = requestAnimationFrame(renderLoop);

        return () => {
            isRunning = false;
            window.removeEventListener("scroll", onScroll);
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        };
    }, [drawFrame, prefersReducedMotion]);

    // Calculate stage opacities and transforms based on scrollProgress
    // Stage 1: 0.00 to 0.28 (peaks at 0.0 - 0.15, fades out by 0.28)
    const stage1Opacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.12) / 0.14));
    const stage1Y = (scrollProgress * 60);

    // Stage 2: 0.32 to 0.64 (fades in 0.30 -> 0.40, holds, fades out 0.55 -> 0.65)
    let stage2Opacity = 0;
    if (scrollProgress >= 0.28 && scrollProgress <= 0.66) {
        if (scrollProgress < 0.40) {
            stage2Opacity = (scrollProgress - 0.28) / 0.12;
        } else if (scrollProgress > 0.54) {
            stage2Opacity = 1 - (scrollProgress - 0.54) / 0.12;
        } else {
            stage2Opacity = 1;
        }
    }
    const stage2Y = (scrollProgress - 0.45) * 40;

    // Stage 3: 0.68 to 0.98 (fades in 0.68 -> 0.78, holds, gently transitions into About section)
    let stage3Opacity = 0;
    if (scrollProgress >= 0.68) {
        if (scrollProgress < 0.80) {
            stage3Opacity = (scrollProgress - 0.68) / 0.12;
        } else if (scrollProgress > 0.94) {
            stage3Opacity = 1 - (scrollProgress - 0.94) / 0.06;
        } else {
            stage3Opacity = 1;
        }
    }
    const stage3Y = (scrollProgress - 0.82) * 40;

    const displayedFrame = Math.round(currentFrameRef.current);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative h-[320vh] bg-[#080808] text-[#F5F5F5]"
        >
            {/* Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Responsive Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0 block"
                />

                {/* Subtle Cinematic Vignette & Lighting Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-radial-[ellipse_at_center,_transparent_40%,_#080808_95%] opacity-80" />
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70 opacity-90" />
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 opacity-60" />

                {/* Initial Loading Screen / Ambient Glow until first frame loads */}
                {!initialFrameReady && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080808]">
                        <div className="w-12 h-12 rounded-full border-2 border-sky-400/20 border-t-sky-400 animate-spin mb-4" />
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                            Initializing Cinematic Experience...
                        </span>
                    </div>
                )}

                {/* STAGE 1 CONTENT: Opening Hero */}
                <div
                    style={{
                        opacity: stage1Opacity,
                        transform: `translateY(${stage1Y}px)`,
                        pointerEvents: stage1Opacity > 0.2 ? "auto" : "none",
                    }}
                    className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-7xl mx-auto transition-opacity duration-300"
                >
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
                            SOFTWARE DEVELOPER · CREATIVE BUILDER
                        </span>
                    </div>

                    {/* Name subtitle */}
                    <div className="flex items-center gap-2 text-sky-400 font-mono text-sm tracking-wider uppercase mb-3">
                        <Sparkles size={16} className="text-sky-400" />
                        <span>Akshay Kumar</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl text-gradient-cinematic">
                        I BUILD DIGITAL <br />
                        <span className="text-gradient-accent">EXPERIENCES.</span>
                    </h1>

                    {/* Supporting Description */}
                    <p className="text-zinc-400 text-base md:text-xl max-w-xl leading-relaxed mb-8 font-light">
                        Frontend Developer crafting responsive interfaces, intelligent dashboards,
                        and meaningful digital products with modern web technologies.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="group px-7 py-3.5 rounded-full bg-sky-400 text-black font-semibold hover:bg-sky-300 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Explore My Work
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
                        >
                            Let's Connect
                        </a>
                        <a
                            href="/resume.pdf"
                            download="AkshayKumar_Resume.pdf"
                            className="p-3.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all backdrop-blur-md"
                            title="Download CV"
                            aria-label="Download CV"
                        >
                            <Download size={18} />
                        </a>
                    </div>
                </div>

                {/* STAGE 2 CONTENT: Technical Motion & Fluid UX Focus */}
                <div
                    style={{
                        opacity: stage2Opacity,
                        transform: `translateY(${stage2Y}px)`,
                        pointerEvents: stage2Opacity > 0.2 ? "auto" : "none",
                    }}
                    className="absolute inset-0 z-20 flex flex-col justify-center items-end px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-right transition-opacity duration-300"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 self-end">
                        <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
                            FLUIDITY · PERFORMANCE · SCALE
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 max-w-2xl leading-tight">
                        CRAFTING FLUID &amp; <br />
                        <span className="text-sky-400">INTENTIONAL</span> CODE.
                    </h2>

                    <p className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed mb-6 font-light">
                        Engineering seamless full-stack frontend ecosystems using React.js,
                        Next.js, and Redux with meticulous attention to performance, responsiveness, and aesthetics.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-end max-w-md">
                        {["React 19", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Motion API"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* STAGE 3 CONTENT: Resolution & Transition to Work */}
                <div
                    style={{
                        opacity: stage3Opacity,
                        transform: `translateY(${stage3Y}px)`,
                        pointerEvents: stage3Opacity > 0.2 ? "auto" : "none",
                    }}
                    className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center transition-opacity duration-300"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
                            ViewMyRecords · Kasaragod, Kerala
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 max-w-3xl">
                        TURNING AMBITIOUS IDEAS <br />
                        <span className="text-gradient-accent">INTO PRODUCTION VALUE.</span>
                    </h2>

                    <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-light">
                        From scalable business dashboards to interactive consumer applications,
                        I create digital products that leave a lasting impression.
                    </p>

                    <a
                        href="#about"
                        className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium transition-all backdrop-blur-md flex items-center gap-2"
                    >
                        <span>Meet Akshay</span>
                        <ChevronDown size={18} />
                    </a>
                </div>

                {/* Bottom Scrub Progress & Frame Counter */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-xs font-mono text-zinc-500 pointer-events-none max-w-7xl mx-auto">
                    {/* Left: Scroll Prompt */}
                    <div className="flex items-center gap-2 text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        <span className="uppercase tracking-widest text-[11px] font-medium hidden sm:inline">
                            Scroll to scrub cinematic animation
                        </span>
                    </div>

                    {/* Center: Frame indicator */}
                    <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] text-zinc-300">
                        <span className="text-sky-400 font-semibold">{String(displayedFrame).padStart(3, "0")}</span>
                        <span className="text-zinc-600 mx-1.5">/</span>
                        <span className="text-zinc-500">{TOTAL_FRAMES}</span>
                        {loadedCount < TOTAL_FRAMES && (
                            <span className="ml-2 text-zinc-600 text-[10px]">
                                ({Math.round((loadedCount / TOTAL_FRAMES) * 100)}% loaded)
                            </span>
                        )}
                    </div>

                    {/* Right: Progress Hairline */}
                    <div className="hidden sm:flex items-center gap-3">
                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-sky-400 transition-all duration-75"
                                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                            />
                        </div>
                        <span className="text-[11px] text-zinc-400">{Math.round(scrollProgress * 100)}%</span>
                    </div>
                </div>

                {/* Subtle Scroll Down Arrow on Initial View */}
                {scrollProgress < 0.08 && (
                    <a
                        href="#about"
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors pointer-events-auto group"
                    >
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 group-hover:text-zinc-300">
                            Scroll
                        </span>
                        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                            <div className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" />
                        </div>
                    </a>
                )}
            </div>
        </section>
    );
}
