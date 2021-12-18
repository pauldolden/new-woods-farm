export interface ContentPageSlugs {
  data?: Data;
}

export interface Data {
  contentPageCollection?: ContentPageCollection;
}

export interface ContentPageCollection {
  items?: Item[];
}

export interface Item {
  pageTitle?: string;
  sys?: Sys;
}

export interface Sys {
  id: string;
}
