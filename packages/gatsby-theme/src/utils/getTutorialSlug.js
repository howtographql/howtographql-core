const path = require("path");

module.exports = {
  getTutorialSlug: relativePath => {
    return `/${path.basename(path.dirname(relativePath))}/${path.basename(
      relativePath,
      ".mdx"
    )}`;
  },
  getTutorialOverviewSlug: relativePath => {
    console.log(`/${path.basename(path.dirname(relativePath))}`);
    return `/${path.basename(path.dirname(relativePath))}`;
  }
};
