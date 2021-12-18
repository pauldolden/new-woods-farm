import { ContactForm } from "../../types/ContactForm";
import { ContactPage } from "../../types/ContactPage";
import { fetchGraphQL } from "./config";
import { queryContactForm } from "./queries/queryContactForm";
import { queryContactPage } from "./queries/queryContactPage";

export const fetchContactForm = async (preview: boolean) => {
  const { data }: ContactForm = await fetchGraphQL(queryContactForm, preview);

  const { contactSection } = data;
  return contactSection;
};

export const fetchContactPageData = async (preview: boolean) => {
  const { data }: ContactPage = await fetchGraphQL(queryContactPage, preview);

  const { contactPage } = data;
  return contactPage;
};
