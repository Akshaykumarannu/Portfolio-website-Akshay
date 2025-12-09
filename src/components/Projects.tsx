"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Asian Kids Dance Crew",
        description: "A dynamic website for a dance crew featuring event schedules, gallery, and registration forms. Built with modern web technologies for high performance and smooth animations.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        links: { demo: "https://www.asiankidsdancecrew.com/", github: "https://github.com/Akshaykumarannu/AsiankidsCherkala.git" },
        image: "/img-asian-kids.png",
    },
    {
        title: "Saffron Events",
        description: "An elegant event management portfolio showcasing services, past events, and booking capabilities. Designed with a premium aesthetic and responsive layout.",
        tags: ["Next.js", "TypeScript", "UI/UX"],
        links: { demo: "https://saffronevents.vercel.app/", github: "https://github.com/Akshaykumarannu/SaffronEvents.git" },
        image: "/img-saffron.png",
    },
    {
        title: "National Aluminium Fabrication",
        description: "A comprehensive website for aluminium fabrication services, showcasing product catalogs, project galleries, and business information.",
        tags: ["React", "CSS", "Responsive"],
        links: { demo: "https://www.nationalaluminiumfab.com/", github: "https://github.com/Akshaykumarannu/Alumin-ium-fabrication-website.git" },
        image: "/img-aluminium.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground">
                        A selection of projects that demonstrate my passion for building exceptional web experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors backdrop-blur-sm"
                                        title="View Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors backdrop-blur-sm"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
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
