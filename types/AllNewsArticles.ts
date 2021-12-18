export interface AllNewsArticles {
  data?: AllNewsArticlesData;
}

export interface AllNewsArticlesData {
  newsArticleCollection?: NewsArticleCollection;
}

export interface NewsArticleCollection {
  items?: NewsArticleData[];
}

export interface NewsArticleData {
  sys?: Sys;
  title?: string;
  content?: DescriptionClass;
  previewImage?: Image | null;
  author?: Author;
  description?: DescriptionClass;
  contentfulMetadata?: ContentfulMetadata;
}

export interface Author {
  name?: string;
  title?: string;
  image?: Image | null;
}

export interface Image {
  url?: string;
  description?: string;
}

export interface DescriptionClass {
  json?: JSON;
}

export interface JSON {
  nodeType?: string;
  data?: ContentData;
  content?: JSONContent[];
}

export interface JSONContent {
  nodeType?: FluffyNodeType;
  content?: ContentContent[];
  data?: ContentData;
}

export interface ContentContent {
  nodeType?: PurpleNodeType;
  value?: string;
  marks?: any[];
  data?: ContentData;
}

export interface ContentData {}

export enum PurpleNodeType {
  Text = "text",
}

export enum FluffyNodeType {
  Paragraph = "paragraph",
}

export interface ContentfulMetadata {
  tags?: Tag[];
}

export interface Tag {
  name?: string;
}

export interface Sys {
  id?: string;
  firstPublishedAt?: Date;
}
