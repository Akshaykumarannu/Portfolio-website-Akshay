"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
    links: {
        demo?: string;
        github?: string;
    };
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "ZugeConnect",
        subtitle: "Enterprise CRM & Sales Lead Management",
        description:
            "A robust enterprise client relationship management system designed for high-velocity sales teams. Features interactive pipeline tracking, funnel conversion analytics, revenue projections, and streamlined lead assignment workflows.",
        tags: ["React.js", "Redux Toolkit", "Material UI", "REST APIs", "Analytics"],
        image: "/img-zugeconnect.jpg",
        links: {
            github: "https://github.com/Akshaykumarannu",
        },
        featured: true,
    },
    {
        title: "Asian Kids Dance Crew",
        subtitle: "Creative Studio & Brand Portal",
        description:
            "A high-energy, responsive web application for an elite dance studio. Includes dynamic event schedules, media galleries, fluid choreo video integration, and workshop registration modules.",
        tags: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive UX"],
        image: "/img-asian-kids.png",
        links: {
            demo: "https://www.asiankidsdancecrew.com/",
            github: "https://github.com/Akshaykumarannu/AsiankidsCherkala.git",
        },
        featured: true,
    },
    {
        title: "Saffron Events",
        subtitle: "Event Management & Booking Showcase",
        description:
            "An upscale portfolio website for an event management brand. Designed with a luxury visual identity, interactive service tiers, celebration photo galleries, and inquiry request flows.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Modern Web"],
        image: "/img-saffron.png",
        links: {
            demo: "https://saffronevents.vercel.app/",
            github: "https://github.com/Akshaykumarannu/SaffronEvents.git",
        },
    },
    {
        title: "National Aluminium Fabrication",
        subtitle: "Industrial Architectural Services",
        description:
            "A comprehensive corporate web portal for architectural fabrication services. Features extensive product catalogs, project completion galleries, and direct quotation inquiry channels.",
        tags: ["React.js", "CSS3", "Responsive Design", "Client Acquisition"],
        image: "/img-aluminium.png",
        links: {
            demo: "https://www.nationalaluminiumfab.com/",
            github: "https://github.com/Akshaykumarannu/Alumin-ium-fabrication-website.git",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                            <span>03 / SELECTED WORKS</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                            Proven results across <span className="text-sky-400">production code</span>.
                        </h2>
                    </div>
                    <a
                        href="https://github.com/Akshaykumarannu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                        <span>View more on GitHub</span>
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>

                {/* Projects Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-sky-500/40 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-black/80 hover:-translate-y-1.5"
                        >
                            {/* Project Image Banner */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 border-b border-white/[0.06]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-md text-sky-300 text-[11px] font-mono uppercase tracking-wider">
                                        <Sparkles size={11} />
                                        <span>Featured</span>
                                    </div>
                                )}

                                {/* Hover action buttons overlay */}
                                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full bg-black/70 hover:bg-sky-400 hover:text-black text-white border border-white/20 transition-all backdrop-blur-md"
                                            title="View Live Demo"
                                            aria-label={`View live demo for ${project.title}`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all backdrop-blur-md"
                                            title="View Source Code"
                                            aria-label={`View source code for ${project.title}`}
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1.5 block">
                                        {project.subtitle}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-sky-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                                            >
                                                <span>GitHub</span>
                                                <Github size={12} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
