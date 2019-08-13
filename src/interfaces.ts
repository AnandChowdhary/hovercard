export interface Settings {
  selector?: string;
  template?: (result?: TextResult) => string;
  wikipediaLanguage?: string;
  noCache?: boolean;
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
