"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const education = [
    {
        institution: "AIMIT Centre - St Aloysius Institue of Management and IT, Mangaluru",
        degree: "Master's Degree of Computer Applications (MCA)",
        year: "2023 - 2024",
        logo: "/aloysius logo1.png"
    },
    {
        institution: "GFGC Carstreet, Mangalore",
        degree: "Bachelor's Degree of Computer Applications (BCA)",
        year: "2020 - 2022",
        logo: "/gfgc-logo.jpg"
    },
    {
        institution: "NHSS Peradala, Badiadka",
        degree: "12th",
        year: "2018 - 2019",
        logo: "/svs-logo.png"
    },
    {
        institution: "NHSS Peradala, Badiadka",
        degree: "6th - 10th",
        year: "2012 - 2017",
        logo: "/svs-logo.png"
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 pt-10 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">Education</h2>
                </motion.div>

                <div className="max-w-4xl">
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg hover:bg-secondary/20 transition-colors gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-md border border-border/50">
                                        <Image
                                            src={edu.logo}
                                            alt={`${edu.institution} logo`}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{edu.institution}</h3>
                                        <p className="text-muted-foreground">{edu.degree}</p>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-secondary/30 px-3 py-1 rounded-full">
                                    {edu.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
