import { GLTFLoader } from "../../../../vender/three/addons/loader/GLTFLoader.js";
import { Vector3 } from "../../../../vender/three/build/three.module.js";
import { getMeshFromModel } from "./birdUtil.js";

async function loadBirdsAsync() {
   const loader = new GLTFLoader();
   let parrot = await loader.loadAsync("/assets/models/Parrot.glb");
   let parrotMesh = getMeshFromModel(parrot);
   parrotMesh.scale.set(0.01, 0.01, 0.01);

   console.log(parrotMesh);
   return parrotMesh;
}

export { loadBirdsAsync };