"use client";

import { motion } from "framer-motion";
import { Layers, Palette, Database, Wrench, CheckCircle2 } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Engineering",
        description: "Building reactive, high-performance, and modular client-side architectures.",
        icon: <Layers size={22} className="text-sky-400" />,
        skills: [
            "React.js",
            "Next.js (App Router)",
            "TypeScript",
            "JavaScript (ES6+)",
            "Redux & Redux Toolkit",
            "HTML5 Semantic Web",
            "State Management",
            "Component Architecture",
        ],
    },
    {
        title: "UI Design & Motion",
        description: "Crafting fluid, accessible design systems with micro-interactions.",
        icon: <Palette size={22} className="text-sky-400" />,
        skills: [
            "Tailwind CSS",
            "Material UI (MUI)",
            "Chakra UI",
            "Framer Motion",
            "Responsive Web Design",
            "CSS3 & Flexbox/Grid",
            "Canvas Rendering",
            "Accessibility (a11y)",
        ],
    },
    {
        title: "Backend & API Integration",
        description: "Connecting frontend interfaces to robust data pipelines and services.",
        icon: <Database size={22} className="text-sky-400" />,
        skills: [
            "RESTful APIs",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Firebase",
            "API Authentication",
        ],
    },
    {
        title: "Tooling & Optimization",
        description: "Ensuring code reliability, modern CI/CD, and fast load times.",
        icon: <Wrench size={22} className="text-sky-400" />,
        skills: [
            "Git & GitHub",
            "VS Code",
            "Postman API Testing",
            "Vercel Deployment",
            "Turbopack / Webpack",
            "Chrome DevTools",
            "Performance Profiling",
            "Agile / Scrum",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-28 bg-[#080808] relative overflow-hidden border-t border-white/[0.06]">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                        <span>02 / TECHNICAL PROFICIENCY</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        A curated toolkit for{" "}
                        <span className="text-sky-400">modern web development</span>.
                    </h2>
                    <p className="text-zinc-400 text-base max-w-xl mt-3 font-light">
                        Battle-tested technologies utilized across production applications, enterprise portals, and freelance projects.
                    </p>
                </motion.div>

                {/* 4 Pillar Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 relative group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3.5 mb-4">
                                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-sky-500/10 transition-colors">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                                        <p className="text-xs text-zinc-400 font-mono mt-0.5">{cat.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.06]">
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                                        >
                                            <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                                            <span className="truncate">{skill}</span>
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
