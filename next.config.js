const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS();
module.exports = withSass({
  cssModules: true,
});
module.exports = withImages();
