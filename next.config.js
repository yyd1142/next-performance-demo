const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.REACT_APP_BUNDLE_VISUALIZE === '1',
});
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  compress: true,
  distDir: '.next',
  generateEtags: false,
  pageExtensions: ['tsx', 'ts'],
  poweredByHeader: false,
  reactStrictMode: isProd,
  swcMinify: true,
  trailingSlash: false,
  compiler: {
    reactRemoveProperties: isProd,
    removeConsole: false,
    emotion: {
      sourceMap: !isProd,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      importMap: {
        '@mui/system': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/system', 'styled'],
          },
        },
        '@mui/material/styles': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material/styles', 'styled'],
          },
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  async headers() {
    return [
      {
        source: '/:all*(png|woff2|tff)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config, { buildId, isServer, webpack }) => {
    // Client webpack conifg
    if (!isServer) {
      // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
      if (isProd && pkg) {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
        };

        // Automatic injection of copyright annotation information
        config.optimization.minimizer.push(
          new BannerPlugin({
            banner: `/*!\n *  @name: ${pkg.name} \n *  @author: ${
              pkg.author
            } \n *  @date: ${dateformat(
              new Date(),
              'UTC:dddd, mmmm dS, yyyy, h:MM:ss TT'
            )} \n *  @version: ${pkg.version} \n *  @license: ${pkg.license} \n *  @copyright: ${
              pkg.copyright
            } \n */\n`,
          })
        );
      }
    }

    // Sentry webpack tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );
    // Important: return the modified config
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
