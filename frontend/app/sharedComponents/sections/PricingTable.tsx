"use client";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
}

interface PricingTableProps {
    title: string;
    subtitle?: string;
    plans: Plan[];
}

export function PricingTable({ title, subtitle, plans }: PricingTableProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active dot
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollPosition = e.currentTarget.scrollLeft;
        const width = e.currentTarget.offsetWidth;
        const newIndex = Math.round(scrollPosition / width);
        if (newIndex !== activeSlide && newIndex < plans.length) {
            setActiveSlide(newIndex);
        }
    };

    // Scroll to specific slide
    const scrollToSlide = (index: number) => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: index * width,
                behavior: 'smooth'
            });
            setActiveSlide(index);
        }
    };

    const nextSlide = () => {
        if (activeSlide < plans.length - 1) {
            scrollToSlide(activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide > 0) {
            scrollToSlide(activeSlide - 1);
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background-primary">
            {/* Ambient Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Sidebar: Introduction & Mobile Controls */}
                    <div className="xl:col-span-4 xl:sticky xl:top-32 h-fit space-y-12 order-1">
                        <div className="space-y-6">
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
                                    Service Baseline
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground-primary tracking-tighter uppercase font-mono leading-[0.85]">
                                {title}
                            </h2>

                            {subtitle && (
                                <p className="text-base md:text-lg font-mono opacity-60 lowercase tracking-tight leading-relaxed xl:w-[90%]">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* Mobile Navigation Interface (Hidden on Desktop) */}
                        <div className="xl:hidden space-y-8">
                            <div className="h-px w-full bg-border-default/50" />

                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground-muted/50 ml-1 block">
                                    Select Tier
                                </span>
                                {/* Tab-style Quick Nav */}
                                <div className="flex bg-background-secondary/50 p-1 rounded-xl border border-border-default overflow-hidden relative">
                                    {plans.map((plan, i) => (
                                        <button
                                            key={plan.name}
                                            onClick={() => scrollToSlide(i)}
                                            className={`flex-1 py-2.5 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all duration-300 relative z-10 ${activeSlide === i ? 'text-white' : 'text-foreground-muted overflow-hidden'}`}
                                        >
                                            <span className="truncate px-1 block">{plan.name}</span>
                                        </button>
                                    ))}
                                    <motion.div
                                        {...({
                                            animate: {
                                                left: `${(activeSlide / plans.length) * 100}%`,
                                                width: `${100 / plans.length}%`
                                            },
                                            transition: { type: "spring", stiffness: 400, damping: 35 }
                                        } as any)}
                                        className="absolute top-1 bottom-1 bg-brand-primary/80 rounded-lg z-0"
                                        style={{
                                            margin: '4px',
                                            left: `calc(${(activeSlide / plans.length) * 100}% + 4px)`,
                                            width: `calc(${100 / plans.length}% - 8px)`
                                        }}
                                    />
                                </div>

                                {/* Arrow Controls & Pagination Dots */}
                                <div className="flex items-center justify-between px-2">
                                    <button
                                        onClick={prevSlide}
                                        disabled={activeSlide === 0}
                                        className="w-10 h-10 rounded-full bg-background-secondary border border-border-default flex items-center justify-center text-foreground-primary disabled:opacity-30 transition-all hover:bg-brand-primary/10 active:scale-95 shadow-sm"
                                    >
                                        <Icon name="chevron-left" size={16} />
                                    </button>

                                    <div className="flex gap-2">
                                        {plans.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => scrollToSlide(i)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-6 bg-brand-primary' : 'w-2 bg-border-default'}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        disabled={activeSlide === plans.length - 1}
                                        className="w-10 h-10 rounded-full bg-background-secondary border border-border-default flex items-center justify-center text-foreground-primary disabled:opacity-30 transition-all hover:bg-brand-primary/10 active:scale-95 shadow-sm"
                                    >
                                        <Icon name="chevron-right" size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Plans Content (Horizontal Carousel on Mobile, Grid on Desktop) */}
                    <div className="xl:col-span-8 order-2">
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex xl:grid xl:grid-cols-3 gap-6 overflow-x-auto pb-8 xl:pb-0 scrollbar-hide snap-x snap-mandatory overflow-y-hidden"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Ensure cross-browser scrollbar hiding
                        >
                            <style jsx>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {plans.map((plan, idx) => (
                                <motion.div
                                    key={plan.name}
                                    {...({
                                        initial: { opacity: 0, y: 30 },
                                        whileInView: { opacity: 1, y: 0 },
                                        viewport: { once: true },
                                        transition: { delay: idx * 0.1, duration: 0.8 },
                                    } as any)}
                                    className="min-w-[100%] sm:min-w-[48%] xl:min-w-0 h-full flex flex-col snap-center shrink-0 xl:shrink"
                                >
                                    <div
                                        className={`h-full relative flex flex-col gap-10 w-full p-8 rounded-[2.5rem] border transition-all duration-700 overflow-hidden group ${plan.isPopular
                                            ? 'bg-white/5 backdrop-blur-2xl border-brand-primary/40 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.2)]'
                                            : 'bg-background-secondary/30 backdrop-blur-md border border-border-default hover:border-brand-primary/30'
                                            }`}
                                    >
                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl font-bold text-foreground-primary tracking-tight font-mono uppercase group-hover:text-brand-primary transition-colors">
                                                    {plan.name}
                                                </h3>
                                                {plan.isPopular && (
                                                    <div className="px-2 py-0.5 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[8px] font-black uppercase tracking-tighter">
                                                        Standard
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-black text-foreground-primary tracking-tighter leading-none">
                                                    {plan.price}
                                                </span>
                                            </div>

                                            <p className="text-xs text-foreground-secondary leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity font-mono lowercase min-h-[3rem]">
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4 flex-1 relative z-10">
                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent" />
                                            <ul className="space-y-4">
                                                {plan.features.map(feature => (
                                                    <li key={feature} className="flex gap-3 text-xs text-foreground-secondary items-start group/item">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                                        <span className="font-mono lowercase opacity-70 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button
                                            className={`w-full py-5 rounded-2xl font-mono font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 relative z-10 overflow-hidden ${plan.isPopular
                                                ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20 hover:scale-[1.02] hover:shadow-brand-primary/40 active:scale-95'
                                                : 'bg-background-muted text-foreground-primary border border-border-default hover:border-brand-primary hover:text-brand-primary'
                                                }`}
                                        >
                                            <span className="relative z-10">{plan.cta}</span>
                                        </button>
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