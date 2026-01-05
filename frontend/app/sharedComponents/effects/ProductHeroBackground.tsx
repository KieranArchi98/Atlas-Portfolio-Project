"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AmbientShapes() {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle mouse parallax - Fluid and slow
            const mouseX = (state.mouse.x * 0.05); // Reduced intensity
            const mouseY = (state.mouse.y * 0.05);

            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY, 0.01); // Slower easing
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX, 0.01);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Shape 1: Primary Brand Color (Blue/Cyan) - Large, slow */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[1, 64, 64]} position={[-2, 1, -2]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#3b82f6" // Brand Primary
                        attach="material"
                        distort={0.4} // Strength of distortion
                        speed={1.5} // Speed of distortion
                        roughness={0.4}
                        metalness={0.1}
                        transparent
                        opacity={0.15} // Very subtle
                    />
                </Sphere>
            </Float>

            {/* Shape 2: Secondary Brand Color (Purple) - Smaller, offset */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Sphere args={[1, 64, 64]} position={[3, -1, -3]} scale={1.2}>
                    <MeshDistortMaterial
                        color="#8b5cf6" // Brand Secondary
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.5}
                        transparent
                        opacity={0.15}
                    />
                </Sphere>
            </Float>

            {/* Shape 3: Accent/White - Deep background */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                <Sphere args={[1, 32, 32]} position={[0, 2, -5]} scale={2}>
                    <MeshDistortMaterial
                        color="#ffffff"
                        attach="material"
                        distort={0.3}
                        speed={1}
                        transparent
                        opacity={0.05}
                    />
                </Sphere>
            </Float>
        </group>
    );
}

export function ProductHeroBackground() {
    return (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                {/* Soft Ambient Lighting Layout */}
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} intensity={0.5} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

                <AmbientShapes />
            </Canvas>
        </div>
    );
}
