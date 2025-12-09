"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Instagram, Code2, Terminal, Cpu, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:50px_50px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-left order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available for Freelance & Full-time
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:to-blue-400">Akshay Kumar</span>
                        </h1>

                        <div className="h-10 md:h-12 overflow-hidden mb-8">
                            <motion.div
                                animate={{ y: [0, -40, -100, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4] }}
                                className="text-xl md:text-2xl font-medium text-muted-foreground"
                            >
                                <div className="h-10 md:h-12 flex items-center gap-2"><Code2 className="w-6 h-6 text-primary" /> Web Developer</div>
                                <div className="h-10 md:h-12 flex items-center gap-2"><Terminal className="w-6 h-6 text-primary" /> Software Developer</div>
                                <div className="h-10 md:h-12 flex items-center gap-2"><Cpu className="w-6 h-6 text-primary" /> Frontend Developer</div>

                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl leading-relaxed"
                        >
                            I craft accessible, pixel-perfect, and performant web experiences using modern technologies.
                            Let's turn your vision into reality with clean code and stunning visuals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                            >
                                Hire Me <ArrowRight size={18} />
                            </a>
                            <a
                                href="/resume.pdf"
                                download="AkshayKumar_Resume.pdf"
                                className="px-8 py-3.5 rounded-full bg-card border border-border text-card-foreground font-medium hover:bg-secondary/80 transition-all flex items-center gap-2 hover:-translate-y-1 shadow-sm"
                            >
                                Download CV <Download size={18} />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-12 flex items-center gap-6"
                        >
                            <div className="h-px w-12 bg-border" />
                            <SocialLink href="https://github.com/Akshaykumarannu" icon={<Github size={22} />} label="GitHub" />
                            <SocialLink href="https://drive.google.com/drive/folders/1ADjm04elM_XVZMUWmMNK92I67PTbDrkE?usp=drive_link" icon={<Award size={22} />} label="Certificates" />
                            <SocialLink href="https://linkedin.com/in/akshay-kumar-78168a29b" icon={<Linkedin size={22} />} label="LinkedIn" />
                            <SocialLink href="https://www.instagram.com/annu_akshay/" icon={<Instagram size={22} />} label="Instagram" />
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image with improved effects */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Rotating rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-primary/20 scale-110"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-secondary/20 scale-125"
                            />

                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />

                            {/* Image container */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/10"
                            >
                                <img
                                    src="/profile.webp"
                                    alt="Akshay Kumar"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Tech Badges */}
                            <FloatingBadge icon={<Code2 size={20} />} className="absolute top-0 right-0 bg-blue-500/10 text-blue-500 backdrop-blur-md border-blue-500/20" delay={0} />
                            <FloatingBadge icon={<Terminal size={20} />} className="absolute bottom-10 -left-4 bg-purple-500/10 text-purple-500 backdrop-blur-md border-purple-500/20" delay={1.5} />
                            <FloatingBadge icon={<Cpu size={20} />} className="absolute bottom-10 -right-4 bg-pink-500/10 text-pink-500 backdrop-blur-md border-pink-500/20" delay={3} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:bg-secondary hover:scale-110 transition-all duration-300"
            aria-label={label}
        >
            {icon}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
                {label}
            </span>
        </a>
    );
}

function FloatingBadge({ icon, className, delay }: { icon: React.ReactNode; className?: string; delay: number }) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
            className={cn("p-3 rounded-xl border shadow-lg", className)}
        >
            {icon}
        </motion.div>
    );
}
