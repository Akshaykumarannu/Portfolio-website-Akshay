"use client";

import { Github, Linkedin, Instagram, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#050505] py-14 border-t border-white/[0.06] text-zinc-400">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-400" />
                            <h2 className="text-lg font-bold text-white tracking-tight">Akshay Kumar</h2>
                        </div>
                        <p className="text-xs text-zinc-500 font-mono">
                            Frontend Developer &amp; Creative Builder · Kasaragod, Kerala
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Akshaykumarannu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/akshay-kumar-78168a29b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-sky-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/annu_akshay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-pink-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors ml-2"
                            aria-label="Back to top"
                            title="Back to top"
                        >
                            <ArrowUp size={18} />
                        </button>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
                    <p>© {new Date().getFullYear()} Akshay Kumar. Designed with cinematic precision.</p>
                    <p className="flex items-center gap-1">
                        Crafted with React 19 &amp; Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
