import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from "../../../vender/three/build/three.module.js";

function createSquare() {
   const geometry = new BufferGeometry();
   const vertices = new Float32Array([
      -1.0, -1.0, 1.0, // v0
      1.0, -1.0, 1.0, // v1
      1.0, 1.0, 1.0, // v2

      1.0, 1.0, 1.0, // v3
      -1.0, 1.0, 1.0, // v4
      -1.0, -1.0, 1.0  // v5
   ]);
   geometry.setAttribute('position', new BufferAttribute(vertices, 3));
   const material = new MeshBasicMaterial({ color: 0xffffff });
   const squareMesh = new Mesh(geometry, material);
   return squareMesh;
}

export { createSquare };