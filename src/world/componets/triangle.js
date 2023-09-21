import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, Vector3 } from "../../../vender/three/build/three.module.js";

function createTriangle() {
   let geometry = new BufferGeometry();
   const vertices = new Float32Array([
      -2.0, 0, 0,
      2.0, 0, 0,
      0, 2.0, 0,
   ]);

   const indices = [
      0, 1, 2
   ];
   geometry.setIndex(indices);
   geometry.setAttribute('position', new BufferAttribute(vertices, 3));

   let material = new MeshBasicMaterial({ color: 0x00ff00 });

   let triMesh = new Mesh(geometry, material);
   return triMesh;
}

export { createTriangle };