const webpackConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
//
// module.exports = withBundleAnalyzer({
//     reactStrictMode: true,
// })

module.exports = { ...webpackConfig, ...nextConfig };
