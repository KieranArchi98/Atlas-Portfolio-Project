"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function SystemCTA({ title, description, primaryAction, secondaryAction }: SystemCTAProps) {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-background-primary flex items-center min-h-[80vh]">

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- RIGHT COLUMN: ISOMETRIC SAAS VISUAL --- */}
                    {/* Visual First: Left on Desktop, Top on Mobile */}
                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000">
                        {/* The Platform Container */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
                            whileInView={{ opacity: 1, rotateX: 55, rotateZ: -15, scale: 1 }}
                            animate={{
                                rotateZ: [-15, -12, -15],
                                y: [0, -10, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                default: { duration: 1.2, ease: "easeOut" },
                                rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="relative w-full max-w-md aspect-square transform-style-3d"
                        >
                            {/* Base Plate */}
                            <div className="absolute inset-0 bg-surface-secondary rounded-3xl border border-border-default shadow-2xl transform translate-z-[0px]" />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl transform translate-z-[1px]" />

                            {/* Floating Architecture Layers */}

                            {/* Layer 1: Database Cluster (Bottom Left) */}
                            <motion.div
                                animate={{
                                    z: [20, 40, 20],
                                    rotateZ: [0, 5, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-2xl shadow-xl border border-border-default flex items-center justify-center transform-style-3d"
                            >
                                <Icon name="server" size={40} className="text-blue-500" />
                                <div className="absolute -right-4 -top-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">DATA</div>
                            </motion.div>

                            {/* Layer 2: API Gateway (Top Right) */}
                            <motion.div
                                animate={{
                                    z: [40, 60, 40],
                                    rotateZ: [0, -5, 0]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 right-10 w-32 h-32 bg-white rounded-2xl shadow-xl border border-border-default flex items-center justify-center transform-style-3d"
                            >
                                <Icon name="globe" size={40} className="text-purple-500" />
                                <div className="absolute -left-4 -bottom-4 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">API</div>
                            </motion.div>

                            {/* Layer 3: Central Dashboard (Highest) */}
                            <motion.div
                                animate={{
                                    z: [60, 90, 60],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-surface-primary rounded-xl shadow-2xl border border-border-default flex flex-col overflow-hidden transform-style-3d"
                            >
                                {/* Dashboard Mock UI */}
                                <div className="h-6 bg-muted border-b border-border-default flex items-center px-2 gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 p-3 grid grid-cols-2 gap-2">
                                    <div className="bg-brand-primary/10 rounded h-full animate-pulse" />
                                    <div className="bg-muted rounded h-full" />
                                    <div className="col-span-2 bg-muted/50 rounded h-1/2" />
                                </div>
                                <div className="absolute -top-6 right-0 px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full shadow-lg">APP</div>
                            </motion.div>

                            {/* Particle Connections */}
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-full h-full border border-dashed border-brand-primary/20 rounded-full"
                                    style={{ transform: "translate(-50%, -50%) rotateX(90deg)" }}
                                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                            </div>

                        </motion.div>
                    </div>


                    {/* --- LEFT COLUMN: CONTENT (Typography & Actions) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-8 lg:pl-10"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary/80 font-mono text-xs uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                            System Ready
                        </div>

                        {/* Title - Clean & Sharp */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground-primary tracking-tight leading-[1.1]">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-foreground-secondary/80 leading-relaxed font-light">
                            {description}
                        </p>

                        {/* Actions - Left Aligned */}
                        <div className="flex flex-col sm:flex-row items-start gap-5 pt-4">
                            <Link href={primaryAction.href} className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full sm:w-auto px-8 py-4 bg-foreground-primary text-background-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                                >
                                    {primaryAction.label}
                                    <Icon name="arrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            {secondaryAction && (
                                <Link href={secondaryAction.href} className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground-primary border border-border-default/50 rounded-xl font-medium text-lg hover:bg-foreground-primary/5 transition-all duration-300"
                                    >
                                        {secondaryAction.label}
                                    </motion.button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-primary to-transparent pointer-events-none" />

        </section>
    );
}
