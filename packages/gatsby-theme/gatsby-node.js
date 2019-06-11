// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const {
  getTutorialSlug,
  getTutorialOverviewSlug,
} = require('./src/utils/getTutorialSlug.js');

const { createApolloFetch } = require('apollo-fetch');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const TutorialLayout = require.resolve(
    `./src/components/templates/Tutorial.tsx`,
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
      './src/components/templates/TutorialOverview.tsx',
    );

    //TODO: find a better way to ID posts & overviews Also a better way to query for them
    if (node.frontmatter.tutorialTitle) {
      //counts the number of chapters in each tutorial by counting how many files
      //there are that contain the overviewpage slug. Subtract one for the overview page.
      const numberofChapters =
        data.allMdx.edges.filter(chapterNode => {
          return chapterNode.node.fileAbsolutePath.includes(
            `${overviewPageSlug}/`,
          );
        }).length - 1;

      const variables = {
        gatsbyID: node.frontmatter.id,
        name: node.frontmatter.tutorialTitle,
        numberofChapters: numberofChapters,
      };
      createPrismaNodes(variables);

      return createPage({
        path: overviewPageSlug,
        component: overviewTemplate,
        context: {
          id: node.id,
          folderRegex: `/(${overviewPageSlug})/`,
        },
      });
    }
    createPage({
      path: tutorialPath,
      component: TutorialLayout, // node.fileAbsolutePath,
      context: {
        id: node.id,
        folderRegex: `/(${overviewPageSlug})/`,
      },
    });
  });
};

const createPrismaNodes = async variables => {
  const uri =
    'https://howtographql-prod_howtographql-internal.prisma.sh/howtographql/dev';
  const apolloFetch = createApolloFetch({ uri });
  const query = `
    mutation upsertTutorial(
      $gatsbyID: String!
      $name: String!
      $numberofChapters: Int!
    ) {
      upsertTutorial(
        where: { gatsbyID: $gatsbyID }
        create: {
          gatsbyID: $gatsbyID
          name: $name
          numberofChapters: $numberofChapters
        }
        update: {
          gatsbyID: $gatsbyID
          name: $name
          numberofChapters: $numberofChapters
        }
      ) {
        id
      }
    }
  `;
  return apolloFetch({ query, variables })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
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
