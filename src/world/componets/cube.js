import { BoxGeometry, Mesh, MeshBasicMaterial } from "../../../vender/three/build/three.module.js";

function createCube() {
   const geometry = new BoxGeometry(2, 2, 2);

   const material = new MeshBasicMaterial();

   const cube1 = new Mesh(geometry, material);
   cube1.position.set(-2.0, 0, 0);

   const cube2 = new Mesh(geometry, material);
   cube2.position.set(2.0, 0, 0);
   return [cube1, cube2];
}

export { createCube };