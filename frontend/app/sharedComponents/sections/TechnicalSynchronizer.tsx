"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Icon, IconName } from '../ui/Icon';

interface Module {
    title: string;
    description: string;
    icon: IconName;
    variant: string;
}

interface TechnicalSynchronizerProps {
    modules: Module[];
    visualComponent: React.ComponentType<{ variant?: string }>;
}

export function TechnicalSynchronizer({ modules, visualComponent: VisualComponent }: TechnicalSynchronizerProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto relative min-h-[500px] sm:min-h-[800px]">

                {/* SVG Connecting Lines - Hidden on very small mobile for clarity if needed, but keeping for now */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none">
                    <motion.path
                        d="M 200 200 L 400 375"
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        style={{ pathLength } as any}
                    />
                    <motion.path
                        d="M 800 200 L 600 375"
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        style={{ pathLength } as any}
                    />
                    <motion.path
                        d="M 200 600 L 400 425"
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        style={{ pathLength } as any}
                    />
                    <motion.path
                        d="M 800 600 L 600 425"
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        style={{ pathLength } as any}
                    />
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--color-brand-primary)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Central Hub Stage */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            {...({
                                animate: { rotate: 360 },
                                transition: { duration: 20, repeat: Infinity, ease: "linear" }
                            } as any)}
                            className="absolute inset-0 border border-brand-primary/10 rounded-full"
                        />
                        <motion.div
                            {...({
                                animate: { rotate: -360 },
                                transition: { duration: 15, repeat: Infinity, ease: "linear" }
                            } as any)}
                            className="absolute inset-4 sm:inset-8 border border-brand-primary/5 rounded-full border-dashed"
                        />

                        <div className="relative w-[70%] h-[70%] sm:w-[80%] h-[80%] translate-y-[50px]">
                            <VisualComponent variant={modules[activeIndex].variant} />
                        </div>

                        {/* Status HUD */}
                        <div className="absolute top-0 right-0 p-2 sm:p-4 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border-default shadow-xl hidden sm:block">
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-mono font-black text-brand-primary uppercase tracking-widest">Core_Status</span>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] sm:text-xs font-black text-foreground-primary uppercase">Synchronized</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Reveal Area */}
                        <div className="absolute -bottom-24 sm:-bottom-40 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80%] lg:w-[50%] text-center translate-y-[100px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    {...({
                                        initial: { opacity: 0, y: 15 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -10 },
                                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                    } as any)}
                                    className="space-y-4 pointer-events-none"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
                                        <h4 className="text-[10px] sm:text-xs font-black text-brand-primary uppercase tracking-[0.4em] leading-none mb-1">
                                            {modules[activeIndex].title}
                                        </h4>
                                    </div>
                                    <p className="text-[13px] sm:text-[16px] text-foreground-secondary font-mono leading-relaxed px-4 opacity-90">
                                        {modules[activeIndex].description}
                                    </p>
                                    <div className="flex justify-center gap-4 pt-2">
                                        <div className="w-1 h-1 rounded-full bg-brand-primary/20" />
                                        <div className="w-1 h-1 rounded-full bg-brand-primary/40" />
                                        <div className="w-1 h-1 rounded-full bg-brand-primary/20" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Satellite Module Nodes */}
                <div className="relative min-h-[450px] sm:min-h-[800px] z-30">
                    <div className="absolute top-0 left-0 w-[45%] sm:w-[350px]">
                        <ModuleNode
                            module={modules[0]} alignment="left" index="01"
                            isActive={activeIndex === 0} onClick={() => setActiveIndex(0)}
                        />
                    </div>
                    <div className="absolute top-0 right-0 w-[45%] sm:w-[350px]">
                        <ModuleNode
                            module={modules[1]} alignment="right" index="02"
                            isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[45%] sm:w-[350px]">
                        <ModuleNode
                            module={modules[2]} alignment="left" index="03"
                            isActive={activeIndex === 2} onClick={() => setActiveIndex(2)}
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-[45%] sm:w-[350px]">
                        <ModuleNode
                            module={modules[3]} alignment="right" index="04"
                            isActive={activeIndex === 3} onClick={() => setActiveIndex(3)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ModuleNode({ module, alignment, index, isActive, onClick }: {
    module: Module; alignment: 'left' | 'right'; index: string; isActive: boolean; onClick: () => void
}) {
    return (
        <motion.div
            {...({
                initial: { opacity: 0, x: alignment === 'left' ? -20 : 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true }
            } as any)}
            onClick={onClick}
            className={`group flex flex-col gap-3 sm:gap-6 cursor-pointer ${alignment === 'right' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
        >
            <div className={`flex items-center w-full gap-2 sm:gap-4 ${alignment === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center transition-all flex-shrink-0 ${isActive
                    ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/40 scale-110'
                    : 'bg-white text-foreground-muted group-hover:bg-brand-primary/10 group-hover:text-brand-primary border border-border-default'
                    }`}>
                    <Icon name={module.icon} size={16} className="sm:scale-125" />
                </div>

                <div className={`flex-1 space-y-0.5 sm:space-y-3 ${alignment === 'right' ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-1.5 sm:gap-3 transition-transform ${alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                        {alignment === 'right' && <div className="h-px w-4 sm:w-8 bg-brand-primary/30 hidden sm:block" />}
                        <span className={`text-[6px] sm:text-[10px] font-mono font-black uppercase tracking-[0.3em] ${isActive ? 'text-brand-primary' : 'text-brand-primary/40'}`}>
                            Module_{index}
                        </span>
                        {alignment === 'left' && <div className="h-px w-4 sm:w-8 bg-brand-primary/30 hidden sm:block" />}
                    </div>
                    <h3 className={`text-[10px] sm:text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight transition-all ${isActive ? 'text-brand-primary scale-105 origin-left' : 'text-foreground-primary'}`}>
                        {module.title}
                    </h3>
                </div>
            </div>

            <p className="hidden lg:block text-sm sm:text-base text-foreground-secondary/70 font-mono leading-relaxed max-w-[320px] opacity-0 group-hover:opacity-100 transition-opacity">
                {module.description}
            </p>
        </motion.div>
    );
}
