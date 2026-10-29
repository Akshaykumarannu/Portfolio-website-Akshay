"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            // Active section detection
            const scrollPosition = window.scrollY + 200;
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const link = navLinks[i];
                const section = document.querySelector(link.href) as HTMLElement | null;
                if (section) {
                    if (section.offsetTop <= scrollPosition) {
                        setActiveSection(link.href.substring(1));
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
                    : "bg-transparent py-5"
            )}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Brand / Monogram */}
                <a
                    href="#home"
                    className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1 px-1.5"
                    aria-label="Akshay Kumar Portfolio Home"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-sky-400/50 group-hover:text-sky-400 transition-colors">
                        AK
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors hidden sm:inline">
                        Akshay Kumar
                    </span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                                    isActive
                                        ? "text-white font-semibold"
                                        : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-1.5">
                                    {link.name}
                                    {isActive && <span className="w-1 h-1 rounded-full bg-sky-400" />}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                {/* Right Action: Resume / Connect */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        download="AkshayKumar_Resume.pdf"
                        className="px-4 py-2 rounded-full text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-1.5"
                    >
                        <span>Resume</span>
                        <Download size={13} />
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-full text-xs font-semibold text-black bg-sky-400 hover:bg-sky-300 transition-all flex items-center gap-1 shadow-md shadow-sky-500/20"
                    >
                        <span>Contact</span>
                        <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <a
                        href="#contact"
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-sky-400 hover:bg-sky-300 transition-all"
                    >
                        Hire Me
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "px-4 py-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors flex items-center justify-between",
                                        activeSection === link.href.substring(1)
                                            ? "bg-white/[0.06] text-sky-400 font-semibold"
                                            : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                                    )}
                                >
                                    <span>{link.name}</span>
                                    {activeSection === link.href.substring(1) && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                                    )}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10 flex gap-3">
                                <a
                                    href="/resume.pdf"
                                    download="AkshayKumar_Resume.pdf"
                                    className="flex-1 py-3 text-center rounded-lg text-xs font-mono uppercase bg-white/[0.05] border border-white/10 text-white"
                                >
                                    Download CV
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 py-3 text-center rounded-lg text-xs font-mono uppercase bg-sky-400 text-black font-bold"
                                >
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
