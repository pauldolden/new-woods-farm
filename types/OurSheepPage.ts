export interface OurSheepPage {
  data?: OurSheepPageData;
}

export interface OurSheepPageData {
  ourSheepPage?: OurSheepPageClass;
}

export interface OurSheepPageClass {
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
