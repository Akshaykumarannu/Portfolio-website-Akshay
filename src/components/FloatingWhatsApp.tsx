"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/919740791523?text=Hi%20Akshay,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-7 right-7 z-50 p-3.5 bg-emerald-500 text-black font-bold rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all border border-emerald-400/40"
            title="Chat directly on WhatsApp"
            aria-label="Chat directly on WhatsApp"
        >
            <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
                <MessageCircle size={24} />
            </motion.div>
        </motion.a>
    );
}
