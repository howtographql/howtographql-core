// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const {
  getTutorialSlug,
  getTutorialOverviewSlug
} = require("./src/utils/getTutorialSlug.js");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const TutorialLayout = require.resolve(
    `./src/components/templates/Tutorial.tsx`
  );

  const { data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              id
              path
              title
            }
          }
        }
      }
    }
  `).catch(error => console.error(error));

  let overviewpages = [];
  data.allMdx.edges.forEach(({ node }) => {
    const tutorialPath = getTutorialSlug(node.fileAbsolutePath);
    const overviewPageSlug = getTutorialOverviewSlug(node.fileAbsolutePath);
    createPage({
      path: tutorialPath,
      component: TutorialLayout, // node.fileAbsolutePath,
      context: {
        id: node.frontmatter.id
      }
    });

    overviewpages = overviewpages
      .filter(p => p !== overviewPageSlug)
      .concat([overviewPageSlug]);
  });

  const overviewTemplate = require.resolve(
    "./src/components/templates/TutorialOverview.tsx"
  );

  //create tutorial overview pages
  overviewpages.forEach(path => {
    createPage({
      path: path,
      component: overviewTemplate,
      context: {
        pagePath: path,
        folderRegex: `/(${path})/`
      }
    });
  });
};
