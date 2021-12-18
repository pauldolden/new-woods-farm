export interface AllImages {
  data?: Data;
}

export interface Data {
  assetCollection?: AssetCollection;
}

export interface AssetCollection {
  items?: Item[];
}

export interface Item {
  url?: string;
  description?: string;
}
