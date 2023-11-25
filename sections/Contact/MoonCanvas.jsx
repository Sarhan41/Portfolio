import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "@/constants/Loader"; // Make sure the Loader path is correct

const Moon = () => {
  const { scene } = useGLTF("./moon/scene.gltf"); // Ensure the correct path to your GLTF model
  console.log(scene);

  return <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} />;
};

const MoonCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ambientLight intensity={1} /> {/* Add ambient light to illuminate the scene */}
        <Moon />
      </Suspense>
    </Canvas>
  );
};

export default MoonCanvas;
