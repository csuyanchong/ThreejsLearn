import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "https://cdn.skypack.dev/three@0.132.2";

const container = document.querySelector('#scene_container');

const scene = new Scene();
scene.background = new Color('skyblue');

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);

const render = new WebGLRenderer();
render.setSize(container.clientWidth, container.clientHeight);
render.setPixelRatio(window.devicePixelRatio);

container.append(render.domElement);

render.render(scene, camera);