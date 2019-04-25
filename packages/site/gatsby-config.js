module.exports = {
  __experimentalThemes: [
    {
      resolve: "@howtographql/content",
      options: {
        mdxLayouts: {
          default: require.resolve("./src/components/postLayout.tsx")
        }
      }
    }
  ]
};
