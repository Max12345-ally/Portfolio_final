const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/homework/portfolio_final/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/homework/portfolio_final/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/homework/portfolio_final/src/pages/index.js")))
}

