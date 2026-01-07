"use client";

import { motion } from 'framer-motion';

const CONTAINER_CLASS = "h-full w-8 md:w-10 relative flex flex-col justify-end items-center overflow-hidden rounded-full bg-surface-secondary/40 border border-brand-primary/10 shadow-inner";

export function RevenueVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            {/* Rising Bar with glowing cap */}
            <motion.div
                className="w-full bg-emerald-500 rounded-t-sm relative"
                initial={{ height: "0%" }}
                whileInView={{ height: "85%" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,1)]" />
            </motion.div>
            {/* Floating Particles */}
            {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    initial={{ bottom: "0%", opacity: 0 }}
                    animate={{ bottom: "100%", opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ left: `${20 + (i * 20)}%` }}
                />
            ))}
        </div>
    );
}

export function CertificationsVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            <motion.div
                className="w-full bg-blue-600 rounded-t-sm relative"
                initial={{ height: "0%" }}
                whileInView={{ height: "65%" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-300 shadow-[0_0_15px_rgba(37,99,235,1)]" />
                {/* Floating Ring Particle */}
                <motion.div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-blue-400/50"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
}

export function ProjectsVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            <motion.div
                className="w-full bg-violet-600 rounded-t-sm relative"
                initial={{ height: "0%" }}
                whileInView={{ height: "75%" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-violet-300 shadow-[0_0_15px_rgba(124,58,237,1)]" />
                {/* Layered segments */}
                <div className="absolute inset-0 flex flex-col-reverse p-[1px] gap-[2px]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-full h-1.5 bg-violet-400/20 rounded-[1px]" />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export function HoursVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            <motion.div
                className="w-full bg-amber-500 rounded-t-sm relative"
                initial={{ height: "0%" }}
                whileInView={{ height: "90%" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-200 shadow-[0_0_15px_rgba(245,158,11,1)]" />
                {/* Scanning Light Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent h-4 w-full"
                    animate={{ top: ["100%", "-20%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
}

export function MetricVisual({ variant }: { variant: string }) {
    switch (variant) {
        case 'revenue': return <RevenueVisual />;
        case 'certifications': return <CertificationsVisual />;
        case 'projects': return <ProjectsVisual />;
        case 'hours': return <HoursVisual />;
        default: return <RevenueVisual />;
    }
}

