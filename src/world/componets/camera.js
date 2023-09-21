import { PerspectiveCamera } from "../../../vender/three/build/three.module.js";

function createCamera() {
   const camera = new PerspectiveCamera(35, 1, 0.1, 100);

   camera.position.set(0, 0, 10);

   return camera;
}

export { createCamera };