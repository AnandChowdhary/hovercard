import TypeStart from "./typestart";
import "./styles/index.scss";
declare global {
    interface Window {
        Hovercard: typeof Hovercard;
    }
}
export default class Hovercard extends TypeStart {
    value: string;
    constructor(el?: string);
}
