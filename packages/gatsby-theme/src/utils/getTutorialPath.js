const path = require('path');

module.exports.getTutorialPath = relativePath => {
  return `/${path.basename(path.dirname(relativePath))}/${path.basename(
    relativePath,
    '.mdx'
  )}`;
};
