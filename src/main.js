import { toggleElement } from "./util/documentUtil.js";
import { Wolrd } from "./world/World.js";

let button_render = document.querySelector(".button_render");
button_render.addEventListener('click', mainAsync);

let button_back = document.querySelector(".button_back");
button_back.addEventListener('click', backHome);

/**
 * 系统入口。
 */
async function mainAsync() {
    // 隐藏渲染按钮，显示返回按钮
    toggleElement(button_render, false);
    toggleElement(button_back, true);

    await beginRenderAsync();
}

/**
 * 渲染场景。
 */
async function beginRenderAsync() {
    const container = document.querySelector("#scene_container");

    const world = new Wolrd(container);

    await world.initAsync();

    world.render();
}

/**
 * 返回首页。
 */
function backHome() {
    toggleElement(button_render, true);
    toggleElement(button_back, false);
    // TODO... 清除3d画布
}