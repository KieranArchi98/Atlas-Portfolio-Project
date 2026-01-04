"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { useState, useEffect } from 'react';

interface ProductHeroProps {
    sectionTag?: string;
    title: string;
    description: string;
}

const TERMINAL_LINES = [
    { text: "> ESTABLISHING_SECURE_CONNECTION...", color: "text-gray-500" },
    { text: "> HANDSHAKE_COMPLETE [::1]", color: "text-gray-500" },
    { text: "> AUTHENTICATING USER...", color: "text-blue-500 font-bold" },
    { text: "> ACCESS GRANTED: LVL_ADMIN", color: "text-green-500" },
    { text: "> MOUNTING_MODULES:", color: "text-gray-300" },
    { text: "  [+] TECHNICAL_SUPPORT_OPS", color: "text-purple-400" },
    { text: "  [+] NETWORK_SYSADMIN_CORE", color: "text-purple-400" },
    { text: "  [+] FULL_STACK_SOFTWARE", color: "text-purple-400" },
    { text: "  [+] CLOUD_DIAGNOSTICS", color: "text-purple-400" },
    { text: "> SYSTEM_READY.", color: "text-green-500" },
];

export function ProductHero({
    sectionTag = "SYSTEM_MANIFEST: CAPABILITY_01",
    title,
    description,
}: ProductHeroProps) {
    // Terminal typing animation state
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        if (visibleLines < TERMINAL_LINES.length) {
            const timeout = setTimeout(() => {
                setVisibleLines(prev => prev + 1);
            }, 300 + Math.random() * 400); // Random typing variablity
            return () => clearTimeout(timeout);
        }
    }, [visibleLines]);

    return (
        <section className="relative min-h-[75vh] flex items-center bg-background-primary overflow-hidden border-b border-border-default">
            {/* --- Background Elements --- */}

            {/* Diagonal Slice Overlay */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent skew-x-12 z-0 pointer-events-none" />


            <div className="container mx-auto px-6 relative z-10 w-[90%] xl:w-[85%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Technical Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-[10px] font-mono tracking-widest uppercase text-brand-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_infinite]" />
                            {sectionTag}
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground-primary leading-[1.05]">
                                {title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h1>
                            <div className="w-20 h-1 bg-brand-primary" />
                        </div>

                        <p className="text-lg text-foreground-secondary/80 w-full max-w-[90%] md:max-w-[85%] leading-relaxed font-light">
                            {description}
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="group px-6 py-3 bg-foreground-primary text-background-primary font-bold rounded-lg flex items-center gap-2 hover:bg-brand-primary transition-colors">
                                VIEW PROJECTS
                                <Icon name="arrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            {/* Secondary Link */}
                            <button className="px-6 py-3 border border-border-default rounded-lg text-foreground-secondary font-medium hover:bg-background-secondary transition-colors font-mono text-sm">
                                VIEW DOCS
                            </button>
                        </div>
                    </motion.div>


                    {/* RIGHT COLUMN: Terminal Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Floating Glass Panel behind */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/10 to-indigo-500/10 rounded-2xl blur-xl" />

                        {/* The Terminal Window */}
                        <div className="relative bg-[#0f1117] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm">
                            {/* Window Header */}
                            <div className="bg-[#1a1d26] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-gray-500 text-xs tracking-widest">USER_SESSION: ADMIN</div>
                            </div>

                            {/* Window Body */}
                            <div className="p-6 h-[22rem] overflow-hidden flex flex-col justify-end">
                                <div className="space-y-2">
                                    {TERMINAL_LINES.map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: visibleLines >= i ? 1 : 0, x: visibleLines >= i ? 0 : -10 }}
                                            className={`${line.color}`}
                                        >
                                            <span className="opacity-50 mr-2">{i < 9 ? `0${i + 1}` : i + 1}</span>
                                            {line.text}
                                            {i === visibleLines && (
                                                <span className="inline-block w-2.5 h-4 bg-green-500 ml-1 animate-pulse align-middle" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative scanline */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_2px,3px_100%] opacity-20" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -right-8 -bottom-8 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden xl:block"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 3 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Icon name="check" size={24} className="text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">System Status</div>
                                    <div className="font-bold text-gray-900">100% OPERATIONAL</div>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
