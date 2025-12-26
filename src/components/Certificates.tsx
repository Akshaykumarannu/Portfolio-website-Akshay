"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Certificate data with real Drive IDs
const certificates = [
    {
        title: "Semaphore 2023 Participation",
        issuer: "NMAMIT Nitte",
        date: "2023",
        id: "1M0BOCm7TJpg7vcLJs6SlgBxSOI4EAOUs", // Semaphore 2023
    },
    {
        title: "AWS Course Completion",
        issuer: "AWS",
        date: "2023",
        id: "11sA3pIdiJxuSRrrjabBoaEhXudqJUMP6", // AWS Course Completion Certificate.pdf
    },
    {
        title: "AWS Workshop Certificate",
        issuer: "AWS",
        date: "2023",
        id: "15oB1tT4YkWRQ1aWyCym-tmWEVX6JEZNs", // certificate_Akshay_Kumar_1897252_RZRQtQ_.pdf
    },
    {
        title: "Workshop: Web Development",
        issuer: "Workshop 1",
        date: "2023",
        id: "1pGj0PgzJW5NmqiqQOzOV4G1bOJjTJE2n", // 55797_Workshop1.pdf
    },
    {
        title: "Workshop: Advanced Topics",
        issuer: "Workshop 2",
        date: "2023",
        id: "1qYlM4X0ssc0uMwNMGuP0b4b_RtYUhdSt", // 55797_workshop2.pdf
    },
    {
        title: "Workshop: Project Management",
        issuer: "Workshop 3",
        date: "2023",
        id: "1LXAN0aVKpL-3p4355nDUVuQPAkWz1iKd", // 55797_Workshop3.pdf
    },
    {
        title: "COVID-19 Awareness Quiz",
        issuer: "Health Awareness",
        date: "2020",
        id: "1d6nZVWKRByy3ZFv2slUs34bkuw0GsOO2", // Certificate for AKSHAY KUMAR for _COVID-19 Awareness Quiz_.pdf
    },
    {
        title: "Information Technology Quiz",
        issuer: "Online Quiz",
        date: "2023",
        id: "180X6Ugc0gOLI8n8YF_-GYkCyeVGkmt04", // Certificate for Akshay Kumar for _Online Quiz on Information ..._.pdf
    },
    {
        title: "Govt. First Grade College Bidar",
        issuer: "Event Participation",
        date: "2023",
        id: "1vQD1PgVb1nS4swJDTLZKqp3q9hxYz8_T", // Certificate for Akshay kumar for _Govt.First Grade College...
    },
    {
        title: "Akshay Kumar Certificate 1",
        issuer: "Certificate",
        date: "2023",
        id: "1Sbig6P9SRbqSh4QxbnZ6oHyyuRhulCTM", // Akshay Kumar (1).pdf
    },
    {
        title: "Akshay Kumar Certificate 2",
        issuer: "Certificate",
        date: "2023",
        id: "1RUUKAhoasVMwvxOAh_rJo-c21mT6mLVc", // Akshay Kumar (2).pdf
    },
    {
        title: "General Certificate",
        issuer: "Award",
        date: "2023",
        id: "1r0Omaa1SFoCMN3B-FTyNOEWe_dw4Js6j", // 219 AKSHAY KUMAR.pdf
    },
    {
        title: "Akshay Kumar",
        issuer: "Certificate",
        date: "2023",
        id: "1bRLkF5q-4kf9T2VCcNpru8wXY8VxlzMk", // Akshay Kumar.pdf
    },
    {
        title: "HTML/CSS Certificate",
        issuer: "Course Completion",
        date: "2023",
        id: "10wAi0oZ2yf2DsCSu8KfsftlzUt9PgI8b", // Akshay Kumar Certificate.pdf
    },
];

export default function Certificates() {
    // State to track current starting index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 to match server-side render or mobile-first

    // Handle resize logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                // Move by itemsPerPage, wrap around cleanly
                (prevIndex + itemsPerPage) % certificates.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [itemsPerPage]);

    // Get current visible certificates
    const visibleCertificates = [];
    for (let i = 0; i < itemsPerPage; i++) {
        visibleCertificates.push(certificates[(currentIndex + i) % certificates.length]);
    }

    return (
        <section id="certificates" className="py-20 relative bg-secondary/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground">
                        Recognition of my skills and participation in various technical events.
                    </p>

                    <a
                        href="https://drive.google.com/drive/folders/1ADjm04elM_XVZMUWmMNK92I67PTbDrkE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg"
                    >
                        <FileText size={18} /> View All Certificates on Drive
                    </a>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[350px]">
                        <AnimatePresence mode="wait">
                            {visibleCertificates.map((cert, index) => (
                                <motion.div
                                    key={`${cert.id}-${currentIndex + index}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative group"
                                >
                                    {/* Certificate Image Card */}
                                    <div className="relative aspect-[1.414/1] bg-white rounded-xl overflow-hidden shadow-2xl border border-border group-hover:scale-[1.02] transition-transform duration-300">
                                        {/* Google Drive Thumbnail Image */}
                                        <img
                                            src={`https://lh3.googleusercontent.com/d/${cert.id}`}
                                            alt={cert.title}
                                            className="w-full h-full object-contain bg-gray-100"
                                            loading="lazy"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                // Fallback to placeholder if image fails
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = "https://placehold.co/800x600?text=Certificate+Preview";
                                            }}
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm z-20 text-white p-6 text-center">
                                            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                            <p className="text-sm mb-6 text-gray-200">{cert.issuer} • {cert.date}</p>

                                            <a
                                                href={`https://drive.google.com/file/d/${cert.id}/view`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                                            >
                                                View Larger <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex justify-center gap-2 mt-12 flex-wrap">
                        {Array.from({ length: Math.ceil(certificates.length / itemsPerPage) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx * itemsPerPage)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerPage) === idx ? "bg-primary w-8" : "bg-primary/30"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
