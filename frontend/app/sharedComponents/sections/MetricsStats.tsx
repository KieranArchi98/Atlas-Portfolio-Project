"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { MetricVisual } from './MetricVisuals';

interface MetricItem {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    description: string;
    icon: string; // Icon name
    visual: string; // New property for mapping to component
}

interface MetricsStatsProps {
    metrics?: MetricItem[];
    variant?: 'default' | 'white';
}

const DEFAULT_METRICS: MetricItem[] = [
    {
        label: "Revenue Generated",
        value: 55,
        prefix: "$",
        suffix: "K+",
        description: "Direct impact and value delivered through technical solutions.",
        icon: "pricing",
        visual: "revenue"
    },
    {
        label: "Certifications Gained",
        value: 4,
        suffix: "+",
        description: "Verified expertise across cloud, networking, and software.",
        icon: "check",
        visual: "certifications"
    },
    {
        label: "Projects Created",
        value: 35,
        suffix: "+",
        description: "Digital architectures and products built from the ground up.",
        icon: "projects",
        visual: "projects"
    },
    {
        label: "Hours Invested",
        value: 4000,
        suffix: "+",
        description: "Relentless commitment to technical excellence and learning.",
        icon: "dashboard",
        visual: "hours"
    }
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const isInView = useInView(ref, { once: true, amount: 0 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useMotionValueEvent(springValue, "change", (latest) => {
        if (ref.current) {
            const isFloat = value % 1 !== 0;
            ref.current.textContent = `${prefix}${latest.toFixed(isFloat ? 1 : 0)}${suffix}`;
        }
    });

    return <span ref={ref} className="font-mono">{prefix}0{suffix}</span>;
}

export function MetricsStats({ metrics = DEFAULT_METRICS, variant = 'default' }: MetricsStatsProps) {
    const isWhite = variant === 'white';

    return (
        <section className={`py-12 md:py-24 pb-32 relative overflow-hidden ${isWhite ? 'bg-white' : 'bg-background-primary'}`}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    {metrics.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-surface-secondary/20 border border-transparent hover:border-brand-primary/10 transition-colors">

                            {/* Top Row: Number + Visual */}
                            <div className="flex items-end justify-between h-16 md:h-20">
                                {/* Number */}
                                <div className={`text-2xl md:text-5xl font-bold tracking-tight leading-none ${isWhite ? 'text-gray-900' : 'text-foreground-primary'}`}>
                                    <AnimatedCounter value={item.value} prefix={item.prefix} suffix={item.suffix} />
                                </div>

                                {/* Unique Vertical Visual */}
                                <div className="h-full flex-shrink-0 mx-2">
                                    <MetricVisual variant={item.visual} />
                                </div>
                            </div>

                            {/* Bottom Row: Icon + Text */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className={`p-1 rounded-md ${isWhite ? 'bg-brand-primary/10 text-brand-primary' : 'bg-surface-secondary text-brand-primary'}`}>
                                        {/* @ts-ignore */}
                                        <Icon name={item.icon as any} size={16} />
                                    </div>
                                    <h3 className={`font-bold uppercase text-[10px] md:text-xs tracking-wider truncate ${isWhite ? 'text-gray-500' : 'text-foreground-secondary'}`}>
                                        {item.label}
                                    </h3>
                                </div>
                                <p className={`text-[11px] md:text-sm leading-snug line-clamp-3 md:line-clamp-none ${isWhite ? 'text-gray-600' : 'text-foreground-secondary/70'}`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
