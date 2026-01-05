"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Hero3DBackground } from '../effects/Hero3DBackground';

interface InteractiveHeroProps {
    titlePrefix: string;
    dynamicPhrases: string[];
    titleSuffix?: string;
    subtitle: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function InteractiveHero({
    titlePrefix,
    dynamicPhrases,
    titleSuffix = "",
    subtitle,
    primaryAction,
    secondaryAction
}: InteractiveHeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isComplete) return;

        const currentPhrase = dynamicPhrases[phraseIndex];
        const isFinalPhrase = phraseIndex === dynamicPhrases.length - 1;

        const type = () => {
            if (!isDeleting) {
                // Typing text
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));

                if (displayText === currentPhrase) {
                    if (isFinalPhrase) {
                        setIsComplete(true);
                        return;
                    }
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting text
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));

                if (displayText === "") {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => prev + 1);
                }
            }
        };

        const timeout = setTimeout(
            type,
            isDeleting ? 40 : 120 // Faster deletion (40ms) vs deliberate typing (120ms)
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, phraseIndex, dynamicPhrases, isComplete]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background-primary"
            onMouseMove={handleMouseMove}
        >
            {/* 3D WebGL Background */}
            <Hero3DBackground />

            {/* Content */}
            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">

                    {/* Technical Metadata Tag */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-foreground-muted uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                        [ SYSTEM_DEPLOYMENT: PROXY_INIT ]
                    </motion.div>

                    <div className="relative flex flex-col items-center w-full">
                        {/* HUD Framing (Subtle sides) */}
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent hidden lg:block" />
                        <div className="absolute -right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent hidden lg:block" />

                        {/* Title with parallax effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                            }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground-primary leading-[1.05]">
                                {titlePrefix}{" "}
                                <span className="text-brand-primary font-extrabold inline-block min-w-[50px]">
                                    {displayText}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className={`inline-block w-[3px] h-[0.8em] ml-1 bg-brand-primary ${isComplete ? 'hidden' : ''}`}
                                    />
                                </span>{" "}
                                {titleSuffix}
                            </h1>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl lg:text-2xl text-foreground-secondary font-mono tracking-tight lowercase opacity-60"
                        style={{
                            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        }}
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <a href={primaryAction.href}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="relative overflow-hidden group shadow-lg shadow-brand-primary/50 hover:shadow-xl hover:shadow-brand-primary/70 transition-shadow"
                                >
                                    <span className="relative z-10">{primaryAction.label}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Button>
                            </a>
                        </motion.div>

                        {secondaryAction && (
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <a href={secondaryAction.href}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="backdrop-blur-sm bg-background-primary/50 hover:bg-background-primary/80 transition-colors"
                                    >
                                        {secondaryAction.label}
                                    </Button>
                                </a>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-12"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-flex flex-col items-center gap-2 text-foreground-muted"
                        >
                            <span className="text-sm">Scroll to explore</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
