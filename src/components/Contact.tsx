"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formState;

        // Construct the WhatsApp message with encoded parameters
        const messageText = `*Portfolio Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/919740791523?text=${encodeURIComponent(messageText)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);

        // Reset form
        setFormState({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

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
                        <span>07 / GET IN TOUCH</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
                        Let's build something <span className="text-sky-400">extraordinary</span> together.
                    </h2>
                    <p className="text-zinc-400 text-base max-w-xl mt-3 font-light">
                        Whether you have an ambitious web project, a full-time engineering opportunity, or simply want to connect, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
                    {/* Left Column: Direct Info & Quick Channels (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-8 rounded-3xl bg-[#121212] border border-white/[0.08] space-y-6">
                            <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:akshayyrai@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-sky-500/30 transition-all group"
                                >
                                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase">Email</div>
                                        <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                            akshayyrai@gmail.com
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="tel:+919740791523"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-sky-500/30 transition-all group"
                                >
                                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase">Phone &amp; WhatsApp</div>
                                        <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                            +91 97407 91523
                                        </div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                                    <div className="p-3 rounded-xl bg-white/[0.04] text-zinc-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase">Location</div>
                                        <div className="text-sm font-semibold text-zinc-200">
                                            Kasaragod, Kerala, India
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/919740791523"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                            >
                                <MessageCircle size={18} />
                                <span>Quick Chat on WhatsApp</span>
                            </a>
                        </div>

                        {/* Social Links Bar */}
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#121212] border border-white/[0.08]">
                            <span className="text-xs font-mono uppercase text-zinc-500 mr-2">Socials:</span>
                            <a
                                href="https://github.com/Akshaykumarannu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-all"
                                aria-label="GitHub Profile"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/in/akshay-kumar-78168a29b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-sky-400 transition-all"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/annu_akshay/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-pink-400 transition-all"
                                aria-label="Instagram Profile"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Contact Form (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 md:p-10 rounded-3xl bg-[#121212] border border-white/[0.08] space-y-6 relative"
                        >
                            <h3 className="text-xl font-bold text-white tracking-tight">Send a Direct Message</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="Alex Mercer"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none text-white placeholder:text-zinc-600 text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="alex@company.com"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none text-white placeholder:text-zinc-600 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                    Project Scope or Inquiry
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Tell me about your project, timeline, or position details..."
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none text-white placeholder:text-zinc-600 text-sm transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-black font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:translate-y-0.5"
                            >
                                <Send size={18} />
                                <span>Dispatch Message via WhatsApp</span>
                            </button>

                            {isSent && (
                                <p className="text-center text-xs font-mono text-emerald-400 animate-pulse">
                                    ✓ Opening WhatsApp conversation with Akshay Kumar...
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
