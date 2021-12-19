import { AllShowResults } from "../../types/AllShowResults";
import { fetchGraphQL } from "./config";
import { queryAllShowResults } from "./queries/queryAllShowResults";

export const fetchAllShowResults = async (preview: boolean) => {
  const { data }: AllShowResults = await fetchGraphQL(
    queryAllShowResults,
    preview
  );

  const { showResultCollection } = data;
  return showResultCollection;
};
