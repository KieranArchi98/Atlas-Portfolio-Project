"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

const FEATURES = [
    {
        title: "Full Source Code",
        description: "Complete ownership. No hidden compiled binaries or vendor lock-in. You get the raw code.",
        icon: "code",
        color: "bg-blue-500",
        colSpan: "md:col-span-2",
        delay: 0
    },
    {
        title: "CI/CD Pipeline",
        description: "Automated deployment workflows set up for Vercel or similar providers.",
        icon: "server",
        color: "bg-purple-500",
        colSpan: "md:col-span-1",
        delay: 0.1
    },
    {
        title: "Design Assets",
        description: "Original Figma files and design tokens included for future scaling.",
        icon: "check",
        color: "bg-pink-500",
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        title: "Documentation",
        description: "Comprehensive guides on architecture, state management, and deployment.",
        icon: "product",
        color: "bg-green-500",
        colSpan: "md:col-span-2",
        delay: 0.3
    },
    {
        title: "Network Administration",
        description: "Professional network configuration, security hardening, and ongoing infrastructure monitoring.",
        icon: "globe",
        color: "bg-orange-500",
        colSpan: "md:col-span-1",
        delay: 0.4
    },
    {
        title: "Infrastructure Setup",
        description: "Server provisioning, virtualization, and cloud architecture tailored to your requirements.",
        icon: "server",
        color: "bg-teal-500",
        colSpan: "md:col-span-1",
        delay: 0.5
    },
    {
        title: "Technical Support",
        description: "Priority troubleshooting, system diagnostics, and hands-on hardware maintenance.",
        icon: "settings",
        color: "bg-red-500",
        colSpan: "md:col-span-1",
        delay: 0.6
    }
];

export function PricingFeatures() {
    return (
        <section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            {...({
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: true, margin: "-50px" },
                                transition: {
                                    delay: feature.delay,
                                    duration: 0.5,
                                    scale: { type: "spring", stiffness: 300, damping: 20 }
                                },
                            } as any)}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            className={`${feature.colSpan} group relative bg-surface-primary border border-border-default rounded-2xl p-8 transition-colors hover:border-brand-primary/30 shadow-sm hover:shadow-xl`}
                        >
                            {/* Hover Glow */}
                            <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${feature.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                <div className={`w-12 h-12 rounded-lg ${feature.color}/10 flex items-center justify-center text-foreground-primary`}>
                                    <Icon name={feature.icon as any} className={feature.color.replace('bg-', 'text-')} size={24} />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-foreground-primary">{feature.title}</h3>
                                    <p className="text-sm text-foreground-secondary/80 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
