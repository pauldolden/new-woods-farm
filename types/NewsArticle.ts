export interface NewsArticle {
  data?: NewsArticleData;
}

export interface NewsArticleData {
  newsArticle?: NewsArticleClass;
}

export interface NewsArticleClass {
  title?: string;
  content?: DescriptionClass;
  previewImage?: Image | null;
  description?: DescriptionClass;
  author?: Author;
  sys?: Sys;
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
  data?: ContentData;
  content?: JSONContent[];
  nodeType?: string;
}

export interface JSONContent {
  data?: ContentData;
  content?: ContentContent[];
  nodeType?: string;
}

export interface ContentContent {
  data?: ContentData;
  marks?: any[];
  value?: string;
  nodeType?: string;
}

export interface ContentData {}

export interface ContentfulMetadata {
  tags?: any[];
}

export interface Sys {
  id?: string;
  firstPublishedAt?: Date;
}
