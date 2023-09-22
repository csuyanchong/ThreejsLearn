import { OrbitControls } from "../../../vender/three/addons/controls/OrbitControls.js";

function createControl(camera, canvas) {
   let control = new OrbitControls(camera, canvas);
   // control.enableDamping = true;

   // control.tick = () => controls.update();
   return control;
}

export { createControl };