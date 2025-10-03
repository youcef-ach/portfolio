import { useEffect, useRef } from "react";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function CuteModel() {
  const container = useRef(null),
    sceneRef = useRef(null),
    rendererRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log("updated from observer");
        if (rendererRef.current) {
          console.log("inside");
          rendererRef.current.setSize(
            entry.contentRect.width,
            entry.contentRect.height
          );
        }
      }
    });
    observer.observe(container.current);

    const scene = new Three.Scene();
    scene.background = new Three.Color(0xc8d751);
    sceneRef.current = scene;
    const camera = new Three.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new Three.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    renderer.outputColorSpace = Three.SRGBColorSpace;
    renderer.toneMapping = Three.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setPixelRatio(window.devicePixelRatio);
    const ambient = new Three.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const directional = new Three.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 10, 7.5);
    scene.add(directional);
    rendererRef.current = renderer;
    renderer.setSize(300, 300);
    container.current.appendChild(renderer.domElement);
    camera.position.set(0, 2.5, 2.7);

    const loader = new GLTFLoader();
    loader.load(
      "./models/cute1.glb",
      (gltf) => {
        const gltfScene = gltf.scene;
        gltfScene.rotation.y = -0.5;
        scene.add(gltfScene);
      },
      undefined,
      (err) => console.log(err)
    );

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    return () => observer.disconnect();
  }, []);

  return <div ref={container} className="modelContainer"></div>;
}

export default CuteModel;
