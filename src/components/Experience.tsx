"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        company: "ViewMyRecords Private Limited",
        role: "Software Developer",
        date: "Jul 2024 — Present",
        status: "Current Role",
        location: "Kasaragod, Kerala, India",
        description:
            "Architecting and shipping responsive web interfaces and full-stack modules. Optimizing client-side bundle performance, building scalable state pipelines with Redux Toolkit, and integrating secure RESTful APIs across cross-functional agile teams.",
        highlights: [
            "Engineered responsive, accessible UI components with React.js and modern CSS frameworks.",
            "Accelerated page load speeds and client data synchronization via API caching strategies.",
            "Collaborated closely with product managers and backend engineers in high-velocity agile sprints.",
        ],
    },
    {
        company: "ViewMyRecords Private Limited",
        role: "Software Development Intern",
        date: "Apr 2024 — Jul 2024",
        status: "Completed",
        location: "Kasaragod, Kerala, India",
        description:
            "Implemented frontend features in React.js, converted design mockups into pixel-perfect responsive layouts, resolved cross-browser UI defects, and participated in technical peer code reviews.",
        highlights: [
            "Authored reusable UI components following design system specifications.",
            "Conducted debugging and performance profiling using Chrome DevTools.",
            "Gained hands-on proficiency with enterprise Git version control and team CI/CD pipelines.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-28 bg-[#080808] relative overflow-hidden border-t border-white/[0.06]">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                        <span>04 / PROFESSIONAL JOURNEY</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        Work Experience &amp;{" "}
                        <span className="text-sky-400">Engineering Impact</span>.
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l border-white/[0.08] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="relative group"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

                            <div className="p-7 md:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                                {exp.role}
                                            </h3>
                                            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-mono">
                                                {exp.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-400 font-mono mt-1">
                                            <Building size={14} className="text-sky-400" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.06] self-start sm:self-auto">
                                        <Calendar size={13} className="text-sky-400" />
                                        <span>{exp.date}</span>
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 font-light">
                                    {exp.description}
                                </p>

                                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                                    {exp.highlights.map((item, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
