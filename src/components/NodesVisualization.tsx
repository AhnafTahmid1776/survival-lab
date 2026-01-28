import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { MotionValue, useTransform } from "framer-motion";
import * as THREE from "three";

interface NodeProps {
  position: [number, number, number];
  targetPosition: [number, number, number];
  progress: number;
  delay: number;
}

const Node = ({ position, targetPosition, progress, delay }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const adjustedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
  
  const currentX = THREE.MathUtils.lerp(position[0], targetPosition[0], adjustedProgress);
  const currentY = THREE.MathUtils.lerp(position[1], targetPosition[1], adjustedProgress);
  const currentZ = THREE.MathUtils.lerp(position[2], targetPosition[2], adjustedProgress);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = currentY + Math.sin(state.clock.elapsedTime * 0.5 + delay * 10) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[currentX, currentY, currentZ]}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#8B7355" transparent opacity={0.6 + adjustedProgress * 0.4} />
    </mesh>
  );
};

interface LineProps {
  start: [number, number, number];
  end: [number, number, number];
  progress: number;
}

const ConnectionLine = ({ start, end, progress }: LineProps) => {
  const points = useMemo(() => [start, end], [start, end]);

  return (
    <Line
      points={points}
      color="#8B7355"
      lineWidth={1}
      transparent
      opacity={progress * 0.3}
    />
  );
};

interface SceneProps {
  progress: number;
}

const Scene = ({ progress }: SceneProps) => {
  const nodes = useMemo(() => [
    { initial: [-2, 1.5, 0] as [number, number, number], target: [-1, 0.8, 0] as [number, number, number], delay: 0 },
    { initial: [1.8, -1.2, 0.5] as [number, number, number], target: [0, 0.8, 0] as [number, number, number], delay: 0.1 },
    { initial: [-1.5, -0.8, -0.3] as [number, number, number], target: [1, 0.8, 0] as [number, number, number], delay: 0.2 },
    { initial: [2.2, 0.5, 0.2] as [number, number, number], target: [-0.5, 0, 0] as [number, number, number], delay: 0.15 },
    { initial: [-0.5, 1.8, -0.5] as [number, number, number], target: [0.5, 0, 0] as [number, number, number], delay: 0.25 },
    { initial: [0.8, -1.5, 0.3] as [number, number, number], target: [0, -0.8, 0] as [number, number, number], delay: 0.3 },
  ], []);

  const getCurrentPosition = (node: typeof nodes[0]) => {
    const adjustedProgress = Math.max(0, Math.min(1, (progress - node.delay) / (1 - node.delay)));
    return [
      THREE.MathUtils.lerp(node.initial[0], node.target[0], adjustedProgress),
      THREE.MathUtils.lerp(node.initial[1], node.target[1], adjustedProgress),
      THREE.MathUtils.lerp(node.initial[2], node.target[2], adjustedProgress),
    ] as [number, number, number];
  };

  const connections = [
    [0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [2, 4],
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      
      {nodes.map((node, index) => (
        <Node
          key={index}
          position={node.initial}
          targetPosition={node.target}
          progress={progress}
          delay={node.delay}
        />
      ))}
      
      {connections.map(([startIdx, endIdx], index) => (
        <ConnectionLine
          key={index}
          start={getCurrentPosition(nodes[startIdx])}
          end={getCurrentPosition(nodes[endIdx])}
          progress={progress}
        />
      ))}
    </>
  );
};

interface NodesVisualizationProps {
  scrollProgress: MotionValue<number>;
}

const NodesVisualization = ({ scrollProgress }: NodesVisualizationProps) => {
  const progress = useTransform(scrollProgress, [0.2, 0.6], [0, 1]);
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ProgressRenderer progress={progress}>
          {(p) => <Scene progress={p} />}
        </ProgressRenderer>
      </Canvas>
    </div>
  );
};

const ProgressRenderer = ({ 
  progress, 
  children 
}: { 
  progress: MotionValue<number>; 
  children: (p: number) => React.ReactNode;
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    return progress.on("change", (v) => {
      setCurrentProgress(v);
    });
  }, [progress]);
  
  return <>{children(currentProgress)}</>;
};

export default NodesVisualization;
