// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const { getTutorialPath } = require('./src/utils/getTutorialPath.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
      component: node.fileAbsolutePath,
      context: {
        pagePath: node.frontmatter.path,
      },
    });
  });
};
