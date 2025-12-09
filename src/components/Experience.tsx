"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "ViewMyRecords Private Limited",
        role: "Software Developer",
        date: "Present",
        description: "Working on full-stack web development, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
        logo: <Briefcase size={24} className="text-primary" />
    },
    {
        company: "ViewMyRecords Private Limited",
        role: "Software Development Intern",
        date: "Apr 2024 - Jul 2024",
        description: "Assisted in frontend development using React.js, implemented responsive designs, and participated in code reviews and agile workflows.",
        logo: <Briefcase size={24} className="text-primary" />
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
                </motion.div>

                <div className="max-w-4xl">
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col sm:flex-row items-start justify-between group rounded-xl hover:bg-secondary/20 p-4 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 mt-1 border border-border">
                                        {exp.logo}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                                        </div>
                                        <p className="text-muted-foreground font-medium mb-2">{exp.role}</p>

                                        {exp.description && (
                                            <p className="text-sm text-muted-foreground max-w-xl mt-2 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-2 sm:mt-0 text-sm font-medium text-muted-foreground whitespace-nowrap bg-secondary/30 px-3 py-1 rounded-full self-start sm:self-auto">
                                    {exp.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
