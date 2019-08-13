import TypeStart from "./typestart";
import "./styles/index.scss";
declare global {
    interface Window {
        LibraryName: typeof LibraryName;
    }
}
export default class LibraryName extends TypeStart {
    value: string;
    constructor(el?: string);
}
