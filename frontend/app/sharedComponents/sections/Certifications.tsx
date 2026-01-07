"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface Certification {
    name: string;
    issuer: string;
    year: string;
    icon: string;
    color: string;
    tier: 'Platinum' | 'Gold' | 'Core';
}

const CERTS: Certification[] = [
    { name: "Comptia A+", issuer: "CompTIA", year: "2024", icon: "settings", color: "#6366f1", tier: 'Core' },
    { name: "Comptia Network+", issuer: "CompTIA", year: "2025", icon: "globe", color: "#10b981", tier: 'Gold' },
    { name: "CCNA", issuer: "Cisco", year: "2025", icon: "server", color: "#3b82f6", tier: 'Platinum' },
];

export function Certifications() {
    return (
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Minimalist Header */}
                <div className="text-center mb-24 space-y-4">
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-black/10" />
                        <span className="text-[10px] font-mono font-black text-brand-primary uppercase tracking-[0.4em]">Validation_Nodes</span>
                        <div className="h-px w-8 bg-black/10" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">
                        Authored <span className="text-black/10">Expertise</span>
                    </h2>
                </div>

                {/* Dynamic Artifact Cluster */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 lg:gap-40">
                    {CERTS.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            {...({
                                initial: { opacity: 0, scale: 0.8 },
                                whileInView: { opacity: 1, scale: 1 },
                                viewport: { once: true },
                                transition: {
                                    delay: idx * 0.2,
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            } as any)}
                            className="relative group"
                        >
                            {/* Floating Motion */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 1.5
                                }}
                                className="relative flex flex-col items-center"
                            >
                                {/* The "Artifact" - Smaller footprint */}
                                <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">

                                    {/* Rotating Brackets */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-dashed border-black/5 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-4 border border-black/[0.03] rounded-full"
                                    />

                                    {/* Main Token */}
                                    <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 bg-white rounded-3xl shadow-xl shadow-black/5 border border-border-default flex items-center justify-center group-hover:border-brand-primary/30 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.02] pointer-events-none" />
                                        <div className="absolute top-0 left-0 p-1.5">
                                            <div className="w-1 h-1 rounded-full bg-black/10" />
                                        </div>
                                        <div style={{ color: cert.color }}>
                                            <Icon name={cert.icon as any} size={32} />
                                        </div>
                                    </div>

                                    {/* Tier Tag - Floating above */}
                                    <div className="absolute -top-4 px-2.5 py-1 bg-black text-white text-[7px] font-black uppercase tracking-widest rounded-full z-20 shadow-xl">
                                        {cert.tier}
                                    </div>

                                    {/* Glow Effect */}
                                    <div
                                        className="absolute inset-8 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                        style={{ backgroundColor: cert.color }}
                                    />
                                </div>

                                {/* Dynamic Label - Appears on hover or stays minimal */}
                                <div className="mt-8 text-center space-y-1">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-sm md:text-base font-black text-black uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                                            {cert.name}
                                        </h3>
                                        <div className="h-px w-4 bg-brand-primary opacity-0 group-hover:opacity-100 group-hover:w-8 transition-all duration-500 mt-1" />
                                    </div>

                                    {/* Details Area - Reveals on Group Hover */}
                                    <div className="h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 overflow-hidden flex flex-col items-center">
                                        <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest mt-2">{cert.issuer}</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[8px] font-mono font-black text-brand-primary">VERIFIED_2025</span>
                                            <div className="w-1 h-1 rounded-full bg-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Footnote */}
                <div className="mt-20 flex justify-center">
                    <div className="px-6 py-2 border border-black/5 rounded-full bg-gray-50/50 flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span className="text-[9px] font-mono font-black text-black/30 uppercase tracking-wider">Active Credentials</span>
                        </div>
                        <div className="h-4 w-px bg-black/5" />
                        <span className="text-[9px] font-mono font-black text-black uppercase">Archive Ref: SYS_ACC_094</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
