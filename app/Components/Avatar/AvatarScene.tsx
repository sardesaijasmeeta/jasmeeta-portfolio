"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import AvatarModel from "./AvatarModel";

export default function AvatarScene() {
  return (
    <div className="h-116 w-full">
    <Canvas camera={{ position: [0, 1.6, 2.8], fov: 40 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[2, 3, 4]} intensity={1.2} />

    <AvatarModel />

    <OrbitControls
        enableZoom={false}
        enablePan={true}
        target={[0, 1.4, 0]}
        enableRotate={true}
    />

    <Environment preset="studio" />
    </Canvas>
    </div>
  );
}
