export interface NewsArticleIDs {
  data?: Data;
}

export interface Data {
  newsArticleCollection?: NewsArticleCollection;
}

export interface NewsArticleCollection {
  items?: Item[];
}

export interface Item {
  sys?: Sys;
}

export interface Sys {
  id?: string;
}
