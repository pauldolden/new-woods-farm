import { fragmentFaq } from "./fragmentFaq";

export const fragmentFaqSection = `
fragment faqs on HomePageFaQs {
    sectionTitle
    sectionText {
      json
    }
    faQsCollection {
      items {
        ...${fragmentFaq}
      }
  }
  }

`;
