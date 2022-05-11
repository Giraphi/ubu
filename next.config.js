// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// }
//
// module.exports = nextConfig


const { withFaust } = require('@faustjs/next');

const nextConfig = withFaust();

nextConfig.compiler = {
    styledComponents: true,
}

nextConfig.reactStrictMode = true;

module.exports = nextConfig
