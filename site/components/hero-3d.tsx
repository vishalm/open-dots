"use client";

import { useLayoutEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];
const DOT_COUNT = 260;

function fibonacciSpherePoints(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
  }
  return points;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

function DotSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const reducedMotion = useReducedMotion();
  const pointer = useRef({ x: 0, y: 0 });

  const points = useMemo(() => fibonacciSpherePoints(DOT_COUNT, 2.4), []);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    points.forEach((point, i) => {
      dummy.position.copy(point);
      const scale = 0.055 + Math.random() * 0.045;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.set(PALETTE[i % PALETTE.length]);
      mesh.setColorAt(i, color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [points]);

  function handlePointerMove(event: ThreeEvent<PointerEvent>) {
    pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
  }

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (!reducedMotion) {
      group.rotation.y += delta * 0.12;
      group.rotation.x = THREE.MathUtils.lerp(
        group.rotation.x,
        pointer.current.y * 0.25,
        0.03
      );
      group.rotation.y = THREE.MathUtils.lerp(
        group.rotation.y,
        group.rotation.y + pointer.current.x * 0.15,
        0.015
      );
    }
  });

  return (
    <group ref={groupRef} onPointerMove={handlePointerMove}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, DOT_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial
          roughness={0.35}
          metalness={0.1}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} />
      <directionalLight position={[-4, -3, -4]} intensity={0.35} color="#818cf8" />
      <DotSphere />
    </Canvas>
  );
}
