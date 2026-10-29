"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, ShieldCheck, MapPin, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stats = [
    { icon: <Code2 size={24} className="text-sky-400" />, value: "1.5+", label: "Years Experience", detail: "Frontend & Full Stack" },
    { icon: <Rocket size={24} className="text-sky-400" />, value: "10+", label: "Projects Completed", detail: "Web Apps & Dashboards" },
    { icon: <Users size={24} className="text-sky-400" />, value: "5+", label: "Happy Clients", detail: "Global & Regional" },
    { icon: <ShieldCheck size={24} className="text-sky-400" />, value: "100%", label: "Code Quality", detail: "Performance & UX" },
];

export default function About() {
    return (
        <section id="about" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
            {/* Subtle background glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                        <span>01 / ABOUT ME</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        Architecting intuitive interfaces with{" "}
                        <span className="text-sky-400">clean code</span> and precision.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Profile Card + Quick Facts (4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-6 md:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] relative overflow-hidden group">
                            {/* Subtle inner highlight */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all" />

                            <div className="flex items-center gap-5 mb-6">
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/15 shrink-0 shadow-lg shadow-black/50">
                                    <Image
                                        src="/profile.webp"
                                        alt="Akshay Kumar"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Akshay Kumar</h3>
                                    <p className="text-sm text-sky-400 font-mono">Software Developer</p>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                                        <MapPin size={13} className="text-zinc-500" />
                                        <span>Kasaragod, Kerala, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3.5 text-xs font-mono text-zinc-400 border-t border-white/[0.08] pt-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Company</span>
                                    <span className="text-zinc-200 font-semibold">ViewMyRecords Pvt Ltd</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Degree</span>
                                    <span className="text-zinc-200">MCA (AIMIT Mangaluru)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Focus</span>
                                    <span className="text-zinc-200">React.js · Redux · UI/UX</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Availability</span>
                                    <span className="text-emerald-400 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Open for Collabs
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Tech Badge Pills */}
                        <div className="p-6 rounded-2xl bg-[#121212]/50 border border-white/[0.06]">
                            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                                Core Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {["React.js", "Redux Toolkit", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs", "Git"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-sky-500/10 hover:border-sky-500/30 border border-white/[0.08] text-xs font-mono text-zinc-300 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Narrative & Stats Grid (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="space-y-5 text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                            <p>
                                I'm a frontend-focused software developer at{" "}
                                <span className="text-white font-medium underline decoration-sky-400/40 underline-offset-4">
                                    ViewMyRecords Private Limited
                                </span>
                                , dedicated to engineering high-performance web applications, fluid digital experiences, and scalable enterprise dashboards.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-base">
                                With a Master's degree in Computer Applications (MCA) from AIMIT Mangaluru, my foundation bridges robust computer science theory with modern design execution. I specialize in the modern React ecosystem—leveraging Redux for predictable state architecture, Next.js for SSR/SEO excellence, and Tailwind CSS for bespoke, responsive design systems.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-base">
                                Beyond code syntax, my focus is always on the end-user: eliminating latency, polishing micro-interactions, structuring clean reusable component hierarchies, and delivering seamless client value.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-[#121212] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                                            {stat.icon}
                                        </div>
                                        <span className="text-2xl md:text-3xl font-black text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <div className="text-sm font-semibold text-zinc-200">{stat.label}</div>
                                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{stat.detail}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
