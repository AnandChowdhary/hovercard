import mitt from "mitt";
export default class TypeStart {
    emitter: mitt.Emitter;
    constructor();
    on(type: string, handler: mitt.Handler): void;
    off(type: string, handler: mitt.Handler): void;
}
