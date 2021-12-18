import { AllSheepProfiles } from "../../types/AllSheepProfiles";
import { OurSheepPage } from "../../types/OurSheepPage";
import { fetchGraphQL } from "./config";
import { queryAllSheepProfiles } from "./queries/queryAllSheepProfiles";
import { queryOurSheepPage } from "./queries/queryOurSheepPage";

export const fetchAllSheepProfiles = async (preview: boolean) => {
  const { data }: AllSheepProfiles = await fetchGraphQL(
    queryAllSheepProfiles,
    preview
  );

  const { sheepProfileCollection } = data;
  return sheepProfileCollection;
};

export const fetchOurSheepPageData = async (preview: boolean) => {
  const { data }: OurSheepPage = await fetchGraphQL(queryOurSheepPage, preview);

  const { ourSheepPage } = data;
  return ourSheepPage;
};
