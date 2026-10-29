"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import Image from "next/image";

const education = [
    {
        institution: "AIMIT Centre - St Aloysius Institute of Management and IT",
        location: "Mangaluru, Karnataka",
        degree: "Master of Computer Applications (MCA)",
        year: "2023 — 2024",
        logo: "/aloysius logo1.png",
        highlight: "Advanced Computer Science, Full-Stack Architectures & Software Engineering",
    },
    {
        institution: "GFGC Carstreet",
        location: "Mangalore, Karnataka",
        degree: "Bachelor of Computer Applications (BCA)",
        year: "2020 — 2022",
        logo: "/gfgc-logo.jpg",
        highlight: "Core Data Structures, Algorithms, Web Technologies & Database Systems",
    },
    {
        institution: "NHSS Peradala",
        location: "Badiadka, Kerala",
        degree: "Higher Secondary (12th)",
        year: "2018 — 2019",
        logo: "/svs-logo.png",
        highlight: "Computer Science & Mathematics Foundation",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                        <span>05 / ACADEMIC FOUNDATION</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        Education &amp; <span className="text-sky-400">Degrees</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-7 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                                        <Image
                                            src={edu.logo}
                                            alt={edu.institution}
                                            width={50}
                                            height={50}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-mono text-sky-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full">
                                        {edu.year}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-1">
                                    {edu.degree}
                                </h3>
                                <p className="text-xs text-zinc-300 font-medium mb-1">{edu.institution}</p>
                                <p className="text-xs text-zinc-500 font-mono mb-4">{edu.location}</p>
                            </div>

                            <p className="text-xs text-zinc-400 border-t border-white/[0.06] pt-3.5 leading-relaxed font-light">
                                {edu.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
