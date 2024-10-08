"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";

// Ball component
const Ball = ({ img }) => {
  const [decal, setDecal] = useState(null);
  const texture = useTexture(img, () => setDecal(texture));

  if (!decal) return null;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} color="#FFFFFF" />
      <directionalLight position={[0, 0, 5]} intensity={1} color="#FFFFFF" />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={"#FFFFFF"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball img={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="text-white font-bold text-lg mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default BallCanvas;
