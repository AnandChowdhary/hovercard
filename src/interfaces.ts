export interface Settings {
  selector?: string;
  template?: string;
  wikipediaLanguage?: string;
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
