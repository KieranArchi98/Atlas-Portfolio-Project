"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    date: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "CTO",
        company: "NexusFin",
        content: "Atlas completely transformed how we showcase our capabilities. It's not just a portfolio; it's a statement.",
        rating: 5,
        date: "2024.03.12"
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Product Lead",
        company: "QuantAI",
        content: "The attention to detail is staggering. Scaling our digital presence became effortless. A must-have.",
        rating: 5,
        date: "2024.04.15"
    },
    {
        id: 3,
        name: "James Thorne",
        role: "Senior Dev",
        company: "BlockPulse",
        content: "Finally, a solution that respects the developer's need for precision. The integration is seamless.",
        rating: 5,
        date: "2024.05.02"
    },
    {
        id: 4,
        name: "Elena V.",
        role: "Director",
        company: "Velocite Systems",
        content: "Incredible performance optimizations out of the box. Our benchmarks improved by 40%.",
        rating: 5,
        date: "2024.05.10"
    }
];

// Duplicate for marquee
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
    return (
        <section className="py-32 relative bg-white overflow-hidden">
            {/* Header - Left Aligned to contrast with movement */}
            <div className="container mx-auto px-4 md:px-8 mb-16 relative z-10">
                <div className="w-full max-w-[90%] md:max-w-[80%]">
                    <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
                        Verified <span className="text-black/40">Endorsements</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Trusted by technical leaders globally.
                    </p>
                </div>
            </div>

            {/* Marquee Track */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-8 px-4"
                    {...({
                        animate: { x: ["0%", "-33.33%"] },
                        transition: { duration: 32, repeat: Infinity, ease: "linear" }
                    } as any)}
                >
                    {MARQUEE_ITEMS.map((t, idx) => (
                        <div
                            key={`${t.id}-${idx}`}
                            className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl w-[85vw] md:w-[40vw] lg:w-[25vw] max-w-[500px] flex-shrink-0 flex flex-col justify-between hover:border-black/10 transition-colors"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/80" />
                                        ))}
                                    </div>
                                    <Icon name="check" size={16} className="text-black/20" />
                                </div>
                                <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                                    "{t.content}"
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-200/50 pt-4">
                                <div>
                                    <div className="font-bold text-black text-sm">{t.name}</div>
                                    <div className="text-xs text-gray-500 uppercase">{t.company}</div>
                                </div>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-gray-400">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
