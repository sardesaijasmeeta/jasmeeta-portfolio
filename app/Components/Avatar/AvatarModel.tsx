"use client";

import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
const AVATAR_URL =
  "https://models.readyplayer.me/698323d16eb4878bb83232e3.glb";

export default function AvatarModel() {
  // Load avatar
  const { scene } = useGLTF(AVATAR_URL);

  // Load Mixamo animation (NO SKIN)
  const wavingFBX = useFBX("/Waving2.fbx");

  // Clone animation safely
  const animations = useMemo(() => {
    if (!wavingFBX.animations.length) return [];
    const clip = wavingFBX.animations[0].clone();
    clip.name = "Wave";
    return [clip];
  }, [wavingFBX]);

  // Bind animation directly (NO retargeting)
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const wave = actions["Wave"];
    if (!wave) return;

    wave.reset();
    wave.fadeIn(0.4);
    wave.setLoop(THREE.LoopRepeat, Infinity);
    wave.play();

    wave.getMixer().timeScale = 0.85;

    return () => {
      wave.fadeOut(0.3);
    };
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={2.0}
      position={[0, -1.35, 0]}
    />
  );
}
