export interface HomePage {
  data: HomePageData;
}

export interface HomePageData {
  homePage: HomePageClass;
}

export interface HomePageClass {
  pageTitle: string;
  bannerSection: BannerSection;
  sheepProfilesSection: SheepProfilesSection;
  newsSection: NewsSection;
  faqSection: FAQSection;
  contactSection: ContactSection;
}

export interface BannerSection {
  titleHeader: string;
  titleSubheader: string;
  bodyContent: BodyContent;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  bannerImage: Image | null;
}

export interface Image {
  description: string;
  url: string;
}

export interface BodyContent {
  json: JSON;
}

export interface JSON {
  data: ContentData;
  content: JSONContent[];
  nodeType: JSONNodeType;
}

export interface JSONContent {
  data: ContentData;
  content: ContentContent[];
  nodeType: FluffyNodeType;
}

export interface ContentContent {
  data: ContentData;
  marks: any[];
  value: string;
  nodeType: PurpleNodeType;
}

export interface ContentData {}

export enum PurpleNodeType {
  Text = "text",
}

export enum FluffyNodeType {
  Paragraph = "paragraph",
}

export enum JSONNodeType {
  Document = "document",
}

export interface ContactSection {
  sectionTitle: string;
  sectionText: BodyContent;
  contactInformation: ContactInformation;
}

export interface ContactInformation {
  phoneNumber: string;
  emailAddress: string;
}

export interface FAQSection {
  sectionTitle: string;
  sectionText: BodyContent;
  faQsCollection: FaQsCollection;
}

export interface FaQsCollection {
  items: FaQsCollectionItem[];
}

export interface FaQsCollectionItem {
  question: string;
  answer: BodyContent;
}

export interface SCollection {
  items: Item[];
}

export interface Item {
  title?: string;
  content?: BodyContent;
  previewImage?: Image | null;
  author?: Author | null;
  sys?: Sys;
  contentfulMetadata?: ContentfulMetadata;
  name?: string;
  dateOfBirth?: Date;
  description?: BodyContent;
  image?: Image | null;
  question?: string;
  answer?: BodyContent;
}

export interface Author {
  name: string;
  title: string;
  image: Image | null;
}

export interface ContentfulMetadata {
  tags: any[];
}

export interface Sys {
  firstPublishedAt: Date;
  id: string;
}

export interface NewsSection {
  sectionHeader: string;
  sectionText: BodyContent;
  latestPostsCollection: SCollection;
}

export interface SheepProfilesSection {
  sectionTitle: string;
  sectionText: BodyContent;
  sheepProfilesCollection: SCollection;
}
