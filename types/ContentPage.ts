export interface ContentPage {
  data?: ContentPageData;
}

export interface ContentPageData {
  contentPage?: ContentPageClass;
}

export interface ContentPageClass {
  pageTitle?: string;
  pageContent?: PageContent;
  featureImage?: Image | null;
}

export interface Image {
  url?: string;
  description?: string;
}

export interface PageContent {
  json?: JSON;
}

export interface JSON {
  nodeType?: string;
  data?: ContentData;
  content?: JSONContent[];
}

export interface JSONContent {
  nodeType?: string;
  content?: ContentContent[];
  data?: ContentData;
}

export interface ContentContent {
  nodeType?: string;
  value?: string;
  marks?: any[];
  data?: ContentData;
}

export interface ContentData {}
