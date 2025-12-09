"use client";

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                            Akshay Kumar
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Building the future of the web, one pixel at a time.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Akshay Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
