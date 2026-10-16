"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Central 3D Tech Core (Torus Knot + Icosahedron Wireframe)
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    // Core Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(7.5, 2);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8, // Cyan-400
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const icoLines = new THREE.LineSegments(icoWireframe, lineMaterial);
    techGroup.add(icoLines);

    // Inner Glowing Particle Nodes at Vertices
    const icoVertices = icoGeometry.attributes.position.array;
    const vertexPointsCount = icoVertices.length / 3;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(icoVertices, 3)
    );

    const vertexMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa, // Blue-400
      size: 0.35,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexMaterial);
    techGroup.add(vertexPoints);

    // Floating Quantum Ring (Torus Knot Wireframe)
    const torusGeometry = new THREE.TorusKnotGeometry(9, 1.8, 90, 16, 2, 3);
    const torusWireframe = new THREE.WireframeGeometry(torusGeometry);
    const torusMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8, // Indigo-400
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const torusLines = new THREE.LineSegments(torusWireframe, torusMaterial);
    techGroup.add(torusLines);

    // 3. Deep Starfield & Tech Data Constellation
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 80;
      particlePositions[i + 1] = (Math.random() - 0.5) * 60;
      particlePositions[i + 2] = (Math.random() - 0.5) * 60;
      particleScales[i / 3] = Math.random() * 0.4 + 0.1;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.25,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 4. Mouse Tracking Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = -(y / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 5. Scroll Interaction Tracking
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 6. Resize Handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // 7. Render Loop with 3D Scroll Metamorphosis
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Mouse smoothing damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!prefersReducedMotion) {
        // Base idle rotation
        techGroup.rotation.y = elapsedTime * 0.15 + targetX * 0.4;
        techGroup.rotation.x = elapsedTime * 0.1 + targetY * 0.4;
        torusLines.rotation.z = elapsedTime * 0.08;

        // 3D SCROLL TRANSFORMATION:
        // As user scrolls down, camera zooms, the 3D core expands and rotates dynamically
        const scrollFactor = Math.min(scrollY / 1000, 3);

        techGroup.rotation.y += scrollFactor * 1.5;
        techGroup.rotation.z = scrollFactor * 0.8;
        techGroup.position.y = -scrollFactor * 4;
        techGroup.position.z = scrollFactor * 6; // Moves closer in 3D depth

        // Scale morph with scroll
        const dynamicScale = Math.max(0.6, 1 + scrollFactor * 0.3);
        techGroup.scale.set(dynamicScale, dynamicScale, dynamicScale);

        // Particle field rotation and depth warp
        starField.rotation.y = -elapsedTime * 0.03 - scrollFactor * 0.5;
        starField.position.z = scrollFactor * 8;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoWireframe.dispose();
      lineMaterial.dispose();
      vertexPointsGeo.dispose();
      vertexMaterial.dispose();
      torusGeometry.dispose();
      torusWireframe.dispose();
      torusMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
}
