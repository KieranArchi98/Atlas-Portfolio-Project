"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Grid } from '@react-three/drei';
import * as THREE from 'three';

function MovingGrid() {
    const gridRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (gridRef.current) {
            // Infinite scroll effect
            // We move the grid along Z, and reset it every 'cellSize' units
            const speed = 2;
            gridRef.current.position.z = (state.clock.elapsedTime * speed) % 1;
        }
    });

    return (
        <group ref={gridRef} rotation={[Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
            <Grid
                renderOrder={-1}
                infiniteGrid
                cellSize={1}
                sectionSize={5}
                fadeDistance={30}
                sectionColor="#3b82f6"
                cellColor="#1e293b"
            />
        </group>
    );
}

export function PortfolioBackground() {
    return (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                <fog attach="fog" args={['#0f172a', 5, 30]} />
                <ambientLight intensity={0.5} />

                <MovingGrid />

                <Stars
                    radius={50}
                    depth={50}
                    count={2000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Canvas>
        </div>
    );
}
