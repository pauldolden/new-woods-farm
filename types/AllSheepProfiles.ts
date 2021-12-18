export interface AllSheepProfiles {
  data?: AllSheepProfilesData;
}

export interface AllSheepProfilesData {
  sheepProfileCollection?: SheepProfileCollection;
}

export interface SheepProfileCollection {
  items?: SheepProfileData[];
}

export interface SheepProfileData {
  name?: string;
  dateOfBirth?: Date;
  description?: Description;
  image?: Image | null;
}

export interface Description {
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

export interface Image {
  url?: string;
  description?: string;
}
