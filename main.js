import { Wolrd } from "./src/world/World.js";

/**
 * 系统入口。
 */
function main() {
    const container = document.querySelector("#scene_container");

    const world = new Wolrd(container);

    world.render();
}

main();