import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "../../../vender/three/build/three.module.js";

function createCube() {
   const geometry = new BoxGeometry(2, 2, 2);

   // const material = new MeshBasicMaterial();
   const spec = {
      color: 'purple',
   };

   const material = new MeshStandardMaterial(spec);

   const cube1 = new Mesh(geometry, material);
   cube1.position.set(-2.0, 0, 0);
   cube1.rotation.set(-0.5, -0.1, 0.8);

   const cube2 = new Mesh(geometry, material);
   cube2.position.set(2.0, 0, 0);
   cube2.rotation.set(-0.2, 0.3, 0.6);

   return [cube1, cube2];
}

export { createCube };