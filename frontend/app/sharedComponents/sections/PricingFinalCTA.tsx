"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';

/**
 * HIGH-FIDELITY WEB3 ANIMATIONS
 */

const LogicFlow = () => (
    <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_0_8px_rgba(var(--color-brand-primary-rgb),0.3)]">
            <motion.path
                d="M4 16h8l4-8 4 16 4-8h8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="text-brand-primary/10"
            />
            <motion.path
                d="M4 16h8l4-8 4 16 4-8h8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeDasharray="40"
                strokeDashoffset="40"
                animate={{ strokeDashoffset: [40, -40] } as any}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="text-brand-primary"
            />
        </svg>
    </div>
);

const SecureStack = () => (
    <div className="relative w-8 h-8 flex flex-col items-center justify-center gap-0.5">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -2, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1]
                } as any}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                className="w-7 h-1.5 border border-brand-primary/40 rounded-[2px] bg-brand-primary/5"
                style={{ transform: 'rotateX(45deg) rotateZ(-10deg)' } as any}
            />
        ))}
        <motion.div
            animate={{ height: ["0%", "100%", "0%"], opacity: [0, 0.5, 0] } as any}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-[1.5px] bg-brand-primary/60 left-1/2 -translate-x-1/2"
        />
    </div>
);

const GlobalMesh = () => (
    <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
            animate={{ rotate: 360 } as any}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-brand-primary/10 rounded-full"
        >
            {[0, 60, 120, 180, 240, 300].map(deg => (
                <div key={deg} className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-brand-primary/5" style={{ transform: `rotate(${deg}deg)` }} />
            ))}
        </motion.div>
        {[0, 1].map(i => (
            <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.4, 0.1] } as any}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
                className="absolute inset-0 border border-brand-primary/30 rounded-full"
            />
        ))}
        <div className="w-2.5 h-2.5 bg-brand-primary rounded-full shadow-[0_0_12px_var(--color-brand-primary)]" />
    </div>
);

const ActiveShield = () => (
    <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
            animate={{ rotate: 360 } as any}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[1.5px] border-dashed border-brand-primary/30 rounded-full"
        />
        <motion.div
            animate={{ rotate: -360 } as any}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1.5 border border-brand-primary/50 rounded-full"
        />
        <motion.div
            animate={{
                boxShadow: ["0 0 5px var(--color-brand-primary)", "0 0 15px var(--color-brand-primary)", "0 0 5px var(--color-brand-primary)"],
                scale: [0.9, 1.1, 0.9]
            } as any}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-primary rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/0 via-brand-primary/5 to-transparent rounded-full animate-pulse" />
    </div>
);

/**
 * CELESTIAL BACKGROUND COMPONENTS
 */

const BrightStar = ({ top, left, size, delay }: any) => (
    <motion.div
        className="absolute z-[1]"
        style={{ top, left } as any}
        initial={{ opacity: 0, scale: 0 } as any}
        animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.1, 0.8],
        } as any}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    >
        {/* Glow */}
        <div
            className="absolute inset-0 rounded-full bg-brand-primary blur-[4px] opacity-40 shadow-[0_0_15px_var(--color-brand-primary)]"
            style={{ width: size * 4, height: size * 4, transform: 'translate(-50%, -50%)' }}
        />
        {/* Glint Cross */}
        <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-gradient-to-b from-transparent via-brand-primary/80 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/80 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_var(--color-brand-primary)]" />
        </div>
    </motion.div>
);

const Starscape = () => {
    const [stars, setStars] = useState<any[]>([]);
    const [brightStars, setBrightStars] = useState<any[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 200 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1
        }));
        setStars(generatedStars);

        const generatedBright = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 10
        }));
        setBrightStars(generatedBright);
    }, []);

    return (
        <div className="absolute top-[-5%] bottom-[-5%] left-0 right-0 overflow-visible pointer-events-none">
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
            {brightStars.map(star => (
                <BrightStar key={star.id} {...star} />
            ))}
        </div>
    );
};

