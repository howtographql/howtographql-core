import * as React from 'react';
import { RouterProps } from '@reach/router';
import { PostQueryData } from '../interfaces/PostQuery.interface';
import Layout from './layout';
import { MDXRenderer } from "gatsby-mdx";
import { graphql } from "gatsby";

type PostLayoutProps = PostQueryData & RouterProps;

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({
  data,
  ...props
}) => {
  if (!data) {
    return null
  }

  const { title, date } = data.mdx.frontmatter;
  const { location } = props;

  return (
    <Layout location={location}>
      <h1>{title}</h1>
      <em>{date}</em>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </Layout>
  );
};

export default PostLayout;

export const pageQuery = graphql`
  query MDXQuery($pagePath: String!) {
    mdx(frontmatter: { path: { eq: $pagePath } }) {
      id
      code {
        body
      }
      frontmatter {
        path
        title
      }
    }
  }
`;
