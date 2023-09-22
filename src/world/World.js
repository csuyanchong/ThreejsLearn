import { loadBirdsAsync } from "./componets/birds/bird.js";
import { createCamera } from "./componets/camera.js";
import { createCircle } from "./componets/circle.js";
import { createCube } from "./componets/cube.js";
import { createLights } from "./componets/lights.js";
import { createScene } from "./componets/scene.js";
import { createSphere } from "./componets/sphere.js";
import { createSquare } from "./componets/square.js";
import { createTriangle } from "./componets/triangle.js";
import { Resizer } from "./system/Resizer.js";
import { createControl } from "./system/control.js";

import { createRenderer } from "./system/render.js";

let scene;
let camera;
let renderer;

class Wolrd {
   constructor(container) {
      scene = createScene();
      camera = createCamera();
      renderer = createRenderer();
      container.appendChild(renderer.domElement);

      // create control
      const control = createControl(camera, renderer.domElement);
      control.target.set(0, 0, 0);
      control.addEventListener('change', this.render);
      control.update();
      // const cube = createCube();
      // scene.add(cube[0]);
      // scene.add(cube[1]);

      const light = createLights();
      scene.add(light);
      // const square = createSquare();
      // scene.add(square);

      // const sphere = createSphere();
      // scene.add(sphere);

      // const triangle = createTriangle();
      // scene.add(triangle);

      // const circle = createCircle();
      // scene.add(circle);

      const resizer = new Resizer(container, camera, renderer, control);
   }

   async initAsync() {
      const bird = await loadBirdsAsync();
      console.log(bird);
      scene.add(bird);
   }

   render() {
      renderer.render(scene, camera);
   }
}

export { Wolrd };