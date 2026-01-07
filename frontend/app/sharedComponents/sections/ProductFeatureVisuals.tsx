"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

/* 
  Product-Page Specific Visuals
  Highly Sophisticated 3D-Like Compositions V5
*/

const ISO_CONTAINER_STYLE = "relative w-full h-56 flex items-center justify-center perspective-1000";
const ISO_PLATFORM_STYLE = "relative w-40 h-40 transform-style-3d";

// Full Stack: Terminal & floating UI layers
export function WebVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 35 }}
                whileInView={{ rotateX: 55, rotateZ: 30 }}
                viewport={{ once: true }}
            >
                {/* Main Terminal Base */}
                <motion.div
                    className="absolute inset-0 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl flex flex-col overflow-hidden"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <div className="h-6 bg-slate-900/80 border-b border-slate-800 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                        <div className="flex-grow" />
                        <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">shell.exe</div>
                    </div>
                    {/* Code Stream */}
                    <div className="p-3 space-y-2">
                        {[70, 40, 90, 60, 80].map((w, i) => (
                            <motion.div
                                key={i}
                                className="h-1.5 bg-brand-primary/20 rounded-full"
                                style={{ width: `${w}%` }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Floating UI Elements */}
                <motion.div
                    className="absolute top-2 left-10 w-24 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-xl flex items-center justify-center"
                    style={{ transform: "translateZ(40px)" }}
                    animate={{ y: [0, -10, 0], rotateZ: [-2, 2, -2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="flex flex-col gap-2 w-full p-2">
                        <div className="w-full h-1 bg-white/20 rounded" />
                        <div className="flex gap-2">
                            <div className="w-4 h-4 bg-blue-500/40 rounded-full" />
                            <div className="flex-grow h-4 bg-white/10 rounded" />
                        </div>
                    </div>
                </motion.div>

                {/* Floating Icon */}
                <motion.div
                    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-brand-primary rounded-xl p-3 shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.4)] border border-brand-primary/50"
                    style={{ transform: "translateZ(80px)" }}
                    animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon name="code" className="text-white" size={24} />
                </motion.div>
            </motion.div>
        </div>
    );
}

// Cloud & Network: Orbital Data Hub
export function NetArchVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 0 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Central Pillar of Data */}
                <motion.div
                    className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping" />
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-400/50">
                        <Icon name="server" className="text-white" size={32} />
                    </div>
                </motion.div>

                {/* Orbital Paths */}
                {[0, 120, 240].map((deg, i) => (
                    <div key={i} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
                        <div className="absolute top-1/2 left-1/2 w-[140%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-1/2 transform-style-3d" />

                        <motion.div
                            className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center shadow-lg"
                            style={{ transform: "rotateX(-60deg) translateZ(10px)" }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, delay: i, repeat: Infinity }}
                        >
                            <Icon name="globe" className="text-blue-400" size={16} />
                        </motion.div>
                    </div>
                ))}

                {/* Data Pulses */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-blue-400/20"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
}

// Tech Ops: Diagnostic & Hardware Panel
export function MobileVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 45 }}
            >
                {/* Hardware Slab */}
                <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    style={{ transform: "translateZ(0px)" }}>
                    <div className="h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
                </div>

                {/* Circuitry Pattern */}
                <div className="absolute inset-4 border border-slate-700/50 rounded flex flex-col p-2 gap-4"
                    style={{ transform: "translateZ(5px)" }}>
                    <div className="flex justify-between items-center px-2">
                        <div className="flex gap-1">
                            <div className="w-1 h-3 bg-emerald-500 rounded-full" />
                            <div className="w-1 h-3 bg-emerald-500/50 rounded-full" />
                            <div className="w-1 h-3 bg-emerald-500/20 rounded-full" />
                        </div>
                        <div className="text-[10px] font-mono text-emerald-500">OPERATIONAL</div>
                    </div>
                    {/* Activity Bars */}
                    <div className="grid grid-cols-4 gap-2 flex-grow items-end">
                        {[0.6, 0.9, 0.4, 0.75].map((h, i) => (
                            <motion.div
                                key={i}
                                className="w-full bg-slate-800 border-t border-slate-600 rounded-sm"
                                style={{ height: `${h * 100}%` }}
                                animate={{ height: [`${h * 80}%`, `${h * 100}%`, `${h * 90}%`] }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Metric Card */}
                <motion.div
                    className="absolute -top-4 -right-4 w-28 h-32 bg-slate-950/90 backdrop-blur-xl border border-slate-700 rounded-xl p-3 flex flex-col justify-between shadow-2xl"
                    style={{ transform: "translateZ(60px) rotateY(-10deg)" }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="space-y-1">
                        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">System Load</div>
                        <div className="text-lg font-mono text-white leading-none">0.24<span className="text-[8px] text-emerald-500 ml-1">▲</span></div>
                    </div>
                    <div className="h-10 w-full bg-emerald-500/10 rounded-sm flex items-end p-1 gap-0.5">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="flex-grow bg-emerald-500/40 rounded-t-[1px]"
                                animate={{ height: ["20%", "60%", "30%"] }}
                                transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                            />
                        ))}
                    </div>
                    <Icon name="settings" className="absolute top-2 right-2 text-slate-700" size={12} />
                </motion.div>
            </motion.div>
        </div>
    );
}

// AI: Neural Nexus
export function AiVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 45 }}
                animate={{ rotateZ: 50 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
                {/* Glow Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-24 h-24 bg-orange-600/10 blur-[40px] rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </div>

                {/* Neural Mesh Nodes */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(20px)" }}>
                    <div className="relative w-24 h-24">
                        {[0, 72, 144, 216, 288].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                                style={{ transform: `rotate(${deg}deg) translateY(-40px)` }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                            >
                                <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                            </motion.div>
                        ))}

                        {/* Connecting Lines (CSS-only approximation) */}
                        <div className="absolute inset-0 border-[0.5px] border-orange-500/20 rounded-full scale-125 animate-spin-slow" />
                        <div className="absolute inset-0 border-[0.5px] border-orange-500/10 rounded-full scale-75 animate-reverse-spin-slow" />
                    </div>
                </div>

                <motion.div
                    className="absolute inset-m-auto w-12 h-12 bg-slate-900 border-2 border-orange-500 flex items-center justify-center rounded-xl z-20"
                    style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%) translateZ(40px)" }}
                    animate={{ rotateZ: 45 }}
                >
                    <Icon name="settings" className="text-orange-500" size={24} />
                    {/* Pulse Rings */}
                    <motion.div
                        className="absolute inset-0 border border-orange-400 rounded-xl"
                        animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Data Packets */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-4 bg-orange-400 rounded-full"
                        style={{ left: "50%", top: "50%" }}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: [0, (i - 1) * 60],
                            y: [0, -60],
                            rotate: i * 30
                        }}
                        transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export function ProductFeatureVisual({ variant }: { variant?: string }) {
    if (variant === 'web') return <WebVisual3D />;
    if (variant === 'mobile') return <MobileVisual3D />;
    if (variant === 'network-arch') return <NetArchVisual3D />;
    if (variant === 'ai') return <AiVisual3D />;

    return <WebVisual3D />;
}

