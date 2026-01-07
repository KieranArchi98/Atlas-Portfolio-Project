"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../ui/Icon';

const FAQS = [
    {
        question: "What happens after I purchase?",
        answer: "We schedule an immediate onboarding call to define scope. Following that, you'll receive access to a private repository and a shared project board to track progress."
    },
    {
        question: "Can I host the application myself?",
        answer: "Absolutely. You receive full source code and Docker containers. You can deploy to AWS, Vercel, DigitalOcean, or your own bare-metal hardware."
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes. While the codebase is handed over fully functional, I offer retainer packages for updates, security patches, and feature additions."
    },
    {
        question: "Is the design customizable?",
        answer: "Everything is built with modular components and Tailwind CSS. Changing the theme, colors, or typography is a matter of updating a single configuration file."
    }
];

export function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-12 md:py-32 relative overflow-hidden bg-white">
            <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto relative z-10">

                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary font-mono">
                                FAQ_RESOURCES.v04
                            </span>
                        </motion.div>
                        <h2 className="text-2xl md:text-6xl font-black text-foreground-primary tracking-tighter uppercase font-heading leading-none">
                            FAQ<span className="text-brand-primary">.</span>
                        </h2>
                    </div>

                    {/* FAQ Grid/List */}
                    <div className="grid grid-cols-1 gap-6">
                        {FAQS.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group bg-white border border-border-muted/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${openIndex === idx
                                    ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border-brand-primary/20'
                                    : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-brand-primary/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`font-mono text-[10px] font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-foreground-muted/40'}`}>
                                            [{String(idx + 1).padStart(2, '0')}]
                                        </span>
                                        <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase font-heading transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-foreground-primary'}`}>
                                            {faq.question}
                                        </span>
                                    </div>

                                    <div className={`p-3 rounded-full border border-border-default transition-all duration-500 ${openIndex === idx ? 'rotate-180 bg-brand-primary border-brand-primary text-white' : 'group-hover:border-brand-primary/30'}`}>
                                        <Icon name="chevron-down" size={16} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="px-8 md:px-10 pb-10 flex gap-6">
                                                <div className="w-px bg-gradient-to-b from-brand-primary/40 to-transparent ml-[1.1rem]" />
                                                <p className="text-base md:text-lg text-foreground-secondary/70 leading-relaxed font-medium max-w-[85%]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Status */}
                    <div className="flex items-center justify-between p-8 bg-brand-primary/5 rounded-[2.5rem] border border-brand-primary/10">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                {[0, 1, 2].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] font-mono font-black text-brand-primary/60 uppercase tracking-widest">
                                system_status: queries_active
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-mono font-black text-foreground-muted uppercase tracking-widest">
                                node_sync: confirmed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
