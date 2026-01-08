"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';

/**
 * HIGH-FIDELITY WEB3 ANIMATIONS
 */

const QuantumNode = () => (
    <div className="relative w-8 h-8 md:w-9 md:h-9">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-brand-primary/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
                style={{ rotate: i * 45 }}
            />
        ))}
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 m-auto w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_12px_var(--color-brand-primary)]"
        />
    </div>
);

const NeuralCore = () => (
    <div className="relative w-6 h-6 md:w-7 md:h-7">
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{
                    scale: [1, 1.5],
                    opacity: [0.8, 0],
                    borderWidth: ["1.5px", "0.5px"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                className="absolute inset-0 border border-brand-primary rounded-full"
            />
        ))}
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_8px_var(--color-brand-primary)]" />
        </motion.div>
        <div className="absolute inset-0 m-auto w-2 h-2 bg-white border border-brand-primary rounded-full z-10" />
    </div>
);

const DataStream = () => (
    <div className="flex gap-1 h-5 md:h-5.5 items-end">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="relative w-0.5 md:w-0.8 h-full bg-brand-primary/5 rounded-full overflow-hidden">
                <motion.div
                    animate={{
                        height: ["0%", "100%", "0%"],
                        top: ["0%", "0%", "100%"]
                    }}
                    transition={{
                        duration: 1.5 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1
                    }}
                    className="absolute w-full bg-gradient-to-b from-transparent via-brand-primary to-transparent"
                />
            </div>
        ))}
    </div>
);

const StructuralVault = () => (
    <div className="relative w-6 h-6 md:w-7 md:h-7 rotate-45">
        {[0, 1].map(i => (
            <motion.div
                key={i}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: i === 0 ? 0 : 90,
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border border-brand-primary/30 rounded-sm"
            />
        ))}
        <div className="absolute inset-0 m-auto w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_8px_var(--color-brand-primary)]" />
    </div>
);

/**
 * CELESTIAL BACKGROUND COMPONENTS
 */

const Starscape = () => {
    const [stars, setStars] = useState<any[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 250 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.1); }
                }
            `}} />
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute bg-brand-primary rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        boxShadow: `0 0 ${star.size * 2}px var(--color-brand-primary)`,
                        animation: `twinkle ${star.duration}s ease-in-out infinite ${star.delay}s`
                    }}
                />
            ))}
        </div>
    );
};

const CelestialEvent = () => {
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const createEvent = () => {
            const type = Math.random() > 0.6 ? 'meteor' : 'shooting-star';
            const id = Math.random();

            // Diagonal trajectories across the screen
            const diagonal = Math.floor(Math.random() * 4);
            let startX, startY, endX, endY;

            switch (diagonal) {
                case 0: // top-left to bottom-right
                    startX = -5;
                    startY = Math.random() * 30;
                    endX = 105;
                    endY = 70 + Math.random() * 30;
                    break;
                case 1: // top-right to bottom-left
                    startX = 105;
                    startY = Math.random() * 30;
                    endX = -5;
                    endY = 70 + Math.random() * 30;
                    break;
                case 2: // bottom-left to top-right
                    startX = -5;
                    startY = 70 + Math.random() * 30;
                    endX = 105;
                    endY = Math.random() * 30;
                    break;
                default: // bottom-right to top-left
                    startX = 105;
                    startY = 70 + Math.random() * 30;
                    endX = -5;
                    endY = Math.random() * 30;
            }

            const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

            const newEvent = { id, type, startX, startY, endX, endY, angle };
            setEvents(prev => [...prev, newEvent]);

            setTimeout(() => {
                setEvents(prev => prev.filter(e => e.id !== id));
            }, type === 'meteor' ? 4000 : 5000);
        };

        // Less frequent, more impactful events
        const interval = setInterval(createEvent, 4000);
        setTimeout(createEvent, 1000); // Start with one after a delay

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {events.map(event => (
                    <motion.div
                        key={event.id}
                        initial={{
                            x: `${event.startX}vw`,
                            y: `${event.startY}vh`,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: `${event.endX}vw`,
                            y: `${event.endY}vh`,
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: event.type === 'meteor' ? 3 : 4,
                            ease: "linear",
                            opacity: { times: [0, 0.1, 0.9, 1] }
                        }}
                        className={`absolute ${event.type === 'meteor'
                                ? 'w-[200px] md:w-[400px] h-[2px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent'
                                : 'w-[150px] md:w-[300px] h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent'
                            } blur-[0.5px]`}
                        style={{ rotate: `${event.angle}deg` }}
                    >
                        <div className="absolute right-0 w-3 h-3 bg-brand-primary/80 rounded-full blur-sm" />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

const DriftingBodies = () => {
    const [bodies, setBodies] = useState<any[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            size: Math.random() * 10 + 3,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
            duration: Math.random() * 40 + 60,
            delay: -Math.random() * 60
        }));
        setBodies(generated);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes drift {
                    0% { transform: translate(-20%, -20%) rotate(0deg); }
                    100% { transform: translate(120%, 120%) rotate(360deg); }
                }
            `}} />
            {bodies.map(body => (
                <div
                    key={body.id}
                    className="absolute border border-brand-primary rounded-lg"
                    style={{
                        width: body.size,
                        height: body.size,
                        left: `${body.startX}%`,
                        top: `${body.startY}%`,
                        animation: `drift ${body.duration}s linear infinite ${body.delay}s`
                    }}
                />
            ))}
        </div>
    );
};

