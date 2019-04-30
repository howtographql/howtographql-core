import { Link } from "gatsby";
import * as React from "react";
import { styled } from "../styles";
import { useAllTutorialQuery } from "../hooks/useAllTutorialQuery";
import { getTutorialSlug } from "../utils/getTutorialSlug";

const Post = styled.article`
  box-shadow: 0 0.3rem 1rem rgba(25, 17, 34, 0.05);
  padding: 0.5rem;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
  }
`;

const ReadMoreLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`;

const Listing = () => {
  const { allMdx } = useAllTutorialQuery();

  return (
    <>
      {allMdx &&
        allMdx.edges &&
        allMdx.edges.map(({ node }) => {
          const fileAbsolutePath = node.fileAbsolutePath;
          const { pageTitle } = node.frontmatter!;
          return (
            <Post key={node.id}>
              <Link to={getTutorialSlug(fileAbsolutePath)}>
                <h2>{pageTitle}</h2>
              </Link>
              <p>{node.excerpt}</p>
              <ReadMoreLink to={getTutorialSlug(fileAbsolutePath)}>
                Read More
              </ReadMoreLink>
            </Post>
          );
        })}
    </>
  );
};

export default Listing;
