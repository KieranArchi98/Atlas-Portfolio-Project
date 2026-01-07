"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

// Custom Graphic Components for Metric Cards
const UptimeGraphic = () => (
    <div className="relative w-full h-12 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 200 60" className="w-full h-full opacity-40">
            <motion.path
                d="M 0 30 L 40 30 L 50 10 L 60 50 L 70 30 L 200 30"
                fill="none"
                stroke="var(--color-brand-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1],
                    opacity: [0, 1, 0],
                    x: [0, 200]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <path
                d="M 0 30 L 200 30"
                fill="none"
                stroke="var(--color-brand-primary)"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-20"
            />
        </svg>
    </div>
);

const LatencyGraphic = () => (
    <div className="relative w-full h-12 flex items-center justify-center">
        <div className="relative w-10 h-10">
            {[0, 1, 2].map(i => (
                <motion.div
                    key={i}
                    className="absolute inset-0 border border-brand-primary rounded-full"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                />
            ))}
            <div className="absolute inset-0 m-auto w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
        </div>
    </div>
);

const NetworkGraphic = () => (
    <div className="relative w-full h-12 flex items-center justify-center">
        <div className="flex gap-2 items-center">
            {[0, 1, 2].map(i => (
                <div key={i} className="flex flex-col gap-1 items-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="w-2 h-2 rounded-full bg-brand-primary"
                    />
                    <div className="w-px h-6 bg-gradient-to-b from-brand-primary/40 to-transparent" />
                </div>
            ))}
        </div>
    </div>
);

const StackGraphic = () => (
    <div className="relative w-full h-12 flex items-center justify-center">
        <div className="relative w-12 h-8">
            {[0, 1, 2].map(i => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-4 border border-brand-primary/30 rounded-sm bg-brand-primary/5"
                    style={{
                        left: i * 4,
                        bottom: i * 6,
                        zIndex: 10 - i
                    }}
                    animate={{
                        y: [0, -4, 0],
                        borderColor: ["rgba(var(--color-brand-primary-rgb), 0.3)", "rgba(var(--color-brand-primary-rgb), 1)", "rgba(var(--color-brand-primary-rgb), 0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
            ))}
        </div>
    </div>
);

export function PricingFinalCTA() {
    return (
        <section className="py-12 md:py-32 lg:py-48 relative overflow-hidden bg-white">
            <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto relative z-10">
                <div className="w-full xl:grid xl:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* LEFT: Engagement Section (7-columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="xl:col-span-7 space-y-12"
                    >
                        <div className="space-y-8">
                            {/* Technical Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-border-default shadow-sm"
                            >
                                <div className="flex gap-1">
                                    {[0, 1, 2].map(i => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                            className="w-1 h-3 bg-brand-primary rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-primary font-mono">
                                    Engagement_V04.initialize
                                </span>
                            </motion.div>

                            <h2 className="text-3xl md:text-7xl lg:text-8xl xl:text-8xl font-black text-foreground-primary tracking-tighter uppercase font-heading leading-[0.85] mb-4">
                                Ready to <br /> <span className="text-brand-primary">Accelerate?</span>
                            </h2>

                            <p className="text-base md:text-lg text-foreground-secondary leading-relaxed w-full lg:w-[85%] font-medium opacity-60">
                                Synchronize your requirements with professional technical execution. Transparent scaling for modern infrastructure. Pure deployment, zero friction.
                            </p>
                        </div>

                        {/* Engagement Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-12 py-5 bg-brand-primary text-white font-mono font-bold uppercase tracking-[0.2em] text-sm rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-4 group"
                            >
                                Initiate Protocol
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Icon name="arrowRight" size={14} />
                                </motion.div>
                            </motion.button>

                            <motion.button
                                whileHover={{ backgroundColor: "var(--color-background-secondary)", borderColor: "var(--color-brand-primary)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-12 py-5 border border-border-default bg-transparent text-foreground-primary font-mono font-bold uppercase tracking-[0.2em] text-sm rounded-2xl transition-all flex items-center justify-center"
                            >
                                System Specs
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT: Dynamic Metric Matrix (5-columns) */}
                    <div className="xl:col-span-5 mt-20 xl:mt-0 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {[
                                { title: "Uptime Baseline", value: "99.9%", detail: "LIVE_STATUS", icon: "dashboard", graphic: <UptimeGraphic /> },
                                { title: "Response Latency", value: "<12h", detail: "SLO_CONFIRMED", icon: "server", graphic: <LatencyGraphic /> },
                                { title: "Network Access", value: "Global", detail: "CDN_EDGE", icon: "globe", graphic: <NetworkGraphic /> },
                                { title: "Technical Stack", value: "Custom", detail: "FULL_ENV", icon: "code", graphic: <StackGraphic /> }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -8 }}
                                    className="relative p-8 bg-white border border-border-muted/10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] transition-all group overflow-hidden"
                                >
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 flex items-center justify-center bg-white border border-border-default rounded-2xl group-hover:border-brand-primary/30 transition-colors shadow-sm">
                                                <Icon name={item.icon as any} size={20} className="text-brand-primary" />
                                            </div>
                                            <div className="w-24">
                                                {item.graphic}
                                            </div>
                                        </div>

                                        <div className="space-y-4 mt-12">
                                            <div className="flex flex-col gap-1">
                                                <div className="text-[10px] font-black text-foreground-muted font-mono uppercase tracking-[0.2em]">{item.title}</div>
                                                <div className="text-3xl lg:text-4xl font-black text-foreground-primary font-heading tracking-tighter group-hover:text-brand-primary transition-all leading-none uppercase">
                                                    {item.value}
                                                </div>
                                            </div>

                                            {/* Dynamic Metric Bar */}
                                            <div className="w-full h-1 bg-surface-secondary/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "70%" }}
                                                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                                                    className="h-full bg-brand-primary/30 group-hover:bg-brand-primary transition-colors"
                                                />
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-brand-primary animate-ping" />
                                                <span className="text-[9px] text-foreground-muted font-mono uppercase tracking-[0.2em] group-hover:text-foreground-primary transition-colors">{item.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
