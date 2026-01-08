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
    icon?: string;
    title: string;
    subtitle?: string;
    plans: Plan[];
}

export function PricingTable({ icon, title, subtitle, plans }: PricingTableProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active dot
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollPosition = container.scrollLeft;

        const children = Array.from(container.children) as HTMLElement[];
        const cardElements = children.filter(child => child.tagName !== 'STYLE');

        let bestIndex = 0;
        let minDistance = Infinity;

        cardElements.forEach((child, i) => {
            const cardCenter = child.offsetLeft + (child.offsetWidth / 2);
            const containerCenter = container.offsetLeft + scrollPosition + (container.offsetWidth / 2);
            const distance = Math.abs(cardCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                bestIndex = i;
            }
        });

        if (bestIndex !== activeSlide) {
            setActiveSlide(bestIndex);
        }
    };

    const scrollToSlide = (index: number) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const children = Array.from(container.children) as HTMLElement[];
            const cardElements = children.filter(child => child.tagName !== 'STYLE');
            const targetElement = cardElements[index];

            if (targetElement) {
                const targetScroll = (targetElement.offsetLeft - container.offsetLeft) - (container.offsetWidth / 2) + (targetElement.offsetWidth / 2);
                container.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
                setActiveSlide(index);
            }
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
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="w-full md:w-[95%] lg:w-[90%] min-[1330px]:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 min-[1330px]:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Sidebar: Introduction */}
                    <div className="min-[1330px]:col-span-4 min-[1330px]:sticky min-[1330px]:top-32 h-fit space-y-12 order-1">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary font-mono flex items-center gap-2">
                                    {icon && <Icon name={icon as any} size={12} />}
                                    Service Baseline
                                </span>
                            </motion.div>

                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="relative group overflow-visible">
                                    {/* Main Title Background Shadow for Depth */}
                                    <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] opacity-10 select-none pointer-events-none uppercase font-heading text-4xl md:text-5xl lg:text-8xl font-black tracking-[-0.1em] blur-[2px]">
                                        {title}
                                    </div>

                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.1 }}
                                        className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground-primary tracking-[-0.1em] uppercase font-heading leading-[0.85] relative z-20"
                                    >
                                        {title}
                                    </motion.h2>

                                    {/* Digital Slices (Glitch Layers) */}
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={`slice-${i}`}
                                            initial={{ opacity: 0, x: 0 }}
                                            whileInView={{
                                                opacity: [0, 1, 0, 1, 0],
                                                x: [0, (i % 2 === 0 ? 10 : -10), 0, (i % 2 === 0 ? -5 : 5), 0],
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.1 * i,
                                                times: [0, 0.2, 0.4, 0.6, 1],
                                                ease: "linear"
                                            }}
                                            className="absolute inset-0 text-brand-primary/40 select-none pointer-events-none z-10 text-4xl md:text-5xl lg:text-8xl font-black tracking-[-0.1em] uppercase font-heading leading-[0.85]"
                                            style={{
                                                clipPath: `inset(${i * 25}% 0 ${(3 - i) * 25}% 0)`,
                                            }}
                                            aria-hidden="true"
                                        >
                                            {title}
                                        </motion.div>
                                    ))}

                                    {/* Fragmented Scanning Line */}
                                    <motion.div
                                        initial={{ top: "-10%", opacity: 0 }}
                                        whileInView={{ top: "110%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                                        className="absolute left-[-10%] right-[-10%] h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent z-30 blur-[1px]"
                                    />
                                </div>

                                {/* TELEMETRY GRAPHIC */}
                                <div className="flex items-center gap-4 h-16 md:h-20 shrink-0">
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="flex gap-0.5">
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        height: [4, Math.random() * 20 + 10, 4],
                                                        opacity: [0.3, 1, 0.3]
                                                    }}
                                                    transition={{
                                                        duration: 0.8 + Math.random(),
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="w-[3px] bg-brand-primary rounded-full"
                                                />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 opacity-30">
                                            <div className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
                                            <span className="text-[7px] font-mono font-black text-brand-primary uppercase tracking-widest leading-none">
                                                Live_Feed
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-t border-r border-brand-primary/20 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-2 border-b border-l border-brand-primary/10 rounded-full border-dashed"
                                        />
                                        <div className="text-[10px] font-mono font-black text-brand-primary opacity-40 animate-pulse">
                                            TX
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {subtitle && (
                                <p className="text-base md:text-lg font-body opacity-60 tracking-tight leading-relaxed min-[1330px]:w-[90%] font-medium">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* Mobile Navigation Pills (Above carousel) */}
                        <div className="min-[1330px]:hidden space-y-6 pt-8">
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
                                    animate={{
                                        left: `${(activeSlide / plans.length) * 100}%`,
                                        width: `${100 / plans.length}%`
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                    className="absolute top-1 bottom-1 bg-brand-primary rounded-lg z-0"
                                    style={{
                                        margin: '4px',
                                        left: `calc(${(activeSlide / plans.length) * 100}% + 4px)`,
                                        width: `calc(${100 / plans.length}% - 8px)`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Desktop Pagination Interface */}
                        <div className="hidden min-[1330px]:flex items-center gap-4 pt-12">
                            <div className="flex gap-2">
                                {plans.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => scrollToSlide(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-brand-primary' : 'w-2 bg-border-default'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Plans Content */}
                    <div className="min-[1330px]:col-span-8 order-2 relative">

                        {/* Mobile Navigation Arrows (Flanking) */}
                        <div className="min-[1330px]:hidden absolute top-1/2 -left-2 -right-2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
                            <button
                                onClick={prevSlide}
                                disabled={activeSlide === 0}
                                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-border-default flex items-center justify-center text-foreground-primary disabled:opacity-0 transition-all shadow-xl pointer-events-auto active:scale-90"
                            >
                                <Icon name="chevron-left" size={20} />
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={activeSlide === plans.length - 1}
                                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-border-default flex items-center justify-center text-foreground-primary disabled:opacity-0 transition-all shadow-xl pointer-events-auto active:scale-90"
                            >
                                <Icon name="chevron-right" size={20} />
                            </button>
                        </div>

                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex min-[1330px]:grid min-[1330px]:grid-cols-3 gap-6 overflow-x-auto pb-8 min-[1330px]:pb-0 scrollbar-hide snap-x snap-mandatory overflow-y-hidden px-4 min-[1330px]:px-0"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <style jsx>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {plans.map((plan, idx) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="min-w-[100%] min-[1330px]:min-w-0 h-full flex flex-col snap-center shrink-0 min-[1330px]:shrink"
                                >
                                    <div
                                        className={`h-full relative flex flex-col gap-10 w-full p-8 lg:p-10 rounded-[2.5rem] border transition-all duration-700 overflow-hidden group ${plan.isPopular
                                            ? 'bg-white border-brand-primary/20 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] scale-[1.02]'
                                            : 'bg-white border-border-default hover:border-brand-primary/30'
                                            }`}
                                    >
                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl lg:text-2xl font-bold text-foreground-primary tracking-tight font-heading uppercase group-hover:text-brand-primary transition-colors">
                                                    {plan.name}
                                                </h3>
                                                {plan.isPopular && (
                                                    <div className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[9px] font-black uppercase tracking-wider">
                                                        Recommended
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-baseline gap-1">
                                                <span className="text-6xl font-black text-foreground-primary tracking-tighter leading-none">
                                                    {plan.price}
                                                </span>
                                            </div>

                                            <p className="text-sm text-foreground-secondary leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity font-body min-h-[3rem] font-medium">
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4 flex-1 relative z-10">
                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent" />
                                            <ul className="space-y-4">
                                                {plan.features.map(feature => (
                                                    <li key={feature} className="flex gap-4 text-sm text-foreground-secondary items-start group/item">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                                        <span className="font-mono lowercase opacity-70 group-hover/item:opacity-100 transition-opacity tracking-tight">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button
                                            className={`w-full py-5 rounded-2xl font-mono font-bold uppercase tracking-[0.2em] text-sm transition-all duration-500 relative z-10 overflow-hidden ${plan.isPopular
                                                ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20 hover:scale-[1.02] hover:shadow-brand-primary/40 active:scale-95'
                                                : 'bg-background-muted text-foreground-primary border border-border-default hover:border-brand-primary hover:text-brand-primary shadow-sm'
                                                }`}
                                        >
                                            <span className="relative z-10 uppercase tracking-[0.3em]">{plan.cta}</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination dots for mobile */}
                        <div className="min-[1330px]:hidden flex justify-center gap-2 mt-4">
                            {plans.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToSlide(i)}
                                    className={`h-1 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-brand-primary' : 'w-2 bg-border-default'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}