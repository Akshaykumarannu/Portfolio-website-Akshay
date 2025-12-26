"use client";

import { motion } from "framer-motion";

// Clean, professional data structure
const skills = {
    frontend: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Framer Motion", "Redux"
    ],
    backend: [
        "Node.js",  "MySQL", "MongoDB", "Firebase", "PostgreSQL",  "REST APIs"
    ],
    tools: [
        "Git", "GitHub", "VS Code", "Postman",  "Vercel", "Netlify"
    ]
};

const SkillPill = ({ name }: { name: string }) => (
    <div className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all cursor-default whitespace-nowrap">
        {name}
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 50 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden relative w-full py-2 mask-gradient">
            <motion.div
                initial={{ x: direction === "left" ? "0%" : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex gap-4 flex-shrink-0 min-w-full px-2"
            >
                {/* Duplicate 4 times for seamless loop */}
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <SkillPill key={`${item}-${index}`} name={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-16 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
            <div className="container mx-auto px-4 mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        Technical Proficiency
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                        A concise overview of the technologies and tools I utilize to build scalable solutions.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-5">
                <MarqueeRow items={skills.frontend} direction="left" speed={60} />
                <MarqueeRow items={skills.backend} direction="right" speed={60} />
                <MarqueeRow items={skills.tools} direction="left" speed={60} />
            </div>
        </section>
    );
}
