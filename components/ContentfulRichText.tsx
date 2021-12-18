import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

interface Props {
  data: any;
}

export const ContentfulRichText = ({ data }: Props) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>;

  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return <>{documentToReactComponents(data, options)}</>;
};
