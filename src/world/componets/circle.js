import { CircleGeometry, Mesh, MeshBasicMaterial } from "../../../vender/three/build/three.module.js";

/**
 * 创建圆环。
 * @returns 
 */
function createCircle() {
   let geometry = new CircleGeometry(1);
   let material = new MeshBasicMaterial({ color: 'blue' });

   let circleMesh = new Mesh(geometry, material);
   return circleMesh;
}

export { createCircle };