"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
    name: string;
    imagePath: string;
}

interface LogoShowcaseProps {
    trackALogos: Logo[];
    trackBLogos: Logo[];
}

export function LogoShowcase({
    trackALogos,
    trackBLogos
}: LogoShowcaseProps) {
    // Duplicate logos for seamless infinite scroll in each track
    const duplicatedTrackA = [...trackALogos, ...trackALogos];
    const duplicatedTrackB = [...trackBLogos, ...trackBLogos];

    return (
        <section className="relative bg-white overflow-hidden pb-16 md:pb-32">
            <div className="w-full relative z-10">
                <br></br>
                <br></br>
                {/* First Track - Scrolling Right to Left */}
                <div className="relative mb-8 md:mb-12">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8 md:gap-10 lg:gap-12 items-center"
                            animate={{
                                x: ['0%', '-50%'],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: trackALogos.length * 7,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                width: 'max-content',
                            }}
                        >
                            {duplicatedTrackA.map((logo, index) => (
                                <div
                                    key={`track1-${logo.name}-${index}`}
                                    className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 bg-white"
                                    style={{
                                        width: '420px',
                                        height: '180px',
                                        position: 'relative',
                                    }}
                                >
                                    <Image
                                        src={logo.imagePath}
                                        alt={`${logo.name} logo`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        sizes="420px"
                                        priority={index < trackALogos.length}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Second Track - Scrolling Left to Right (Opposite Direction) */}
                <div className="relative">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8 md:gap-10 lg:gap-12 items-center"
                            animate={{
                                x: ['-50%', '0%'], // Opposite direction
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: trackBLogos.length * 7,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                width: 'max-content',
                            }}
                        >
                            {duplicatedTrackB.map((logo, index) => (
                                <div
                                    key={`track2-${logo.name}-${index}`}
                                    className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 bg-white"
                                    style={{
                                        width: '420px',
                                        height: '180px',
                                        position: 'relative',
                                    }}
                                >
                                    <Image
                                        src={logo.imagePath}
                                        alt={`${logo.name} logo`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        sizes="420px"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    );
}
