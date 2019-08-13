export interface Settings {
    selector?: string;
    template?: string;
    wikipediaLanguage?: string;
    getData?: (word: string) => Promise<any>;
    getHeading?: (data: any) => string;
    getBody?: (data: any) => string;
}
