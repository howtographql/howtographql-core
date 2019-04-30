import * as React from "react";
import { RouterProps } from "@reach/router";
import { PostQueryData } from "../../interfaces/PostQuery.interface";
import Layout from "../layout";
import { MDXRenderer } from "gatsby-mdx";
import { graphql } from "gatsby";

type TutorialLayoutProps = PostQueryData & RouterProps;

const TutorialLayout: React.FunctionComponent<TutorialLayoutProps> = ({
  data,
  ...props
}) => {
  if (!data) {
    return null;
  }

  const { pageTitle, date } = data.mdx.frontmatter;
  const { location } = props;

  return (
    <Layout location={location}>
      <h1>{pageTitle}</h1>
      <em>{date}</em>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </Layout>
  );
};

export default TutorialLayout;

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        path
        pageTitle
      }
    }
  }
`;