/**
 * CORE & ORBITAL COMPONENTS
 */

const CentralCore = () => (
    <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
        <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.015, 0.04, 0.015] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-120%] bg-brand-primary/8 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-[0_0_50px_rgba(var(--color-brand-primary-rgb),0.06)] border border-brand-primary/5 flex flex-col items-center justify-center gap-1.5 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.03] to-transparent" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'conic-gradient(from 0deg, var(--color-brand-primary), transparent, var(--color-brand-primary))' }}
            />
            <div className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon name="activity" size={28} className="text-brand-primary" />
                <span className="text-[8px] font-black font-mono text-brand-primary tracking-[0.3em] uppercase">Core</span>
            </div>
        </div>

        {/* Orbit Lanes - Responsive scaling */}
        {[
            { mobile: 1.4, desktop: 1.6 },
            { mobile: 2.3, desktop: 2.8 },
            { mobile: 3.2, desktop: 4.0 },
            { mobile: 4.1, desktop: 5.2 }
        ].map((scale, i) => (
            <div
                key={i}
                className="absolute border border-brand-primary/[0.04] rounded-full pointer-events-none"
                style={{
                    width: `calc(${scale.mobile * 100}px)`,
                    height: `calc(${scale.mobile * 100}px)`
                }}
            />
        ))}
    </div>
);

