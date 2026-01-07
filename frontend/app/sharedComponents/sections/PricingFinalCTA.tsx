"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

export function PricingFinalCTA() {
    return (
        <section className="py-24 md:py-32 lg:py-48 relative overflow-hidden bg-white border-t border-gray-100">
            {/* Background Texture: Subtle Technical Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

            <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto relative z-10">
                <div className="w-full xl:grid xl:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* LEFT: Engagement Terminal (7-columns) */}
                    <motion.div
                        {...({
                            initial: { opacity: 0, x: -40 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: true },
                            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                        } as any)}
                        className="xl:col-span-7 space-y-12"
                    >
                        <div className="space-y-8">
                            {/* Protocol Header */}
                            <motion.div
                                {...({
                                    initial: { opacity: 0, x: -20 },
                                    whileInView: { opacity: 1, x: 0 },
                                    transition: { duration: 0.5 },
                                } as any)}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary font-mono">
                                    Protocol: engagement_v04
                                </span>
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-foreground-primary tracking-tighter uppercase font-heading leading-[0.85] mb-4">
                                Final <br /> <span className="text-brand-primary italic">Initialization.</span>
                            </h2>

                            <p className="text-base md:text-lg font-body opacity-60 tracking-tight leading-relaxed w-full lg:w-[90%] font-medium">
                                Synchronize your requirements with professional technical execution. Transparent scaling for modern infrastructure. No retainers. Pure deployment.
                            </p>
                        </div>

                        {/* Custom Engagement Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <motion.button
                                {...({
                                    whileHover: { scale: 1.02 },
                                    whileTap: { scale: 0.98 }
                                } as any)}
                                className="w-full sm:w-auto px-12 py-5 bg-brand-primary text-white font-mono font-bold uppercase tracking-[0.2em] text-sm rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-4"
                            >
                                Initiate Protocol
                                <Icon name="arrowRight" size={14} className="animate-pulse" />
                            </motion.button>

                            <motion.button
                                {...({
                                    whileHover: { backgroundColor: "#f9fafb" },
                                    whileTap: { scale: 0.98 }
                                } as any)}
                                className="w-full sm:w-auto px-12 py-5 border border-border-default bg-white text-foreground-primary font-mono font-bold uppercase tracking-[0.2em] text-sm rounded-2xl hover:border-brand-primary/30 transition-all flex items-center justify-center"
                            >
                                View Specs
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT: Service Matrix (Bento / Hardware Aesthetics - 5-columns) */}
                    <div className="xl:col-span-5 mt-20 xl:mt-0 relative">

                        {/* Hardware Corner Brackets */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-[3px] border-l-[3px] border-gray-100" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-[3px] border-r-[3px] border-gray-100" />

                        {/* Matrix Grid */}
                        <div className="grid grid-cols-2 gap-6 relative">
                            {[
                                { title: "Uptime Baseline", value: "99.9%", detail: "guaranteed", icon: "dashboard" },
                                { title: "Response Latency", value: "<12H", detail: "priority", icon: "server" },
                                { title: "Network Access", value: "Global", detail: "edge_opt", icon: "globe" },
                                { title: "Technical Stack", value: "Custom", detail: "full_env", icon: "code" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    {...({
                                        initial: { opacity: 0, y: 20 },
                                        whileInView: { opacity: 1, y: 0 },
                                        viewport: { once: true },
                                        transition: { delay: idx * 0.15, duration: 0.8 }
                                    } as any)}
                                    className="p-8 border border-border-default bg-white rounded-[2.5rem] space-y-6 hover:border-brand-primary/30 transition-all group relative overflow-hidden"
                                >
                                    {/* Corner Index */}
                                    <div className="absolute top-3 right-4 text-[8px] font-mono text-foreground-muted/30 uppercase">SYS_PRM_{idx + 100}</div>

                                    <div className="w-12 h-12 flex items-center justify-center bg-background-secondary rounded-xl group-hover:bg-brand-primary/5 transition-colors border border-border-default">
                                        <Icon name={item.icon as any} size={20} className="text-foreground-muted group-hover:text-brand-primary transition-colors" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-foreground-muted font-mono uppercase tracking-[0.2em]">{item.title}</div>
                                        <div className="text-3xl lg:text-4xl font-black text-foreground-primary font-heading tracking-tighter group-hover:text-brand-primary transition-colors leading-none">
                                            {item.value}
                                        </div>
                                        <div className="text-[9px] text-foreground-muted/50 font-mono uppercase italic tracking-widest">{item.detail}</div>
                                    </div>

                                    {/* Progress Micro-indicator */}
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border-muted">
                                        <motion.div
                                            {...({
                                                initial: { width: 0 },
                                                whileInView: { width: "100%" },
                                                transition: { duration: 2, delay: 1 + idx * 0.2 }
                                            } as any)}
                                            className="h-full bg-brand-primary/20 group-hover:bg-brand-primary/40"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Hardware Label */}
                        <div className="mt-8 flex items-center justify-between px-2 pt-6 border-t border-gray-100">
                            <div className="flex gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-brand-primary' : 'bg-gray-100'}`} />
                                ))}
                            </div>
                            <span className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-[0.4em]">
                                manual_override: enabled
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
