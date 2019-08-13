export interface Settings {
  selector?: string;
  template?: (result?: TextResult) => string;
  wikipediaLanguage?: string;
  noCache?: boolean;
  getFetchEndpoint?: (word: string) => string;
  fetchConfig?: any;
  storage?: {
    getItem(key: string): string;
    setItem(key: string, value: string): string;
    [index: string]: any;
  };
  getData?: (word: string) => Promise<any>;
  getHeading?: (data: any) => string;
  getImage?: (data: any) => string;
  getBody?: (data: any) => string;
}

export interface TextResult {
  heading: string;
  body: string;
  image?: string;
}

export enum Events {
  CREATED = "created",
  REMOVED_ELEMENT = "removed-element",
  SHOW = "show",
  HIDE = "hide",
  UPDATE = "update"
}
