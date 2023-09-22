class Resizer {
   constructor(container, camera, renderer, control) {
      camera.aspect = container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);

      renderer.setPixelRatio(window.devicePixelRatio);

      control.update();
   }
}

export { Resizer };