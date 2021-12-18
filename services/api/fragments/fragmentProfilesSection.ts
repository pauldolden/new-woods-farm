import { fragmentSheepProfile } from "./fragmentSheepProfile";

export const fragmentProfilesSection = `
fragment sheepProfiles on MeetOurSheep {
    sectionTitle
    sectionText {
      json
    }
    sheepProfilesCollection {
      items {
        ...${fragmentSheepProfile}
      }
    }
  }`;
