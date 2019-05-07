import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import { ApolloProvider } from "react-apollo";

import { client } from "./src/Apollo";

import { Code } from "./src/components/code";

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  }
};
export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ApolloProvider>
  );
};
