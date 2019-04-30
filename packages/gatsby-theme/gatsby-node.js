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
            id
            fileAbsolutePath
            frontmatter {
              id
              path
              title
              tutorialTitle
            }
          }
        }
      }
    }
  `).catch(error => console.error(error));

  data.allMdx.edges.forEach(({ node }) => {
    const tutorialPath = getTutorialSlug(node.fileAbsolutePath);
    const overviewPageSlug = getTutorialOverviewSlug(node.fileAbsolutePath);
    const overviewTemplate = require.resolve(
      "./src/components/templates/TutorialOverview.tsx"
    );

    if (node.frontmatter.tutorialTitle) {
      return createPage({
        path: overviewPageSlug,
        component: overviewTemplate,
        context: {
          id: node.id,
          folderRegex: `/(${overviewPageSlug})/`
        }
      });
    }
    createPage({
      path: tutorialPath,
      component: TutorialLayout, // node.fileAbsolutePath,
      context: {
        id: node.id
      }
    });
  });
};

//   overviewpages = overviewpages
//     .filter(p => p !== overviewPageSlug)
//     .concat([overviewPageSlug]);
// });

// //create tutorial overview pages
// overviewpages.forEach(path => {
//   createPage({
//     path: path,
//     component: overviewTemplate,
//     context: {
//       pagePath: path,
//       folderRegex: `/(${path})/`
//     }
//   });
// });
