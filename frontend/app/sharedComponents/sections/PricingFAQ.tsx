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
        <section className="py-24 md:py-32 lg:py-48 relative overflow-hidden bg-white border-t border-gray-100" style={{ paddingTop: 0 }}>
            {/* Background Texture: Subtle Technical Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

            <div className="w-[95%] md:w-[92%] mx-auto relative z-10">


                {/* SINGLE COLUMN DROPDOWNS */}
                <div className="w-full space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`group border border-border-default transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden ${openIndex === idx ? 'bg-brand-primary/[0.02] border-brand-primary/20' : 'bg-white hover:border-brand-primary/30 shadow-sm hover:shadow-md'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-start gap-8 p-8 md:p-10 text-left transition-all"
                            >
                                {/* Technical Index */}
                                <div className="flex flex-col items-center pt-1">
                                    <span className="text-[10px] font-mono font-black text-gray-300 group-hover:text-brand-primary transition-colors">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className={`w-[1px] h-8 bg-gray-100 mt-2 transition-all ${openIndex === idx ? 'h-16 bg-brand-primary' : ''}`} />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <span className="block text-xl md:text-2xl font-black text-foreground-primary group-hover:text-brand-primary transition-colors leading-snug font-heading tracking-tighter uppercase">
                                        {faq.question}
                                    </span>

                                    <AnimatePresence>
                                        {openIndex === idx && (
                                            <motion.div
                                                {...({
                                                    initial: { opacity: 0, y: -10 },
                                                    animate: { opacity: 1, y: 0 },
                                                    exit: { opacity: 0, y: -10 },
                                                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                                } as any)}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-base md:text-lg font-body opacity-60 tracking-tight leading-relaxed max-w-[95%] font-medium">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className={`mt-1 transition-transform duration-500 ${openIndex === idx ? 'rotate-90 text-brand-primary' : 'text-gray-300'}`}>
                                    <Icon name="arrowRight" size={24} strokeWidth={3} />
                                </div>
                            </button>
                        </div>
                    ))}

                    {/* Footer Hardware Status */}
                    <div className="mt-12 flex items-center justify-between px-8 py-6 border border-gray-100 bg-white shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        {...({
                                            animate: { opacity: [0.3, 1, 0.3] },
                                            transition: { duration: 1.5, repeat: Infinity, delay: i * 0.2 }
                                        } as any)}
                                        className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                                    />
                                ))}
                            </div>
                            <span className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-widest">
                                system_status: resolving_queries
                            </span>
                        </div>
                        <span className="text-[9px] font-mono font-medium text-gray-300 uppercase tracking-[0.4em]">
                            UID: {mounted ? Math.random().toString(16).slice(2, 10).toUpperCase() : '--------'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
