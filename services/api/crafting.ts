import { CraftingPage } from "../../types/CraftingPage";
import { fetchGraphQL } from "./config";
import { queryCraftingPage } from "./queries/queryCraftingPage";

export const fetchCraftingPageData = async (preview: boolean) => {
  const { data }: CraftingPage = await fetchGraphQL(queryCraftingPage, preview);

  const { craftingPage } = data;
  return craftingPage;
};
