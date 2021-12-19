export interface AllShowResults {
  data?: Data;
}

export interface Data {
  showResultCollection?: ShowResultCollection;
}

export interface ShowResultCollection {
  items?: Item[];
}

export interface Item {
  sheepName?: string;
  category?: string;
  showName?: string;
  date?: Date;
  place?: number;
}
