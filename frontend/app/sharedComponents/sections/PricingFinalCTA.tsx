"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

export function PricingFinalCTA() {
    return (
        <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary relative overflow-hidden border-t border-border-default/40">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent_50%)]" />

            <div className="w-full px-4 md:px-6 relative z-10">
                <div className="w-[92%] md:w-[88%] lg:w-[82%] xl:w-[75%] mx-auto text-center space-y-16 backdrop-blur-sm bg-white/5 p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(59,130,246,0.1)]">

                    {/* Main Heading */}
                    <motion.div
                        {...({
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { duration: 0.8 },
                        } as any)}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground-primary tracking-tighter uppercase font-mono">
                            Ready to <span className="text-brand-primary">Get Started?</span>
                        </h2>
                        <p className="text-[10px] md:text-sm text-foreground-secondary/70 w-[90%] mx-auto leading-loose font-mono uppercase tracking-[0.1em]">
                            Choose the service tier that fits your needs. All plans include direct communication,
                            transparent pricing, and professional delivery.
                        </p>
                    </motion.div>

                    {/* Quick Info Cards */}
                    <motion.div
                        {...({
                            initial: { opacity: 0, scale: 0.95 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: true },
                            transition: { duration: 0.6, delay: 0.2 },
                        } as any)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: "check", title: "No Hidden Fees", desc: "Transparent pricing" },
                            { icon: "user", title: "Direct Contact", desc: "Work with me directly" },
                            { icon: "docs", title: "Flexible Terms", desc: "Project or hourly rates" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface-secondary/20 border border-border-default/50 rounded-2xl p-6 hover:bg-surface-secondary/40 transition-all group active:scale-95">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                    <Icon name={item.icon as any} className="text-brand-primary" size={24} />
                                </div>
                                <h3 className="font-bold text-foreground-primary mb-1 uppercase text-xs tracking-widest font-mono">{item.title}</h3>
                                <p className="text-[10px] text-foreground-secondary opacity-60 font-mono lowercase">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        {...({
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { duration: 0.6, delay: 0.4 },
                        } as any)}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-white font-mono font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:scale-105 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 group">
                            SCHEDULE CONSULTATION
                            <Icon name="arrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-background-muted text-foreground-primary font-mono font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl border border-border-default hover:border-brand-primary transition-all flex items-center justify-center">
                            VIEW PORTFOLIO
                        </button>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.div
                        {...({
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1 },
                            viewport: { once: true },
                            transition: { duration: 0.6, delay: 0.6 },
                        } as any)}
                        className="text-[10px] text-foreground-muted flex items-center justify-center gap-3 pt-10 border-t border-border-default/20 font-mono uppercase tracking-widest"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                        Questions? Reach out anytime for a free project assessment.
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
