"use client";

import { motion } from 'framer-motion';
import { Icon, IconName } from './Icon';

interface DocsHeaderIconProps {
    name: IconName;
    size?: number;
    className?: string;
    accentColor?: string;
}

/**
 * DocsHeaderIcon
 * A restrained, attentive icon component for documentation headers.
 * Features:
 * - One-time entry animation (fade-in + slight upward move)
 * - Quick, restrained hover response (scale + accent highlight)
 * - No idle looping animations
 */
export function DocsHeaderIcon({
    name,
    size = 48,
    className = "",
    accentColor = "var(--color-brand-primary)"
}: DocsHeaderIconProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover"
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            className={`relative inline-flex items-center justify-center ${className}`}
        >
            <motion.div
                variants={{
                    hover: {
                        scale: 1.1,
                        color: accentColor,
                        filter: `drop-shadow(0 0 8px ${accentColor}33)`,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                        }
                    }
                }}
                className="text-brand-primary"
            >
                <Icon
                    name={name}
                    size={size}
                    strokeWidth={1.5}
                />
            </motion.div>
        </motion.div>
    );
}
