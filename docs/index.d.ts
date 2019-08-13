import TypeStart from "./typestart";
import Popper from "popper.js";
import "./styles/index.scss";
declare global {
    interface Window {
        Hovercard: typeof Hovercard;
    }
}
export default class Hovercard extends TypeStart {
    popperInstance?: Popper;
    popperElement: HTMLDivElement;
    popperArrow: HTMLDivElement;
    elements?: NodeListOf<HTMLElement>;
    isVisible: boolean;
    constructor(el?: string);
    private repositionPopper;
    start(): void;
    private mouseOver;
    private mouseOut;
}
