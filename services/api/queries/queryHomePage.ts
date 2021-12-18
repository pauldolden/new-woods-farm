export const queryHomePage = `query {
    homePage(id: "24YkB9Ee0h091kXRb76gp4") {
      pageTitle
      bannerSection {
        ...banner
      }
      sheepProfilesSection {
        ...sheepProfiles
      }
      newsSection {
        ...news
      }
      faqSection {
        ...faqs
      }
      contactSection {
        ...contactSection
      }
    }
  }
  
  fragment banner on HomePageBanner {
    titleHeader
    titleSubheader
    bodyContent {
      json
    }
    button1Text
    button1Link
    button2Text
    button2Link
    bannerImage {
      description
      url
    }
  }
  
  fragment sheepProfiles on MeetOurSheep {
    sectionTitle
    sectionText {
      json
    }
    sheepProfilesCollection {
      items {
        ...sheepProfile
      }
    }
  }
  
  fragment sheepProfile on SheepProfile {
    name
    dateOfBirth
    description {
      json
    }
    image {
      url
      description
    }
  }
  
  fragment news on HomePageNews {
    sectionHeader
    sectionText {
      json
    }
    latestPostsCollection {
      items {
        ...latestPost
      }
    }
  }
  
  fragment latestPost on NewsArticle {
    title
    content {
      json
    }
    previewImage {
      description
      url
    }
    author {
      ...postedBy
    }
    sys {
        id
        firstPublishedAt
    }
    contentfulMetadata {
      tags {
        name
      }
    }
  }
  
  fragment postedBy on Author {
    name
    title
    image {
      url
      description
    }
  }
  
  fragment faqs on HomePageFaQs {
    sectionTitle
    sectionText {
      json
    }
    faQsCollection {
      items {
        ...faq
      }
    }
  }
  
  fragment faq on Faq {
    question
    answer {
      json
    }
  }
  
  fragment contactSection on ContactSection {
    sectionTitle
    sectionText {
      json
    }
    contactInformation {
      ...contact
    }
  }
  
  fragment contact on ContactInformation {
    phoneNumber
    emailAddress
  }
  `;