const OrbitalNode = ({ title, value, detail, orbitConfig, graphic }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes orbit-${orbitConfig.id} {
                    from { transform: rotate(${orbitConfig.offset}deg); }
                    to { transform: rotate(${orbitConfig.offset + 360}deg); }
                }
                @keyframes counter-orbit-${orbitConfig.id} {
                    from { transform: rotate(${-orbitConfig.offset}deg); }
                    to { transform: rotate(${-orbitConfig.offset - 360}deg); }
                }
            `}} />

            {/* Mobile/Tablet version */}
            <div
                className="lg:hidden absolute pointer-events-none"
                style={{
                    width: `calc(${orbitConfig.radiusMobile * 2}px)`,
                    height: `calc(${orbitConfig.radiusMobile * 2}px)`,
                    animation: `orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                    willChange: 'transform'
                }}
            >
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="absolute top-0 left-1/2 pointer-events-auto cursor-pointer"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div
                        style={{
                            animation: `counter-orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                            animationPlayState: isHovered ? 'paused' : 'running',
                            willChange: 'transform'
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`p-3.5 md:p-5 bg-white/95 backdrop-blur-md border transition-all duration-500 rounded-[1.25rem] min-w-[130px] md:min-w-[150px] group ${isHovered ? 'border-brand-primary shadow-[0_15px_40px_rgba(var(--color-brand-primary-rgb),0.1)]' : 'border-brand-primary/10 shadow-sm shadow-black/[0.01]'}`}
                        >
                            <div className="flex flex-col items-center gap-2.5">
                                <div className="h-8 md:h-10 flex items-center justify-center">
                                    {graphic}
                                </div>
                                <div className="text-center">
                                    <span className="text-[7px] md:text-[8px] font-black font-mono text-brand-primary/30 uppercase tracking-[0.15em]">{detail}</span>
                                    <h4 className="text-[8px] md:text-[9px] font-black text-foreground-secondary/30 uppercase tracking-[0.1em] mb-0.5">{title}</h4>
                                    <div className="text-lg md:text-xl font-black text-foreground-primary tracking-tighter uppercase font-heading group-hover:text-brand-primary transition-colors">
                                        {value}
                                    </div>
                                </div>
                            </div>

                            {!isHovered && (
                                <div className="absolute inset-0 rounded-[1.25rem] overflow-hidden pointer-events-none">
                                    <motion.div
                                        animate={{ left: ["-100%", "100%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-brand-primary/[0.02] to-transparent skew-x-[-15deg]"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Desktop version with wider orbit */}
            <div
                className="hidden lg:block absolute pointer-events-none"
                style={{
                    width: `calc(${orbitConfig.radiusDesktop * 2}px)`,
                    height: `calc(${orbitConfig.radiusDesktop * 2}px)`,
                    animation: `orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                    willChange: 'transform'
                }}
            >
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="absolute top-0 left-1/2 pointer-events-auto cursor-pointer"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div
                        style={{
                            animation: `counter-orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                            animationPlayState: isHovered ? 'paused' : 'running',
                            willChange: 'transform'
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`p-5 bg-white/95 backdrop-blur-md border transition-all duration-500 rounded-[1.25rem] min-w-[150px] group ${isHovered ? 'border-brand-primary shadow-[0_15px_40px_rgba(var(--color-brand-primary-rgb),0.1)]' : 'border-brand-primary/10 shadow-sm shadow-black/[0.01]'}`}
                        >
                            <div className="flex flex-col items-center gap-2.5">
                                <div className="h-10 flex items-center justify-center">
                                    {graphic}
                                </div>
                                <div className="text-center">
                                    <span className="text-[8px] font-black font-mono text-brand-primary/30 uppercase tracking-[0.15em]">{detail}</span>
                                    <h4 className="text-[9px] font-black text-foreground-secondary/30 uppercase tracking-[0.1em] mb-0.5">{title}</h4>
                                    <div className="text-xl font-black text-foreground-primary tracking-tighter uppercase font-heading group-hover:text-brand-primary transition-colors">
                                        {value}
                                    </div>
                                </div>
                            </div>

                            {!isHovered && (
                                <div className="absolute inset-0 rounded-[1.25rem] overflow-hidden pointer-events-none">
                                    <motion.div
                                        animate={{ left: ["-100%", "100%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-brand-primary/[0.02] to-transparent skew-x-[-15deg]"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function PricingFinalCTA() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.995, 1]);

    /**
     * RESPONSIVE ORBITAL RADII
     * Mobile: Compact for safety
     * Desktop (lg+): Wider spacing for better visibility
     */
    const globalNodes = [
        {
            id: 0,
            title: "Uptime",
            value: "99.9%",
            detail: "SLA_NODE",
            graphic: <QuantumNode />,
            orbit: {
                id: 0,
                radiusMobile: 140,
                radiusDesktop: 180,
                speed: 60,
                offset: 0
            }
        },
        {
            id: 1,
            title: "Sync",
            value: "<12h",
            detail: "LATENCY",
            graphic: <NeuralCore />,
            orbit: {
                id: 1,
                radiusMobile: 210,
                radiusDesktop: 280,
                speed: 80,
                offset: 90
            }
        },
        {
            id: 2,
            title: "Network",
            value: "Global",
            detail: "CDN_NODE",
            graphic: <DataStream />,
            orbit: {
                id: 2,
                radiusMobile: 280,
                radiusDesktop: 380,
                speed: 100,
                offset: 180
            }
        },
        {
            id: 3,
            title: "Vault",
            value: "Hard",
            detail: "SEC_ARCH",
            graphic: <StructuralVault />,
            orbit: {
                id: 3,
                radiusMobile: 350,
                radiusDesktop: 480,
                speed: 120,
                offset: 270
            }
        },
    ];

    return (
        <section ref={sectionRef} className="h-screen min-h-[800px] relative bg-white overflow-hidden flex items-center justify-center">
            {/* Celestial Layers */}
            <Starscape />
            <DriftingBodies />
            <CelestialEvent />

            <motion.div style={{ opacity, scale }} className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Central Star */}
                <div className="relative z-20">
                    <CentralCore />
                </div>

                {/* Orbiting Planets */}
                <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                    {globalNodes.map((node) => (
                        <OrbitalNode
                            key={node.id}
                            {...node}
                            orbitConfig={node.orbit}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
