import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
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

// Sun
const textureLoader = new THREE.TextureLoader();

const texture1 = textureLoader.load("8k_sun.jpg");
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: texture1 });
const mesh = new THREE.Mesh(geometry, material);
mesh.name = "sun"
mesh.position.set(0, 0, 0);
group.add(mesh);

// Mercury
const texture3 = textureLoader.load("8k_mercury.jpg");
const geometry3 = new THREE.SphereGeometry(0.3, 32, 32);
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.name = "mercury"
mesh3.position.set(2, 0, 0);
group.add(mesh3);

// Venus
const texture4 = textureLoader.load("8k_venus_surface.jpg");
const geometry4 = new THREE.SphereGeometry(0.4, 32, 32);
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const mesh4 = new THREE.Mesh(geometry4, material4);
mesh4.name = "venus"
mesh4.position.set(2.7, 0, 0);
group.add(mesh4);

// Earth
const texture2 = textureLoader.load("8k_earth_daymap.jpg");
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.name = "earth"
mesh2.position.set(3, 0, 0);
group.add(mesh2);

// Mars
const texture5 = textureLoader.load("8k_mars.jpg");
const geometry5 = new THREE.SphereGeometry(0.4, 32, 32);
const material5 = new THREE.MeshBasicMaterial({ map: texture5 });
const mesh5 = new THREE.Mesh(geometry5, material5);
mesh5.name = "mars"
mesh5.position.set(3.5, 0, 0);
group.add(mesh5);

// Jupiter
const texture6 = textureLoader.load("8k_jupiter.jpg");
const geometry6 = new THREE.SphereGeometry(0.7, 32, 32);
const material6 = new THREE.MeshBasicMaterial({ map: texture6 });
const mesh6 = new THREE.Mesh(geometry6, material6);
mesh6.name = "jupiter"
mesh6.position.set(4.5, 0, 0);
group.add(mesh6);

// Saturn
const texture7 = textureLoader.load("8k_saturn.jpg");
const geometry7 = new THREE.SphereGeometry(0.6, 32, 32);
const material7 = new THREE.MeshBasicMaterial({ map: texture7 });
const mesh7 = new THREE.Mesh(geometry7, material7);
mesh7.name = "saturn"
mesh7.position.set(5.5, 0, 0);
group.add(mesh7);

// Uranus
const texture8 = textureLoader.load("2k_uranus.jpg");
const geometry8 = new THREE.SphereGeometry(0.5, 32, 32);
const material8 = new THREE.MeshBasicMaterial({ map: texture8 });
const mesh8 = new THREE.Mesh(geometry8, material8);
mesh8.name = "uranus"
mesh8.position.set(6.5, 0, 0);
group.add(mesh8);

// Neptune
const texture9 = textureLoader.load("2k_neptune.jpg");
const geometry9 = new THREE.SphereGeometry(0.5, 32, 32);
const material9 = new THREE.MeshBasicMaterial({ map: texture9 });
const mesh9 = new THREE.Mesh(geometry9, material9);
mesh9.name = "neptune"
mesh9.position.set(7.5, 0, 0);
group.add(mesh9);

camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

const orbitRadii = {
    mercury: 3,
    venus: 4.5,
    earth: 6,
    mars: 7.5,
    jupiter: 9,
    saturn: 11,
    uranus: 13,
    neptune: 15
};

let angle = 0;
function animate() {
    orbitControls.update();
    const sun = scene.getObjectByName("sun");
    const mercury = scene.getObjectByName("mercury");
    const venus = scene.getObjectByName("venus");
    const earth = scene.getObjectByName("earth");
    const mars = scene.getObjectByName("mars");
    const jupiter = scene.getObjectByName("jupiter");
    const saturn = scene.getObjectByName("saturn");
    const uranus = scene.getObjectByName("uranus");
    const neptune = scene.getObjectByName("neptune");

    if (sun && mercury && venus && earth && mars && jupiter && saturn && uranus && neptune) {
        angle += 0.01;
        mercury.position.set(Math.cos(angle * 2.2) * orbitRadii.mercury, 0, Math.sin(angle * 2.2) * orbitRadii.mercury);
        venus.position.set(Math.cos(angle * 2.0) * orbitRadii.venus, 0, Math.sin(angle * 2.0) * orbitRadii.venus);
        earth.position.set(Math.cos(angle * 1.8) * orbitRadii.earth, 0, Math.sin(angle * 1.8) * orbitRadii.earth);
        mars.position.set(Math.cos(angle * 1.6) * orbitRadii.mars, 0, Math.sin(angle * 1.6) * orbitRadii.mars);
        jupiter.position.set(Math.cos(angle * 0.8) * orbitRadii.jupiter, 0, Math.sin(angle * 0.8) * orbitRadii.jupiter);
        saturn.position.set(Math.cos(angle * 0.6) * orbitRadii.saturn, 0, Math.sin(angle * 0.6) * orbitRadii.saturn);
        uranus.position.set(Math.cos(angle * 0.4) * orbitRadii.uranus, 0, Math.sin(angle * 0.4) * orbitRadii.uranus);
        neptune.position.set(Math.cos(angle * 0.3) * orbitRadii.neptune, 0, Math.sin(angle * 0.3) * orbitRadii.neptune);

        sun.rotation.y += 0.003;
        earth.rotation.y += 0.01;
        mercury.rotation.y += 0.005;
        venus.rotation.y += 0.004;
        mars.rotation.y += 0.008;
        jupiter.rotation.y += 0.002;
        saturn.rotation.y += 0.002;
        uranus.rotation.y += 0.001;
        neptune.rotation.y += 0.001;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Function to create orbit rings
function createOrbit(radius) {
    const curve = new THREE.EllipseCurve(
        0, 0,                // center
        radius, radius,      // xRadius, yRadius
        0, 2 * Math.PI,      // startAngle, endAngle
        false,               // clockwise
        0                    // rotation
    );

    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0x888888 });
    const orbit = new THREE.LineLoop(geometry, material);
    orbit.rotation.x = Math.PI / 2; // rotate to XZ plane

    return orbit;
}

// Add orbits for all planets
scene.add(createOrbit(orbitRadii.mercury));
scene.add(createOrbit(orbitRadii.venus));
scene.add(createOrbit(orbitRadii.earth));
scene.add(createOrbit(orbitRadii.mars));
scene.add(createOrbit(orbitRadii.jupiter));
scene.add(createOrbit(orbitRadii.saturn));
scene.add(createOrbit(orbitRadii.uranus));
scene.add(createOrbit(orbitRadii.neptune));

animate();

//change background color