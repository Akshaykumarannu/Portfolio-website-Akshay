"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const stats = [
    { icon: <Code2 size={32} />, value: "1.5+", label: "Years Experience" },
    { icon: <Rocket size={32} />, value: "10+", label: "Projects Completed" },
    { icon: <Users size={32} />, value: "5+", label: "Happy Clients" },
    { icon: <Award size={32} />, value: "100%", label: "Satisfaction" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Software Developer & Frontend Specialist
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I'm a passionate Software Developer currently working at <span className="text-primary font-semibold">ViewMyRecords Private Limited</span>,
                            based in Kasaragod, Kerala, India. With a strong foundation in frontend technologies and a growing expertise in full-stack development,
                            I specialize in creating modern, responsive, and user-friendly web applications.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            My journey in software development began with a deep interest in React and JavaScript, which has evolved into proficiency
                            with Next.js, TypeScript, and modern CSS frameworks. I'm committed to writing clean, maintainable code and staying
                            up-to-date with the latest industry trends and best practices.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I believe in continuous learning and improvement. Whether it's mastering a new framework, optimizing application performance,
                            or collaborating with teams to deliver exceptional user experiences, I'm always eager to take on new challenges.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                                React.js
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                                Next.js
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                                TypeScript
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                                Tailwind CSS
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                                JavaScript
                            </span>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
