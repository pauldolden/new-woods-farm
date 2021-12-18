export const queryContactForm = `

query {
    contactSection(id: "4Jv90FwFkhWf4grq6wdqVn") {
      sectionTitle
      sectionText {
        json
      }
      contactInformation {
        ...contactInfo
      }
    }
  }
  
  fragment contactInfo on ContactInformation {
    phoneNumber
    emailAddress
  }
  `;
