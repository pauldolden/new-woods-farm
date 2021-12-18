export const fragmentSheepProfile = `
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
  }`;
