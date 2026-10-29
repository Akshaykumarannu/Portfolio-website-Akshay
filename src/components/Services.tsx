"use client";

import { motion } from "framer-motion";
import { Code, Layout, BarChart3, Smartphone, Globe, Rocket } from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        description: "Crafting lightning-fast, modular, and reactive web applications with React.js, Next.js, and TypeScript.",
        icon: <Globe size={26} className="text-sky-400" />,
    },
    {
        title: "Dashboard & SaaS Engineering",
        description: "Designing data-rich, interactive analytics portals with real-time tracking, charts, and state management.",
        icon: <BarChart3 size={26} className="text-sky-400" />,
    },
    {
        title: "UI/UX & Design Systems",
        description: "Creating accessible, pixel-perfect user interfaces and reusable component libraries with Tailwind CSS.",
        icon: <Layout size={26} className="text-sky-400" />,
    },
    {
        title: "Responsive Mobile-First UX",
        description: "Ensuring faultless performance and adaptive layouts across smartphones, tablets, laptops, and ultra-wide screens.",
        icon: <Smartphone size={26} className="text-sky-400" />,
    },
    {
        title: "Performance Optimization",
        description: "Fine-tuning Core Web Vitals, reducing bundle sizes, and achieving near 100 Lighthouse performance metrics.",
        icon: <Rocket size={26} className="text-sky-400" />,
    },
    {
        title: "API & Full-Stack Integration",
        description: "Connecting complex frontend states to RESTful endpoints, backend microservices, and databases smoothly.",
        icon: <Code size={26} className="text-sky-400" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
                        <span>SERVICES &amp; CAPABILITIES</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        High-impact solutions for <span className="text-sky-400">digital growth</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="p-8 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1.5"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
