const webpackConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
}

module.exports = { ...webpackConfig, ...nextConfig }
