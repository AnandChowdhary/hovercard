declare module "wiki-article-name-encoding" {
  export function encode(name: string, fileSafe?: boolean): string;
  export function decode(slug: string): string;
}
