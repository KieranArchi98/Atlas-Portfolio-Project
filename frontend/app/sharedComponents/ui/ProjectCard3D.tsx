"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Icon } from "../ui/Icon";

interface ProjectCard3DProps {
    project: {
        id: string;
        name: string;
        description: string;
        longDescription: string;
        image?: string;
        technologies: string[];
        githubUrl: string;
        liveUrl?: string;
    };
    onClick: () => void;
    index: number;
}

export const ProjectVisualizer = ({ id }: { id: string }) => {
    switch (id) {
        case 'konnect':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full opacity-80" viewBox="0 0 200 200">
                        {/* Agentic Nodes */}
                        <g className="animate-pulse">
                            <circle cx="100" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="60" cy="120" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="140" cy="120" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="100" cy="160" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </g>
                        {/* Orchestration Lines */}
                        <path d="M 100 70 L 60 110 M 100 70 L 140 110 M 60 130 L 100 150 M 140 130 L 100 150" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                        {/* Data Transmission */}
                        <circle r="1" fill="currentColor">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M 100 70 L 60 110" />
                        </circle>
                        <circle r="1" fill="currentColor">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M 100 70 L 140 110" />
                        </circle>
                        <text x="100" y="30" textAnchor="middle" fill="currentColor" fontSize="6" className="font-mono opacity-50">LANGCHAIN_ORCHESTRATOR_V1</text>
                    </svg>
                </div>
            );
        case 'gemini-ai':
            return (
                <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
                    <div className="w-full h-full flex flex-col justify-between opacity-80">
                        <div className="flex justify-between items-center text-[6px] font-mono">
                            <span>PIPELINE_STATUS: ACTIVE</span>
                            <span className="animate-pulse">● RUNNING</span>
                        </div>
                        <div className="flex-1 flex items-center relative">
                            <div className="absolute inset-y-0 left-0 w-[2px] bg-brand-primary/50" />
                            <div className="flex flex-col gap-4 w-full pl-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-6 border border-current rounded-sm flex items-center px-2 relative overflow-hidden group">
                                        <div className="text-[8px] font-mono">JOB_{i}: VALIDATING_SCHEMA</div>
                                        <div className="absolute inset-0 bg-brand-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                                        <div className="absolute right-2 text-[6px] opacity-50">{(Math.random() * 100).toFixed(1)}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-1 bg-current opacity-20 relative">
                            <div className="absolute inset-y-0 left-0 bg-brand-primary w-1/2 animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                </div>
            );
        case 'netdoctor':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full opacity-80" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="4" fill="currentColor" />
                        <circle cx="100" cy="100" r="30" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="4 4">
                            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
                        </circle>
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                            const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
                            const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
                            return (
                                <g key={i}>
                                    <line x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
                                    <circle cx={x} cy={y} r="2" fill="currentColor">
                                        <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + i}s`} repeatCount="indefinite" />
                                    </circle>
                                </g>
                            );
                        })}
                        <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.3">
                            <animate attributeName="r" from="10" to="90" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" from="0.3" to="0" dur="4s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            );
        case 'powershell-toolkit':
            return (
                <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden font-mono text-[8px] opacity-70 select-none pointer-events-none">
                    <div className="w-full h-full border border-current rounded p-2 flex flex-col gap-1 overflow-hidden relative">
                        <div className="text-[10px] font-bold border-b border-current pb-1 mb-1 animate-pulse">TERMINAL: AD_AUDIT_V2.PS1</div>
                        <div className="flex flex-col gap-1">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="whitespace-nowrap flex gap-2">
                                    <span className="opacity-50">[{new Date().toLocaleTimeString()}]</span>
                                    <span className="text-brand-primary">PS_EXE:</span>
                                    <span>TASK_ID_{Math.random().toString(36).substring(7).toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-primary/80" />
                    </div>
                </div>
            );
        case 'cosmic-miner':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden scale-110">
                    <svg className="w-full h-full opacity-80" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="8" fill="currentColor">
                            <animate attributeName="r" values="7;9;7" dur="4s" repeatCount="indefinite" />
                        </circle>
                        {[40, 65, 90].map((r, i) => (
                            <ellipse key={i} cx="100" cy="100" rx={r} ry={r * 0.4} fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" transform={`rotate(${i * 15} 100 100)`}>
                                <animateTransform attributeName="transform" type="rotate" from={`${i * 15} 100 100`} to={`${i * 15 + 360} 100 100`} dur={`${20 + i * 5}s`} repeatCount="indefinite" />
                            </ellipse>
                        ))}
                    </svg>
                </div>
            );
        case 'harbor':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full opacity-70" viewBox="0 0 200 200">
                        {[...Array(4)].map((_, i) => (
                            <path key={i} d={`M 0 ${100 + i * 15} Q 50 ${80 + i * 15} 100 ${100 + i * 15} T 200 ${100 + i * 15}`} fill="none" stroke="currentColor" strokeWidth="0.5">
                                <animate attributeName="d" dur={`${4 + i}s`} repeatCount="indefinite"
                                    values={`M 0 ${100 + i * 15} Q 50 ${80 + i * 15} 100 ${100 + i * 15} T 200 ${100 + i * 15};
                                            M 0 ${100 + i * 15} Q 50 ${120 + i * 15} 100 ${100 + i * 15} T 200 ${100 + i * 15};
                                            M 0 ${100 + i * 15} Q 50 ${80 + i * 15} 100 ${100 + i * 15} T 200 ${100 + i * 15}`} />
                            </path>
                        ))}
                    </svg>
                </div>
            );
        case 'packet-tracer':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full opacity-70" viewBox="0 0 200 200">
                        {/* Blueprint Grid Grid */}
                        <path d="M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150 M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200" stroke="currentColor" strokeWidth="0.2" fill="none" opacity="0.2" />
                        {/* Network Topology */}
                        <rect x="40" y="40" width="20" height="10" stroke="currentColor" fill="none" strokeWidth="0.5" />
                        <rect x="140" y="40" width="20" height="10" stroke="currentColor" fill="none" strokeWidth="0.5" />
                        <rect x="90" y="140" width="20" height="10" stroke="currentColor" fill="none" strokeWidth="0.5" />
                        <path d="M 50 50 L 90 145 M 150 50 L 110 145 M 50 50 L 150 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" fill="none" />
                        <text x="100" y="180" textAnchor="middle" fill="currentColor" fontSize="5" className="font-mono">OSPF_AREA_0_TOPOLOGY</text>
                    </svg>
                </div>
            );
        case 'ad-dc-environment':
            return (
                <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
                    <div className="w-full h-full border-[0.5px] border-current opacity-70 flex flex-col font-mono text-[6px] p-2">
                        <div className="mb-2 border-b border-current pb-1">DOMAIN: ATLAS_CORP.LOCAL</div>
                        <div className="flex-1 flex gap-4">
                            <div className="flex-1 border border-current p-1 flex flex-col gap-1">
                                <div>- OU: USERS</div>
                                <div className="pl-2">- GROUP: ADMINS</div>
                                <div className="pl-2 opacity-50">- GROUP: DEV_STAFF</div>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="h-10 border border-current p-1">DC_01: MASTER</div>
                                <div className="h-10 border border-current p-1 opacity-50">DC_02: SLAVE</div>
                            </div>
                        </div>
                        <div className="mt-2 text-[5px] animate-pulse">REPLICATION_STATUS: CONVERGED</div>
                    </div>
                </div>
            );
        case 'project-x':
            return (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full opacity-70" viewBox="0 0 200 200">
                        {/* Encrypted Data Stream */}
                        {[...Array(10)].map((_, i) => (
                            <text key={i} x="10" y={20 + i * 18} fill="currentColor" fontSize="8" className="font-mono opacity-20">
                                {Math.random().toString(36).substring(2, 18).toUpperCase()}
                                <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${1 + i * 0.5}s`} repeatCount="indefinite" />
                            </text>
                        ))}
                        {/* Security Lock Overlay */}
                        <path d="M 80 120 L 120 120 L 120 100 L 110 100 L 110 90 A 10 10 0 0 0 90 90 L 90 100 L 80 100 Z" stroke="currentColor" fill="none" strokeWidth="0.5" transform="scale(1.5) translate(-33 -33)" className="animate-pulse" />
                        <text x="100" y="30" textAnchor="middle" fill="currentColor" fontSize="6" className="font-mono tracking-[0.2em]">CLASSIFIED_PROJECT_X</text>
                    </svg>
                </div>
            );
        default:
            return <Icon name="code" size={56} />;
    }
};

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
            layoutId={`project-card-${project.id}`}
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

                    {!project.image || project.image.includes('placeholder') ? (
                        <motion.div
                            className="relative z-10 text-brand-primary/80 group-hover:text-brand-primary transition-colors duration-300 w-full h-full flex items-center justify-center"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            <ProjectVisualizer id={project.id} />
                        </motion.div>
                    ) : null}
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
