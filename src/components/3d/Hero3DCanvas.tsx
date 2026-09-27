import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  scrollProgress: number; // 0 to 1 based on page scroll
  activePresetView?: 'exterior' | 'interior' | 'pool' | 'overview' | null;
  onPresetSelect?: (preset: 'exterior' | 'interior' | 'pool' | 'overview') => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  scrollProgress,
  activePresetView,
  onPresetSelect
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'gold' | 'sunset' | 'daylight'>('gold');

  // Store references for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const auroraRingRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const poolWaterRef = useRef<THREE.Mesh | null>(null);
  const interiorLightRef = useRef<THREE.PointLight | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  // Target camera state for smooth damping
  const targetCamPos = useRef(new THREE.Vector3(15, 8.5, 21));
  const targetLookAt = useRef(new THREE.Vector3(0, 3.2, 0));
  const currentCamPos = useRef(new THREE.Vector3(15, 8.5, 21));
  const currentLookAt = useRef(new THREE.Vector3(0, 3.2, 0));

  // Interactive Drag & Momentum variables
  const isDragging = useRef(false);
  const prevPointer = useRef({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });
  const dragTarget = useRef({ x: 0, y: 0 });

  // Mouse parallax
  const mousePos = useRef({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });

  // 1. Cinematic 3D Spline Curves for Hollywood Steadicam Flight
  // Instead of piecewise linear jumps, a CatmullRom spline guarantees continuous G2-smooth camera motion
  const { camPathSpline, lookPathSpline } = useMemo(() => {
    const camPoints = [
      new THREE.Vector3(16.0, 8.5, 22.0), // 0.0: Grand distant overview
      new THREE.Vector3(12.5, 6.8, 17.0), // 0.25: Approaching architectural cantilever
      new THREE.Vector3(5.5, 3.8, 10.5),  // 0.50: Gliding across infinity pool terrace
      new THREE.Vector3(1.2, 2.4, 4.6),   // 0.75: Entering panoramic living room
      new THREE.Vector3(-4.0, 3.2, 7.8),  // 0.90: Sweeping around interior corner
      new THREE.Vector3(19.0, 14.0, 24.0) // 1.00: Ascending to supreme aerial overview
    ];

    const lookPoints = [
      new THREE.Vector3(0, 3.2, 0),       // 0.0: Center of villa
      new THREE.Vector3(-0.5, 3.0, 1.5),  // 0.25: Focusing on upper cube facade
      new THREE.Vector3(2.5, 1.2, 6.5),   // 0.50: Gazing at pool water reflection
      new THREE.Vector3(0, 1.8, 1.2),     // 0.75: Focus on warm interior lounge
      new THREE.Vector3(0, 2.2, 0),       // 0.90: Inside look
      new THREE.Vector3(0, 3.5, 0)        // 1.00: Center overview
    ];

    const camCurve = new THREE.CatmullRomCurve3(camPoints, false, 'centripetal', 0.5);
    const lookCurve = new THREE.CatmullRomCurve3(lookPoints, false, 'centripetal', 0.5);

    return { camPathSpline: camCurve, lookPathSpline: lookCurve };
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    // 1. Scene & Atmosphere (Luxury Pearlescent White & Warm Golden Hour)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#faf7f2');
    scene.fog = new THREE.FogExp2('#faf7f2', 0.016);

    // 2. Camera Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 120);
    camera.position.set(16, 8.5, 22);
    cameraRef.current = camera;

    // 3. Renderer Setup with high-precision tone mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lights Setup (Sunlight, Champagne Fill, Gold Interior)
    const ambientLight = new THREE.AmbientLight('#fdf8ec', 1.8);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight('#fff2d4', 2.3);
    dirLight.position.set(22, 34, 18);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    const goldFill = new THREE.DirectionalLight('#ecd289', 1.1);
    goldFill.position.set(-15, 18, -10);
    scene.add(goldFill);

    const interiorLight = new THREE.PointLight('#ffd17d', 4.2, 28, 1.2);
    interiorLight.position.set(0, 4.2, 0);
    scene.add(interiorLight);
    interiorLightRef.current = interiorLight;

    const poolGlowLight = new THREE.PointLight('#38bdf8', 1.6, 15, 1.5);
    poolGlowLight.position.set(4, 0.8, 8);
    scene.add(poolGlowLight);

    // 5. Materials (Italian Travertine, Pristine White, Brushed Gold Metal)
    const travertineFloorMat = new THREE.MeshStandardMaterial({
      color: 0xf3eee6,
      roughness: 0.45,
      metalness: 0.08
    });

    const pristineWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.04
    });

    const luxuryGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.22,
      metalness: 0.88
    });

    const warmWoodMat = new THREE.MeshStandardMaterial({
      color: 0x8a5d3b,
      roughness: 0.65,
      metalness: 0.05
    });

    const crystalGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.02,
      metalness: 0.1,
      transmission: 0.92,
      ior: 1.52,
      reflectivity: 0.95
    });

    const warmInteriorMat = new THREE.MeshStandardMaterial({
      color: 0xffeed4,
      emissive: 0xffcc77,
      emissiveIntensity: 0.5,
      roughness: 0.3
    });

    const poolWaterMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.28,
      roughness: 0.1,
      metalness: 0.85,
      transparent: true,
      opacity: 0.88
    });

    // 6. Villa Architecture Group
    const villaGroup = new THREE.Group();

    // Terrace Base & Foundation (White Travertine)
    const groundGeo = new THREE.BoxGeometry(32, 0.8, 32);
    const groundMesh = new THREE.Mesh(groundGeo, travertineFloorMat);
    groundMesh.position.y = -0.4;
    groundMesh.receiveShadow = true;
    villaGroup.add(groundMesh);

    // Infinity Pool
    const poolRimGeo = new THREE.BoxGeometry(10, 0.9, 7);
    const poolRim = new THREE.Mesh(poolRimGeo, travertineFloorMat);
    poolRim.position.set(4, -0.2, 8);
    villaGroup.add(poolRim);

    const poolGoldEdgeGeo = new THREE.BoxGeometry(10.2, 0.08, 7.2);
    const poolGoldEdge = new THREE.Mesh(poolGoldEdgeGeo, luxuryGoldMat);
    poolGoldEdge.position.set(4, 0.28, 8);
    villaGroup.add(poolGoldEdge);

    const poolWaterGeo = new THREE.PlaneGeometry(9.2, 6.2);
    const poolWater = new THREE.Mesh(poolWaterGeo, poolWaterMat);
    poolWater.rotation.x = -Math.PI / 2;
    poolWater.position.set(4, 0.3, 8);
    villaGroup.add(poolWater);
    poolWaterRef.current = poolWater;

    // Ground Floor Main Living Volume
    const groundFloorGeo = new THREE.BoxGeometry(14, 3.8, 10);
    const groundFloor = new THREE.Mesh(groundFloorGeo, pristineWhiteMat);
    groundFloor.position.set(0, 1.9, 0);
    groundFloor.castShadow = true;
    groundFloor.receiveShadow = true;
    villaGroup.add(groundFloor);

    // Ground Floor Glass Facade
    const glassFacadeGeo = new THREE.BoxGeometry(13.6, 3.4, 0.2);
    const glassFacadeFront = new THREE.Mesh(glassFacadeGeo, crystalGlassMat);
    glassFacadeFront.position.set(0, 1.9, 5.05);
    villaGroup.add(glassFacadeFront);

    // Gold Mullions
    const goldMullionGeo = new THREE.BoxGeometry(0.12, 3.4, 0.24);
    for (let m = -2; m <= 2; m++) {
      const goldMullion = new THREE.Mesh(goldMullionGeo, luxuryGoldMat);
      goldMullion.position.set(m * 2.8, 1.9, 5.06);
      villaGroup.add(goldMullion);
    }

    // Upper Floor
    const upperFloorGeo = new THREE.BoxGeometry(12, 3.6, 12);
    const upperFloor = new THREE.Mesh(upperFloorGeo, pristineWhiteMat);
    upperFloor.position.set(-2, 5.6, 1.5);
    upperFloor.castShadow = true;
    upperFloor.receiveShadow = true;
    villaGroup.add(upperFloor);

    // Balcony Glass & Gold Railing
    const upperGlassGeo = new THREE.BoxGeometry(10.8, 3.0, 0.15);
    const upperGlass = new THREE.Mesh(upperGlassGeo, crystalGlassMat);
    upperGlass.position.set(-1.8, 5.5, 7.55);
    villaGroup.add(upperGlass);

    const goldRailingTopGeo = new THREE.BoxGeometry(11.0, 0.08, 0.2);
    const goldRailingTop = new THREE.Mesh(goldRailingTopGeo, luxuryGoldMat);
    goldRailingTop.position.set(-1.8, 7.02, 7.55);
    villaGroup.add(goldRailingTop);

    // Roof Slab & Gold Trim
    const roofSlabGeo = new THREE.BoxGeometry(15, 0.6, 14);
    const roofSlab = new THREE.Mesh(roofSlabGeo, pristineWhiteMat);
    roofSlab.position.set(-2, 7.6, 1.5);
    roofSlab.castShadow = true;
    villaGroup.add(roofSlab);

    const roofGoldTrimGeo = new THREE.BoxGeometry(15.2, 0.12, 14.2);
    const roofGoldTrim = new THREE.Mesh(roofGoldTrimGeo, luxuryGoldMat);
    roofGoldTrim.position.set(-2, 7.85, 1.5);
    villaGroup.add(roofGoldTrim);

    // Louvers Accent
    const louverGroup = new THREE.Group();
    for (let i = 0; i < 9; i++) {
      const louverGeo = new THREE.BoxGeometry(0.12, 3.5, 0.6);
      const louverMat = i % 2 === 0 ? luxuryGoldMat : warmWoodMat;
      const louver = new THREE.Mesh(louverGeo, louverMat);
      louver.position.set(4.5 + i * 0.28, 5.5, 7.4);
      louverGroup.add(louver);
    }
    villaGroup.add(louverGroup);

    // Minimal Interior Elements
    const interiorSofaGeo = new THREE.BoxGeometry(4.5, 0.8, 1.8);
    const interiorSofa = new THREE.Mesh(interiorSofaGeo, warmInteriorMat);
    interiorSofa.position.set(0, 0.7, 1.5);
    villaGroup.add(interiorSofa);

    const interiorCoffeeTableGeo = new THREE.BoxGeometry(2.5, 0.4, 1.2);
    const interiorCoffeeTable = new THREE.Mesh(interiorCoffeeTableGeo, luxuryGoldMat);
    interiorCoffeeTable.position.set(0, 0.5, 3.2);
    villaGroup.add(interiorCoffeeTable);

    const lightStripGeo = new THREE.BoxGeometry(6, 0.08, 0.3);
    const lightStrip = new THREE.Mesh(lightStripGeo, warmInteriorMat);
    lightStrip.position.set(0, 3.65, 1.5);
    villaGroup.add(lightStrip);

    // Floating Staircase
    for (let s = 0; s < 7; s++) {
      const stairGeo = new THREE.BoxGeometry(1.6, 0.15, 0.55);
      const stair = new THREE.Mesh(stairGeo, pristineWhiteMat);
      stair.position.set(-4.5, 0.6 + s * 0.45, -1 + s * 0.5);
      villaGroup.add(stair);

      const stairGoldStripGeo = new THREE.BoxGeometry(1.62, 0.04, 0.06);
      const stairGoldStrip = new THREE.Mesh(stairGoldStripGeo, luxuryGoldMat);
      stairGoldStrip.position.set(-4.5, 0.68 + s * 0.45, -0.73 + s * 0.5);
      villaGroup.add(stairGoldStrip);
    }

    scene.add(villaGroup);

    // 7. Iconic Aurora Glowing Ring in Pure Royal Gold
    const auroraGroup = new THREE.Group();
    const ringCurve = new THREE.EllipseCurve(0, 0, 11.5, 9.0, 0, 2 * Math.PI, false, 0);
    const ringPoints = ringCurve.getPoints(120);
    const ringGeometry = new THREE.BufferGeometry().setFromPoints(
      ringPoints.map((p) => new THREE.Vector3(p.x, 0, p.y))
    );

    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      linewidth: 3,
      transparent: true,
      opacity: 0.95
    });

    const ringLine = new THREE.Line(ringGeometry, ringMaterial);
    ringLine.rotation.x = Math.PI / 4.5;
    ringLine.rotation.z = -Math.PI / 8;
    auroraGroup.add(ringLine);

    // Floating Royal Gold Light Orbs
    const orbGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xffe277,
      emissive: 0xdfba48,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.8
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orb.position.set(11.5, 0, 0);
    auroraGroup.add(orb);

    auroraGroup.position.set(-1, 5, 2);
    scene.add(auroraGroup);
    auroraRingRef.current = auroraGroup;

    // 8. Royal Gold & Diamond Floating Particle Field
    const particleCount = 380;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColorA = new THREE.Color('#d4af37');
    const goldColorB = new THREE.Color('#f3e5ab');
    const goldColorC = new THREE.Color('#c59b27');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = Math.random() * 22;
      positions[i3 + 2] = (Math.random() - 0.5) * 45;

      const mixedColor = goldColorA.clone().lerp(goldColorB, Math.random());
      if (Math.random() > 0.6) {
        mixedColor.lerp(goldColorC, 0.5);
      }
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.17,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 9. Resize Handling
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Subtle Mouse Parallax & Interactive Pointer Dragging
    const handlePointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON') return;
      isDragging.current = true;
      prevPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseTarget.current = { x: normX * 0.8, y: normY * 0.5 };

      if (isDragging.current) {
        const deltaX = (e.clientX - prevPointer.current.x) * 0.004;
        const deltaY = (e.clientY - prevPointer.current.y) * 0.003;
        dragTarget.current.x += deltaX;
        dragTarget.current.y = Math.max(-0.6, Math.min(0.6, dragTarget.current.y + deltaY));
        prevPointer.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // 11. Frame-Rate Independent Animation Loop (Smooth Exponential Damping)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05); // Clamp max delta
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mousePos.current.x = THREE.MathUtils.damp(mousePos.current.x, mouseTarget.current.x, 3.5, delta);
      mousePos.current.y = THREE.MathUtils.damp(mousePos.current.y, mouseTarget.current.y, 3.5, delta);

      // Smooth drag rotation damping
      dragRotation.current.x = THREE.MathUtils.damp(dragRotation.current.x, dragTarget.current.x, 4.0, delta);
      dragRotation.current.y = THREE.MathUtils.damp(dragRotation.current.y, dragTarget.current.y, 4.0, delta);

      // Animate Gold Aurora Ring smoothly
      if (auroraRingRef.current) {
        auroraRingRef.current.rotation.y = elapsedTime * 0.2;
        auroraRingRef.current.position.y = 5.2 + Math.sin(elapsedTime * 0.7) * 0.35;
      }

      // Animate Pool Water reflection smoothly
      if (poolWaterRef.current) {
        const poolMaterial = poolWaterRef.current.material as THREE.MeshStandardMaterial;
        poolMaterial.emissiveIntensity = 0.28 + Math.sin(elapsedTime * 1.8) * 0.08;
      }

      // Animate particles with floating breathing effect
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.008;
      }

      // Subtle Drone Breathing Float (adds cinematic realism without jarring movements)
      const subtleFloatY = Math.sin(elapsedTime * 0.5) * 0.12;
      const subtleFloatX = Math.cos(elapsedTime * 0.35) * 0.1;

      // Apply interactive drag rotation around lookAt point
      const computedTargetPos = targetCamPos.current.clone();
      const offsetFromTarget = computedTargetPos.clone().sub(targetLookAt.current);
      offsetFromTarget.applyAxisAngle(new THREE.Vector3(0, 1, 0), dragRotation.current.x);
      offsetFromTarget.y += dragRotation.current.y * 3;

      const finalDesiredPos = targetLookAt.current.clone().add(offsetFromTarget);
      finalDesiredPos.x += mousePos.current.x + subtleFloatX;
      finalDesiredPos.y += mousePos.current.y + subtleFloatY;

      // Butter-Smooth Exponential Camera Position & LookAt Damping
      currentCamPos.current.x = THREE.MathUtils.damp(currentCamPos.current.x, finalDesiredPos.x, 3.8, delta);
      currentCamPos.current.y = THREE.MathUtils.damp(currentCamPos.current.y, finalDesiredPos.y, 3.8, delta);
      currentCamPos.current.z = THREE.MathUtils.damp(currentCamPos.current.z, finalDesiredPos.z, 3.8, delta);

      currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, targetLookAt.current.x, 4.0, delta);
      currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, targetLookAt.current.y, 4.0, delta);
      currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, targetLookAt.current.z, 4.0, delta);

      if (cameraRef.current) {
        cameraRef.current.position.copy(currentCamPos.current);
        cameraRef.current.lookAt(currentLookAt.current);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, [camPathSpline, lookPathSpline]);

  // Update camera target along the continuous 3D Catmull-Rom Spline Curve!
  useEffect(() => {
    if (activePresetView) {
      if (activePresetView === 'exterior') {
        targetCamPos.current.set(16, 8.5, 22);
        targetLookAt.current.set(0, 3.2, 0);
      } else if (activePresetView === 'interior') {
        targetCamPos.current.set(0.6, 2.3, 5.5);
        targetLookAt.current.set(0, 2.0, 1.2);
      } else if (activePresetView === 'pool') {
        targetCamPos.current.set(8.5, 3.2, 11.5);
        targetLookAt.current.set(3, 1.2, 7.5);
      } else if (activePresetView === 'overview') {
        targetCamPos.current.set(20, 15, 25);
        targetLookAt.current.set(0, 3.8, 0);
      }
      return;
    }

    // Sample points continuously along the Hollywood spline curve!
    // No sudden bends or piecewise linear cuts.
    const p = Math.max(0, Math.min(1, scrollProgress));
    const smoothT = p * p * (3 - 2 * p); // Smoothstep easing for luxury organic motion

    const sampledPos = camPathSpline.getPointAt(smoothT);
    const sampledLook = lookPathSpline.getPointAt(smoothT);

    targetCamPos.current.copy(sampledPos);
    targetLookAt.current.copy(sampledLook);
  }, [scrollProgress, activePresetView, camPathSpline, lookPathSpline]);

  // Handle lighting mode changes
  const applyLightingMode = (mode: 'gold' | 'sunset' | 'daylight') => {
    setLightingMode(mode);
    if (!sceneRef.current || !dirLightRef.current || !ambientLightRef.current) return;

    if (mode === 'gold') {
      sceneRef.current.background = new THREE.Color('#faf7f2');
      if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color('#faf7f2');
      dirLightRef.current.color = new THREE.Color('#fff2d4');
      dirLightRef.current.intensity = 2.3;
      ambientLightRef.current.color = new THREE.Color('#fdf8ec');
      if (interiorLightRef.current) interiorLightRef.current.intensity = 4.2;
    } else if (mode === 'sunset') {
      sceneRef.current.background = new THREE.Color('#fcf3e8');
      if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color('#fcf3e8');
      dirLightRef.current.color = new THREE.Color('#f59e0b');
      dirLightRef.current.intensity = 2.6;
      ambientLightRef.current.color = new THREE.Color('#fce7d2');
      if (interiorLightRef.current) interiorLightRef.current.intensity = 4.5;
    } else if (mode === 'daylight') {
      sceneRef.current.background = new THREE.Color('#f8fafc');
      if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color('#f8fafc');
      dirLightRef.current.color = new THREE.Color('#ffffff');
      dirLightRef.current.intensity = 2.9;
      ambientLightRef.current.color = new THREE.Color('#f1f5f9');
      if (interiorLightRef.current) interiorLightRef.current.intensity = 2.0;
    }
  };

  if (!webGLSupported) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#faf8f5] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-block p-4 rounded-full border border-[#d4af37]/40 bg-white/80 mb-3 backdrop-blur-md shadow-lg">
            <span className="text-[#c59b27] text-xs font-semibold tracking-wider font-cinzel">
              AURORA 3D ARCHITECTURAL EXPERIENCE
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[100vh] overflow-hidden select-none">
      {/* Three.js Canvas Container - grab cursor for smooth interactive drag */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none" 
        title="برای چرخش دوربین در صحنه کلیک کرده و بکشید"
      />

      {/* Atmospheric Soft Light Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf8f5]/60 via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-aurora opacity-70" />

      {/* Hint for interaction */}
      <div className="absolute top-24 left-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#d4af37]/30 text-[11px] text-stone-500 shadow-xs pointer-events-none animate-in fade-in duration-700">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] animate-pulse" />
        <span>امکان چرخش ۳۶۰ درجه با درگ ماوس یا لمس</span>
      </div>

      {/* Interactive Camera Preset Switcher & Lighting Controls in bottom-right corner */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-2">
        <div className="glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs text-stone-700 border border-[#d4af37]/30 shadow-md">
          <span className="text-[11px] text-stone-500 ml-1">زاویه دوربین:</span>
          <button
            onClick={() => onPresetSelect && onPresetSelect('exterior')}
            className={`px-3 py-1 rounded-full transition-all duration-300 font-medium cursor-pointer ${
              activePresetView === 'exterior'
                ? 'gold-gradient-bg text-stone-950 shadow-sm font-semibold'
                : 'hover:text-[#c59b27] hover:bg-[#d4af37]/10'
            }`}
          >
            نمای بیرونی
          </button>
          <button
            onClick={() => onPresetSelect && onPresetSelect('interior')}
            className={`px-3 py-1 rounded-full transition-all duration-300 font-medium cursor-pointer ${
              activePresetView === 'interior'
                ? 'gold-gradient-bg text-stone-950 shadow-sm font-semibold'
                : 'hover:text-[#c59b27] hover:bg-[#d4af37]/10'
            }`}
          >
            فضای داخلی
          </button>
          <button
            onClick={() => onPresetSelect && onPresetSelect('pool')}
            className={`px-3 py-1 rounded-full transition-all duration-300 font-medium cursor-pointer ${
              activePresetView === 'pool'
                ? 'gold-gradient-bg text-stone-950 shadow-sm font-semibold'
                : 'hover:text-[#c59b27] hover:bg-[#d4af37]/10'
            }`}
          >
            استخر اینفینیتی
          </button>
          <button
            onClick={() => onPresetSelect && onPresetSelect('overview')}
            className={`px-3 py-1 rounded-full transition-all duration-300 font-medium cursor-pointer ${
              activePresetView === 'overview'
                ? 'gold-gradient-bg text-stone-950 shadow-sm font-semibold'
                : 'hover:text-[#c59b27] hover:bg-[#d4af37]/10'
            }`}
          >
            دید فراگیر
          </button>
        </div>

        {/* Lighting Selector */}
        <div className="glass-panel px-2.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs border border-[#d4af37]/30 shadow-md">
          <button
            title="نورپردازی طلایی آرورا (Gold Aurora)"
            onClick={() => applyLightingMode('gold')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              lightingMode === 'gold'
                ? 'ring-2 ring-[#c59b27] bg-[#fbf5d6] text-amber-700 shadow-sm'
                : 'text-stone-400 hover:text-[#c59b27]'
            }`}
          >
            ✨
          </button>
          <button
            title="نورپردازی غروب اشرافی (Royal Sunset)"
            onClick={() => applyLightingMode('sunset')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              lightingMode === 'sunset'
                ? 'ring-2 ring-amber-500 bg-amber-100 text-amber-800 shadow-sm'
                : 'text-stone-400 hover:text-amber-600'
            }`}
          >
            🌅
          </button>
          <button
            title="روز روشن مرمرین (White Marble Day)"
            onClick={() => applyLightingMode('daylight')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              lightingMode === 'daylight'
                ? 'ring-2 ring-sky-400 bg-sky-100 text-sky-800 shadow-sm'
                : 'text-stone-400 hover:text-sky-600'
            }`}
          >
            ☀️
          </button>
        </div>
      </div>
    </div>
  );
};
