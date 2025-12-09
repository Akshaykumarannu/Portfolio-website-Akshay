"use client";

import { motion } from "framer-motion";
import { Code, Layout, BarChart3, Smartphone, Globe, Rocket } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Building fast, responsive, and secure websites using modern technologies like React, Next.js, and Tailwind CSS.",
        icon: <Globe size={32} />,
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces that provide seamless user experiences.",
        icon: <Layout size={32} />,
    },
    {
        title: "Dashboard Development",
        description: "Developing interactive and data-driven dashboards to visualize complex data effectively.",
        icon: <BarChart3 size={32} />,
    },
    {
        title: "Responsive Design",
        description: "Ensuring your website looks amazing on all devices, from mobile phones to large desktop screens.",
        icon: <Smartphone size={32} />,
    },
    {
        title: "Performance Optimization",
        description: "Optimizing website performance for faster load times and better SEO rankings.",
        icon: <Rocket size={32} />,
    },
    {
        title: "Custom Solutions",
        description: "Tailored software solutions to meet your specific business needs and requirements.",
        icon: <Code size={32} />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-background border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
