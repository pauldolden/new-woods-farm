import { HomePage } from "../../types/HomePage";
import { fetchGraphQL } from "./config";
import { queryHomePage } from "./queries/queryHomePage";

export const fetchHomePage = async (preview: boolean) => {
  const { data }: HomePage = await fetchGraphQL(queryHomePage, preview);

  const { homePage } = data;
  return homePage;
};
