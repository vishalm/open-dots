"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./hero-3d"), {
  ssr: false,
  loading: () => <HeroVisualFallback />,
});

function HeroVisualFallback() {
  return (
    <div
      className="h-full w-full animate-pulse rounded-full"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, var(--dot-blue) 0%, transparent 60%), radial-gradient(circle at 70% 30%, var(--dot-red) 0%, transparent 55%), radial-gradient(circle at 30% 70%, var(--dot-yellow) 0%, transparent 55%), radial-gradient(circle at 65% 70%, var(--dot-green) 0%, transparent 55%)",
        opacity: 0.35,
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />
  );
}

// A bare canvas.getContext("webgl") check isn't enough: some sandboxed /
// software-rendered environments hand back a context there but still throw
// inside THREE.WebGLRenderer's own context creation (seen in headless CI
// with SwiftShader: "BindToCurrentSequence failed"). Construct the real
// renderer, with the same attributes Hero3D's Canvas uses, so this check
// fails exactly when the real mount would.
async function canCreateRenderer() {
  try {
    const THREE = await import("three");
    const canvas = document.createElement("canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.dispose();
    return true;
  } catch {
    return false;
  }
}

// A WebGL context can fail to create (headless/sandboxed renderers, disabled
// GPU, context loss) even after feature detection passes. Without this, an
// uncaught error from the renderer unmounts the entire page (React's default
// behavior for an error with no boundary), not just the hero graphic.
class Canvas3DBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Hero 3D visual failed, falling back to static gradient:", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export function HeroVisual() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    canCreateRenderer()
      .then((supported) => {
        if (!cancelled) setWebglSupported(supported);
      })
      .catch(() => {
        if (!cancelled) setWebglSupported(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-xl" aria-hidden="true">
      {webglSupported === true ? (
        <Canvas3DBoundary fallback={<HeroVisualFallback />}>
          <Hero3D />
        </Canvas3DBoundary>
      ) : (
        <HeroVisualFallback />
      )}
    </div>
  );
}
