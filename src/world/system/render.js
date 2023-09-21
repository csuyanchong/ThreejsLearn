import { WebGLRenderer } from "../../../vender/three/build/three.module.js";

function createRenderer() {
   const renderer = new WebGLRenderer();

   return renderer;
}

export { createRenderer };