"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeTechGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 2. Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(6, 28, 28);
    const wireframeGeo = new THREE.WireframeGeometry(sphereGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const globeWireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    globeGroup.add(globeWireframe);

    // 3. Dense Surface Tech Nodes
    const pointsCount = 450;
    const pointsPositions = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;
      const radius = 6.05;

      pointsPositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pointsPositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pointsPositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(pointsPositions, 3)
    );
    const pointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.18,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const globePoints = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(globePoints);

    // 4. Glowing Orbital Ring
    const ringGeo = new THREE.RingGeometry(7.2, 7.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 2.3;
    globeGroup.add(orbitalRing);

    // 5. Arcs Connecting Global Delivery to US Placement Hubs
    const createArc = (
      v1: THREE.Vector3,
      v2: THREE.Vector3,
      colorHex: number
    ) => {
      const distance = v1.distanceTo(v2);
      const mid = v1.clone().lerp(v2, 0.5);
      mid.normalize().multiplyScalar(6 + distance * 0.25);

      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      const points = curve.getPoints(40);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Line(curveGeo, curveMat);
    };

    // Global Key Coordinates on Sphere (Rough lat/lng mapping)
    const usMidwest = new THREE.Vector3(-3.2, 3.8, 3.4).normalize().multiplyScalar(6);
    const usWestCoast = new THREE.Vector3(-4.5, 3.2, 2.5).normalize().multiplyScalar(6);
    const usEastCoast = new THREE.Vector3(-2.2, 3.5, 4.2).normalize().multiplyScalar(6);
    const indiaNoida = new THREE.Vector3(4.2, 2.6, 3.2).normalize().multiplyScalar(6);
    const indiaGoa = new THREE.Vector3(4.5, 1.4, 3.6).normalize().multiplyScalar(6);

    const arc1 = createArc(indiaNoida, usMidwest, 0x38bdf8);
    const arc2 = createArc(indiaGoa, usWestCoast, 0x60a5fa);
    const arc3 = createArc(indiaNoida, usEastCoast, 0x818cf8);
    globeGroup.add(arc1, arc2, arc3);

    // 6. Interactive Mouse Hover Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 1.5;
      mouseY = -(y / rect.height - 0.5) * 1.5;
    };
    mount.addEventListener("mousemove", onMouseMove);

    // 7. Resize Handler
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // 8. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!prefersReducedMotion) {
        globeGroup.rotation.y = delta * 0.12 + targetX * 0.5;
        globeGroup.rotation.x = 0.2 + targetY * 0.3;
        orbitalRing.rotation.z = delta * 0.2;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      sphereGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[360px] sm:h-[450px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Tech Placement Globe"
    />
  );
}
