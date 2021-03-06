import React from "react";
import NextHead from "next/head";

interface Props {}

export const Head = (props: Props) => {
  return (
    <NextHead>
      <title>New Woods Farm</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="New Woods Farm Premium Quality Ryelands"
      />
    </NextHead>
  );
};
