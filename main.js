import * as THREE from "three";
import {PLYLoader} from "three/examples/jsm/loaders/PLYLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

const orbitControls = new OrbitControls(camera, renderer.domElement);
scene.add(orbitControls)


//const plyLoader1 = new PLYLoader();
// plyLoader1.load("sphere.ply", (geometry) => {
//     const material = new THREE.MeshBasicMaterial({color: "orange", map: texture});
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.name = "sphere1"
//     scene.add(mesh);
//     console.log(scene)
// })

// const plyLoader2 = new PLYLoader();
// plyLoader2.load("sphere.ply", (geometry) => {
//     const material = new THREE.MeshBasicMaterial({color: "blue", map: texture2});
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.name = "sphere2"
//     mesh.position.set(2, 0, 0);
//     scene.add(mesh);
//     console.log(scene)
// })

const group = new THREE.Group();
scene.add(group);

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load("8k_sun.jpg");
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({map: texture1});
const mesh = new THREE.Mesh(geometry, material);
mesh.name = "sphere1"
group.add(mesh);

const texture2 = textureLoader.load("8k_earth_daymap.jpg");
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({map: texture2});
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.name = "sphere2"
mesh2.position.set(3, 0, 0);
group.add(mesh2);



camera.position.z = 5;
let angle = 0;
function animate() {
    orbitControls.update();
    const sphere1 = scene.getObjectByName("sphere1");
    const sphere2 = scene.getObjectByName("sphere2");
    if (sphere1 && sphere2) {
        angle += 0.01; 
        const radius = 2.2; 
        sphere2.position.x = sphere1.position.x + Math.cos(angle) * radius;
        sphere2.position.z = sphere1.position.z + Math.sin(angle) * radius;
        sphere1.rotation.y += 0.01;
        sphere2.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
