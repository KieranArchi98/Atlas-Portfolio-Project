"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Icon } from "../ui/Icon";

interface ProjectCard3DProps {
    project: any;
    onClick: () => void;
    index: number;
}

export function ProjectCard3D({ project, onClick, index }: ProjectCard3DProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            } as any}
            className="relative h-full perspective-1000 cursor-pointer group"
            onClick={onClick}
        >
            <div
                className="relative h-full bg-background-primary/80 backdrop-blur-md border border-border-default rounded-xl overflow-hidden shadow-xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-brand-primary/20"
                style={{ transform: "translateZ(0)" }} // Fix for safari/chrome stacking
            >
                {/* Hover Highlight/Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                {/* Image / Header Area */}
                <div className="relative h-48 bg-brand-primary/5 flex items-center justify-center overflow-hidden border-b border-border-default">
                    {/* Project Image */}
                    {project.image ? (
                        <motion.img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ transform: "translateZ(10px) scale(1.1)" }}
                        />
                    ) : (
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    )}

                    {/* Overlay Grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

                    {!project.image && (
                        <motion.div
                            className="relative z-10 text-brand-primary/40 group-hover:text-brand-primary transition-colors duration-300"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            <Icon name="code" size={56} />
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 bg-background-primary/50">
                    <motion.div style={{ transform: "translateZ(30px)" }}>
                        <h3 className="text-2xl font-bold text-foreground-primary mb-2 group-hover:text-brand-primary transition-colors">
                            {project.name}
                        </h3>
                    </motion.div>

                    <motion.div style={{ transform: "translateZ(20px)" }}>
                        <p className="text-foreground-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ transform: "translateZ(10px)" }}
                        className="flex flex-wrap gap-2"
                    >
                        {project.technologies.slice(0, 3).map((tech: string) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-[10px] uppercase font-bold tracking-wider rounded-md border border-brand-primary/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
