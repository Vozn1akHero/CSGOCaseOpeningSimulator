const withImages = require("next-images");

// module.exports = withCSS();
// module.exports = withSass({
//   cssModules: true,
// });
module.exports = withImages();
module.exports = {
    compiler: {
        styledComponents: true
    }
}
