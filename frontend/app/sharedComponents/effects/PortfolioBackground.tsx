"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { } from '@react-three/drei';
import * as THREE from 'three';

const TelemetryShader = {
    uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#94a3b8') }, // Technical Gray-Blue
        uOpacity: { value: 0.12 },
        uResolution: { value: new THREE.Vector2() }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform vec2 uResolution;
        varying vec2 vUv;

        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
            bool isMobile = uResolution.x < 768.0;
            
            // Responsive density and thickness
            float density = isMobile ? 50.0 : 30.0;
            float thickness = isMobile ? 0.04 : 0.02;
            float opacityBoost = isMobile ? 1.8 : 1.0;

            vec2 grid = fract(vUv * density + uTime * 0.02);
            float line = smoothstep(0.0, thickness, grid.x) * smoothstep(1.0, 1.0 - thickness, grid.x);
            line *= smoothstep(0.0, thickness, grid.y) * smoothstep(1.0, 1.0 - thickness, grid.y);
            
            // Subtle "scanning" scanline pulse
            float scan = sin(vUv.y * (isMobile ? 200.0 : 100.0) - uTime * 2.0) * 0.1 + 0.9;
            
            // Micro-dots at intersections for mobile detail
            float dots = 0.0;
            if (isMobile) {
                vec2 centers = abs(grid - 0.5);
                dots = smoothstep(0.48, 0.5, max(centers.x, centers.y)) * 0.5;
            }

            // Interactive noise pulses
            float n = random(floor(vUv * (isMobile ? 30.0 : 15.0)) + floor(uTime * 1.5));
            float pulse = step(0.997, n) * 0.2;

            float baseOpacity = uOpacity * opacityBoost;
            float alpha = (1.0 - line + pulse + dots) * baseOpacity * scan * (1.1 - distance(vUv, vec2(0.5)) * 1.8);
            gl_FragColor = vec4(uColor, alpha);
        }
    `
};

function InfiniteTelemetry() {
    const floorRef = useRef<THREE.Mesh>(null!);
    const ceilingRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const { width, height } = state.size;

        [floorRef, ceilingRef].forEach(ref => {
            if (ref.current) {
                const material = ref.current.material as THREE.ShaderMaterial;
                material.uniforms.uTime.value = time;
                material.uniforms.uResolution.value.set(width, height);
            }
        });
    });

    return (
        <group>
            {/* Centered Vault: Floor at -10, Ceiling at 10 */}
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
                <planeGeometry args={[160, 160, 1, 1]} />
                <shaderMaterial
                    transparent
                    depthWrite={false}
                    blending={THREE.NormalBlending}
                    {...TelemetryShader}
                />
            </mesh>

            <mesh ref={ceilingRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 10, 0]}>
                <planeGeometry args={[160, 160, 1, 1]} />
                <shaderMaterial
                    transparent
                    depthWrite={false}
                    blending={THREE.NormalBlending}
                    {...TelemetryShader}
                />
            </mesh>
        </group>
    );
}

export function PortfolioBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#fdfeff]">
            <Canvas camera={{ position: [0, 0, 25], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <fog attach="fog" args={['#fdfeff', 5, 80]} />
                <InfiniteTelemetry />
            </Canvas>
            {/* Removed the from-white gradient that was masking the ceiling */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </div>
    );
}
