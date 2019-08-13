import mitt from "mitt";

export default class TypeStart {
  emitter: mitt.Emitter;
  constructor() {
    this.emitter = new mitt();
  }
  on(type: string, handler: mitt.Handler) {
    return this.emitter.on(type, handler);
  }
  off(type: string, handler: mitt.Handler) {
    return this.emitter.off(type, handler);
  }
}
