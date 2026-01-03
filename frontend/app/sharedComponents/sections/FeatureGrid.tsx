"use client";

import { motion } from 'framer-motion';
import { Icon, IconName } from '../ui/Icon';
import { FeatureVisual } from './FeatureVisuals';

interface Feature {
    title: string;
    description: string;
    icon: IconName;
    imageUrl?: string;
    variant?: 'stack' | 'network' | 'ops';
}

interface FeatureGridProps {
    title?: string;
    features: Feature[];
    columns?: 2 | 3 | 4;
}

/**
 * feature grid section
 * Displays a grid of feature cards with modern, sophisticated styling.
 */
export function FeatureGrid({ title, features, columns = 3 }: FeatureGridProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <section className="pt-48 pb-32 relative overflow-hidden bg-background-primary">
            {/* Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20 z-30" />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                {title && (
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-foreground-primary tracking-tight"
                        >
                            {title}
                        </motion.h2>
                    </div>
                )}

                <div className={`grid gap-6 md:gap-8 ${gridCols[columns]}`}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative flex flex-col h-full gap-6 p-4 md:p-8 overflow-visible">
                                {/* Vertical Divider (Right side for items 0 and 1 on desktop) */}
                                {idx !== features.length - 1 && (
                                    <div className="absolute top-8 bottom-8 right-0 w-px bg-border-default/40 hidden md:block" />
                                )}

                                {/* Index number (Subtler) */}
                                <div className="absolute -top-4 left-4 font-mono text-8xl font-bold text-foreground-primary/[0.03] pointer-events-none select-none">
                                    {String(idx + 1).padStart(2, '0')}
                                </div>

                                {feature.imageUrl || feature.variant ? (
                                    <div className="relative w-full h-48 mb-6 rounded-2xl overflow-visible group-hover:scale-105 transition-transform duration-500 z-10">
                                        {feature.imageUrl ? (
                                            <img
                                                src={feature.imageUrl}
                                                alt={feature.title}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        ) : (
                                            <FeatureVisual variant={feature.variant} />
                                        )}
                                    </div>
                                ) : (
                                    /* Icon with gradient background */
                                    <motion.div
                                        className="relative w-16 h-16 rounded-2xl bg-surface-secondary flex items-center justify-center text-foreground-primary shadow-sm mb-6 z-10"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                    >
                                        <Icon name={feature.icon} size={28} />
                                    </motion.div>
                                )}

                                {/* Content */}
                                <div className="space-y-4 relative z-10 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground-primary">
                                        {feature.title}
                                    </h3>
                                    <p className="text-foreground-secondary leading-relaxed opacity-80 text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Transition Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20" />
        </section>
    );
}
