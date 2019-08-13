import TypeStart from "./typestart";
import Popper from "popper.js";
import "./styles/index.scss";
import { Settings } from "./interfaces";
declare global {
    interface Window {
        Hovercard: typeof Hovercard;
    }
}
export default class Hovercard extends TypeStart {
    popperInstance?: Popper;
    popperElement: HTMLDivElement;
    elements?: HTMLElement[];
    isVisible: boolean;
    isLoading: boolean;
    settings: Settings;
    constructor(settings?: Settings);
    private repositionPopper;
    start(): void;
    private removeHoverCardElement;
    private mouseOver;
    private mouseOut;
    private getData;
}
