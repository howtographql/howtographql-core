// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const { getTutorialPath } = require("./src/utils/getTutorialPath.js");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postLayout = require.resolve(`./src/components/postLayout.tsx`);

  const { data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).catch(error => console.error(error));
  data.allMdx.edges.forEach(({ node }) => {
    const tutorialPath = getTutorialPath(node.fileAbsolutePath);
    createPage({
      path: tutorialPath,
      component: postLayout, // node.fileAbsolutePath,
      context: {
        pagePath: node.frontmatter.path
      }
    });
  });
};
