export interface ContactForm {
  data?: ContactFormData;
}

export interface ContactFormData {
  contactSection?: ContactSection;
}

export interface ContactSection {
  sectionTitle?: string;
  sectionText?: SectionText;
  contactInformation?: ContactInformation;
}

export interface ContactInformation {
  phoneNumber?: string;
  emailAddress?: string;
}

export interface SectionText {
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
