"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { Button } from '@/app/sharedComponents/ui/Button';
import { AnimatedRitualIcon } from '@/app/sharedComponents/ui/AnimatedRitualIcon';
import { PortfolioBackground } from '@/app/sharedComponents/effects/PortfolioBackground';
import { ProjectCard3D } from '@/app/sharedComponents/ui/ProjectCard3D';

interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: 'konnect',
        name: 'Konnect',
        description: 'Agentic dashboard and centralized knowledge base',
        longDescription: 'A sophisticated agentic command center designed to aggregate diverse knowledge streams and provide a unified interface for system-wide operations and information retrieval.',
        image: '/placeholder-project.jpg',
        technologies: ['React', 'Next.js', 'LLM Integration', 'Tailwind'],
        githubUrl: 'https://github.com/KieranArchi98/Konnect',
    },
    {
        id: 'gemini-ai',
        name: 'Gemini AI',
        description: 'Personalized LLM application interface',
        longDescription: 'A custom-tailored interface leveraging Google Gemini models to provide specialized AI assistance, optimized for technical workflows and personal productivity.',
        image: '/placeholder-project.jpg',
        technologies: ['Python', 'Google AI SDK', 'Streamlit', 'API Design'],
        githubUrl: 'https://github.com/KieranArchi98/Gemini-AI',
    },
    {
        id: 'netdoctor',
        name: 'NetDoctor',
        description: 'Python-based network diagnostic utility',
        longDescription: 'An automated network health monitoring and troubleshooting tool. It performs rapid diagnostics across various protocols to identify bottlenecks and connectivity failures.',
        image: '/placeholder-project.jpg',
        technologies: ['Python', 'Scapy', 'Network Protocols', 'CLI Automation'],
        githubUrl: 'https://github.com/KieranArchi98/NetDoctor',
    },
    {
        id: 'powershell-toolkit',
        name: 'Powershell CLI Toolkit',
        description: 'Sysadmin troubleshooting and automation suite',
        longDescription: 'A comprehensive collection of PowerShell scripts designed for system administrators to automate repetitive tasks, audit security, and troubleshoot Windows environments.',
        image: '/placeholder-project.jpg',
        technologies: ['PowerShell', 'Windows Server', 'Automation', 'Scripting'],
        githubUrl: 'https://github.com/KieranArchi98/SysAdmin-CLI-Toolkit',
    },
    {
        id: 'cosmic-miner',
        name: 'Cosmic Miner',
        description: 'Immersive space-themed idle clicker game',
        longDescription: 'A complex idle game exploring celestial resource extraction. Features intricate progression systems, prestige mechanics, and a data-driven upgrade architecture.',
        image: '/placeholder-project.jpg',
        technologies: ['TypeScript', 'Vite', 'State Management', 'Game Logic'],
        githubUrl: 'https://github.com/KieranArchi98/Cosmic-Miner',
    },
    {
        id: 'harbor',
        name: 'Harbor',
        description: 'Community-driven forum and discussion platform',
        longDescription: 'A scalable, Reddit-inspired forum application featuring hierarchical discussions, user voting systems, and specialized technical communities.',
        image: '/placeholder-project.jpg',
        technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js'],
        githubUrl: 'https://github.com/KieranArchi98/Harbor',
    },
    {
        id: 'packet-tracer',
        name: 'Enterprise Network Setup',
        description: 'Complex Cisco Packet Tracer topology',
        longDescription: 'A high-fidelity enterprise network simulation featuring multi-area OSPF routing, VLAN segmentation, EtherChannel, and secure Site-to-Site VPN tunnels for multi-branch connectivity.',
        image: '/projects/packet-tracer.png',
        technologies: ['Cisco Packet Tracer', 'OSPF', 'VLANs', 'VPN'],
        githubUrl: 'https://github.com/KieranArchi98/Network-Architectures',
    },
    {
        id: 'ad-dc-environment',
        name: 'Corporate AD/DC Environment',
        description: 'Windows Server infrastructure implementation',
        longDescription: 'A production-grade Active Directory Domain Controller setup. Includes complex Group Policy Objects (GPOs), automated user onboarding via PowerShell, and highly available DNS/DHCP services.',
        image: '/projects/ad-dc.png',
        technologies: ['Windows Server', 'Active Directory', 'GPO', 'DNS/DHCP'],
        githubUrl: 'https://github.com/KieranArchi98/Enterprise-Infrastructure',
    },
    {
        id: 'project-x',
        name: 'Project X',
        description: 'Experimental system interoperability research',
        longDescription: 'A high-stability research project focused on cross-platform system interoperability and advanced cryptographic task handling. Explores state-of-the-art data integrity verification methods.',
        image: '/projects/project-x.png',
        technologies: ['Cryptography', 'Rust', 'System Interaction', 'Low-level API'],
        githubUrl: 'https://github.com/KieranArchi98/Project-X',
    }
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="relative min-h-screen pt-0 pb-10 overflow-hidden bg-background-primary">
            {/* Background Effect */}
            <PortfolioBackground />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10 pt-10">
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {projects.map((project, index) => {
                        const isLast = index === projects.length - 1;
                        const isSoloMd = isLast && projects.length % 2 !== 0;
                        const isSoloLg = isLast && projects.length % 3 === 1;

                        return (
                            <div
                                key={project.id}
                                className={`
                                    ${isSoloMd ? 'md:col-span-2 md:flex md:justify-center' : 'md:col-span-1'}
                                    ${isSoloLg ? 'lg:col-span-3 lg:flex lg:justify-center' : 'lg:col-span-1'}
                                `}
                            >
                                <div className={`w-full ${isSoloMd ? 'md:w-1/2 lg:w-full' : ''} ${isSoloLg ? 'lg:w-1/3' : ''}`}>
                                    <ProjectCard3D
                                        project={project}
                                        index={index}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-background-primary/90 backdrop-blur-lg z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div
                                className="bg-background-primary border border-brand-primary/20 rounded-2xl shadow-2xl w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] 2xl:w-[65%] max-h-[90vh] overflow-y-auto pointer-events-auto relative"
                            >
                                {/* Modal Header / Close */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-background-primary/50 hover:bg-brand-primary/20 text-foreground-primary rounded-full transition-colors z-20"
                                >
                                    <Icon name="close" size={24} />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                    {/* Left: Visual */}
                                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-brand-primary/10 to-background-primary flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-border-default">
                                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent" />
                                        <Icon name="code" size={120} className="text-brand-primary/20 relative z-10" />
                                    </div>

                                    {/* Right: Content */}
                                    <div className="p-8 lg:p-12 space-y-8 bg-background-primary/30 backdrop-blur-sm">
                                        <div>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground-primary mb-2 font-mono uppercase tracking-tight">
                                                {selectedProject.name}
                                            </h2>
                                            <div className="h-1 w-20 bg-brand-primary/50 rounded-full" />
                                        </div>

                                        <p className="text-foreground-secondary text-lg leading-relaxed">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div>
                                            <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Stack</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-brand-primary/5 border border-brand-primary/20 text-brand-primary text-xs font-medium rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-border-default">
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1"
                                            >
                                                <Button variant="outline" className="w-full gap-2 transition-all hover:border-brand-primary hover:text-brand-primary group">
                                                    <Icon name="code" size={20} className="group-hover:scale-110 transition-transform" />
                                                    View Code
                                                </Button>
                                            </a>
                                            {selectedProject.liveUrl && (
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Button variant="primary" className="w-full gap-2 group">
                                                        <Icon name="visible" size={20} className="group-hover:translate-x-1 transition-transform" />
                                                        Live Demo
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
