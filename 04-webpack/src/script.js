import "./style.css";
import * as THREE from "three";

//creating the scene
const scene = new THREE.Scene();
// creating the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// creating the material (color)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// creating the mesh
const mesh = new THREE.Mesh(geometry, material);

// adding the mesh to the scene
scene.add(mesh);

//Sizes
const sizes = {
  width: 800,
  height: 640,
};

// camera to have a point of view (field of view, aspect ratio, renderer ) usually his fov is of 35/45 75 is too big
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// X is on the right, Z is positive toward us, and y is positive when going up
camera.position.z = 3;
scene.add(camera);

// renderer many other types of renderers WebGL, SVG, CCS2 and CSS3D renderer.
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  //you can also remove the property name and just put canvas.
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
console.log(canvas);

renderer.render(scene, camera);
