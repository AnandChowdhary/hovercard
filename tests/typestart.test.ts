import TypeStart from "../src/typestart";

describe("TypeStart", () => {
  it("registers and emits events", () => {
    const events = new TypeStart();
    const handler = jest.fn();

    events.on("ready", handler);
    events.emitter.emit("ready", { ok: true });

    expect(handler).toHaveBeenCalledWith({ ok: true });
  });
});