const CelestialEvent = () => {
    const [events, setEvents] = useState<any[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let timeoutId: NodeJS.Timeout;

        const scheduleEvent = () => {
            const delay = 10000 + Math.random() * 10000; // 10-20 seconds
            timeoutId = setTimeout(() => {
                createEvent();
                scheduleEvent();
            }, delay);
        };

        const createEvent = () => {
            const type = Math.random() > 0.6 ? 'meteor' : 'shooting-star';
            const id = Math.random();

            // Trayectories relative to the section container (%)
            const diagonal = Math.floor(Math.random() * 4);
            let startX, startY, endX, endY;

            switch (diagonal) {
                case 0: // top-left to bottom-right
                    startX = -20; startY = Math.random() * 30;
                    endX = 120; endY = 70 + Math.random() * 30;
                    break;
                case 1: // top-right to bottom-left
                    startX = 120; startY = Math.random() * 30;
                    endX = -20; endY = 70 + Math.random() * 30;
                    break;
                case 2: // bottom-left to top-right
                    startX = -20; startY = 70 + Math.random() * 30;
                    endX = 120; endY = Math.random() * 30;
                    break;
                default: // bottom-right to top-left
                    startX = 120; startY = 70 + Math.random() * 30;
                    endX = -20; endY = Math.random() * 30;
            }

            // Calculate angle based on the path
            const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

            const newEvent = { id, type, startX, startY, endX, endY, angle };
            setEvents(prev => [...prev, newEvent]);

            setTimeout(() => {
                setEvents(prev => prev.filter(e => e.id !== id));
            }, 6000);
        };

        scheduleEvent();
        return () => clearTimeout(timeoutId);
    }, [isInView]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-visible">
            <AnimatePresence>
                {events.map((event: any) => (
                    <motion.div
                        key={event.id}
                        initial={{
                            left: `${event.startX}%`,
                            top: `${event.startY}%`,
                            opacity: 0,
                            scale: 0.5
                        } as any}
                        animate={{
                            left: `${event.endX}%`,
                            top: `${event.endY}%`,
                            opacity: [0, 1, 1, 1],
                            scale: [0.5, 1, 1, 1]
                        } as any}
                        exit={{ opacity: 0 } as any}
                        transition={{
                            duration: 3.5, // 2-3x faster
                            ease: "linear",
                            opacity: { times: [0, 0.1, 0.9, 1] }
                        }}
                        className={`absolute ${event.type === 'meteor'
                            ? 'w-[150px] md:w-[300px] h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent'
                            : 'w-[100px] md:w-[200px] h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent'
                            } blur-[0.5px]`}
                        style={{
                            rotate: `${event.angle}deg`,
                            transformOrigin: 'center center'
                        } as any}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand-primary/95 rounded-full blur-[2px]" />
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
                <Icon name="server" size={28} className="text-brand-primary" />
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
                    <motion.div
                        animate={isHovered ? { y: 0, x: 0, rotate: 0 } : {
                            y: [0, -8, 0],
                            x: [0, 4, 0],
                            rotate: [0, 1, 0, -1, 0]
                        } as any}
                        transition={{
                            duration: 5 + orbitConfig.id,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            animation: `counter-orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                            animationPlayState: isHovered ? 'paused' : 'running',
                            willChange: 'transform'
                        } as any}
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
                    </motion.div>
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
                    <motion.div
                        animate={isHovered ? { y: 0, x: 0, rotate: 0 } : {
                            y: [0, -12, 0],
                            x: [0, 6, 0],
                            rotate: [0, 1.5, 0, -1.5, 0]
                        } as any}
                        transition={{
                            duration: 6 + orbitConfig.id,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            animation: `counter-orbit-${orbitConfig.id} ${orbitConfig.speed}s linear infinite`,
                            animationPlayState: isHovered ? 'paused' : 'running',
                            willChange: 'transform'
                        } as any}
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
                    </motion.div>
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
            title: "Software & AI",
            value: "100% Type-Safe",
            detail: "MODERN_ENGINEERING",
            graphic: <LogicFlow />,
            orbit: {
                id: 0,
                radiusMobile: 140,
                radiusDesktop: 180,
                speed: 80, // Synchronized speed
                offset: 0
            }
        },
        {
            id: 1,
            title: "Cloud & Systems",
            value: "99.99% Uptime",
            detail: "HIGH_AVAILABILITY",
            graphic: <SecureStack />,
            orbit: {
                id: 1,
                radiusMobile: 210,
                radiusDesktop: 280,
                speed: 80, // Synchronized speed
                offset: 90
            }
        },
        {
            id: 2,
            title: "Networking",
            value: "<1ms Latency",
            detail: "FIBER_BACKBONE",
            graphic: <GlobalMesh />,
            orbit: {
                id: 2,
                radiusMobile: 280,
                radiusDesktop: 380,
                speed: 80, // Synchronized speed
                offset: 180
            }
        },
        {
            id: 3,
            title: "Tech Support",
            value: "24/7 Active",
            detail: "ON_SITE_STABILITY",
            graphic: <ActiveShield />,
            orbit: {
                id: 3,
                radiusMobile: 350,
                radiusDesktop: 480,
                speed: 80, // Synchronized speed
                offset: 270
            }
        },
    ];

    return (
        <section ref={sectionRef} className="h-screen min-h-[800px] relative bg-white overflow-x-clip overflow-y-visible flex items-center justify-center">
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
