export interface NewsPage {
  data?: NewsPageData;
}

export interface NewsPageData {
  newsScreen?: NewsScreen;
}

export interface NewsScreen {
  pageTitle?: string;
  pageContent?: PageContent;
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
