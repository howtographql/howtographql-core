import React from "react";
import { MDXProvider } from "@mdx-js/tag";

const components = {
  //   h1: MyH1,
  //   p: MyParagraph
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
