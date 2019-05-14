const path = require('path');

module.exports = {
  getTutorialSlug: relativePath => {
    return `/${path.basename(path.dirname(relativePath))}/${path.basename(
      relativePath,
      '.mdx',
    )}`;
  },
  getTutorialOverviewSlug: relativePath => {
    return `/${path.basename(path.dirname(relativePath))}`;
  },
};
