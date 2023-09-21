import { Mesh, MeshBasicMaterial, SphereGeometry } from "../../../vender/three/build/three.module.js";

function createSphere() {
   let geometry = new SphereGeometry(1, 32, 16);
   let material = new MeshBasicMaterial({ color: 0xffff00 });

   let sphereMesh = new Mesh(geometry, material);

   return sphereMesh;
}

export { createSphere };