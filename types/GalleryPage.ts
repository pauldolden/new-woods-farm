export interface GalleryPage {
  data?: GalleryPageData;
}

export interface GalleryPageData {
  galleryPage?: GalleryPageClass;
}

export interface GalleryPageClass {
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
