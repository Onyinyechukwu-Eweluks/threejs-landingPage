import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

// init

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 5;
camera.rotation.z = 1;

const scene = new THREE.Scene();

//light
const light = new THREE.AmbientLight(0xffffff, 2); // soft white light
scene.add(light);

//loader
const loader = new GLTFLoader();
loader.load("/models/drone/scene.gltf", (gltf) => {
  let model = gltf.scene;
  model.scale.set(0.45, 0.45, 0.45);
  gsap.to(camera.position, { z: 1, duration: 1, ease: "back.out(1.7)" });
  gsap.to(camera.rotation, { z: 0, duration: 1 });
  gsap.to(model.rotation, { x: 1, duration: 1, delay: 1 });
  gsap.to(model.rotation, { y: Math.PI * 1.75, duration: 2, delay: 1 });
  gsap.to(model.scale, { x: 0.25, y: 0.25, z: 0.25, duration: 1, delay: 1 });
  gsap.to(model.position, { x: 0.35, y: 0.3, duration: 1, delay: 1 });
  scene.add(model);
});

// const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
renderer.setClearColor(0x272727, 1);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// animation

export function animation() {
  //   mesh.rotation.x = time / 2000;
  //   mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
