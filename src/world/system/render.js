import { WebGLRenderer } from "../../../vender/three/build/three.module.js";

function createRenderer() {
   const renderer = new WebGLRenderer();

   renderer.useLegacyLights = false;

   return renderer;
}

export { createRenderer };