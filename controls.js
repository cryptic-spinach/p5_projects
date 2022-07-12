import { palette } from "./configs.js";

export function controls_init() {
    let gui = new dat.GUI();
    gui.width = 300;

    gui.addColor(palette, "backgroundFill").name("Background");
}
