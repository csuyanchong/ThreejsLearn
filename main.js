import { Wolrd } from "./src/world/World.js";

main();

/**
 * 系统入口。
 */
function main() {
    const button_render = document.querySelector(".button_render");
    button_render.addEventListener('click', beginRender);
}

/**
 * 渲染场景。
 */
function beginRender() {
    const container = document.querySelector("#scene_container");

    const world = new Wolrd(container);

    world.render();
}