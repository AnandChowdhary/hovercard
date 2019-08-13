import TypeStart from "./typestart";
import { random } from "./random";
import "./styles/index.scss";

declare global {
  interface Window {
    LibraryName: typeof LibraryName;
  }
}

export default class LibraryName extends TypeStart {
  value: string;
  constructor(el?: string) {
    super();
    this.value = random();
    const valueElement: HTMLElement | null = document.querySelector(
      el || "strong"
    );
    if (valueElement) valueElement.innerHTML = this.value;
    console.log("The random value is", this.value);
  }
}

window.LibraryName = LibraryName;
