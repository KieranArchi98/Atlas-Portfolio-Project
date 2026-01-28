"use client";

import { motion } from 'framer-motion';
import { Icon, IconName } from './Icon';

interface AnimatedRitualIconProps {
    name: IconName;
    size?: number;
    className?: string;
    accentColor?: string;
}

export function AnimatedRitualIcon({
    name,
    size = 48,
    className = "",
    accentColor = "var(--color-brand-primary)"
}: AnimatedRitualIconProps) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className={`relative inline-flex items-center justify-center p-4 ${className}`}
        >
            {/* Background Halo (Stored Energy) */}
            <motion.div
                variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: {
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1, 1.05, 1],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    },
                    hover: { opacity: 0.2, scale: 1.1 }
                }}
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ backgroundColor: accentColor }}
            />

            {/* The Icon Itself */}
            <motion.div
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 0.5,
                        rotate: -20,
                        filter: "blur(10px)"
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        filter: "blur(0px)",
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 1.2
                        }
                    },
                    hover: {
                        scale: 1.1,
                        rotate: 15,
                        color: accentColor,
                        filter: `drop-shadow(0 0 10px ${accentColor}66)`,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }
                    },
                    tap: {
                        scale: 0.9,
                        rotate: -5,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                        }
                    }
                }}
                className="relative z-10 text-foreground-primary"
            >
                <Icon
                    name={name}
                    size={size}
                    strokeWidth={1.5}
                />
            </motion.div>

            {/* Static Architectural Detail (Brackets) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-foreground-muted" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-foreground-muted" />
            </div>
        </motion.div>
    );
}
