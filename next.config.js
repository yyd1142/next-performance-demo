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
    // Sentry webpack tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );

    if (!isServer) {
      // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
      if (isProd) {
        config.optimization.splitChunks.cacheGroups = {
          runtime: {
            chunks: 'all',
            name: 'runtime',
            test: /[\\/]node_modules[\\/](redux-logger|redux|@reduxjs\/toolkit|react-redux|@emotion\/cache|@emotion\/react|@emotion\/styled|axios|dayjs|immer|qs)[\\/]/,
            priority: 90,
            enforce: true,
            reuseExistingChunk: true,
          },
          mui: {
            name: 'mui',
            test: /[\\/]node_modules[\\/]@mui\/material[\\/]/,
            chunks: 'all',
            priority: 3,
            minSize: 300000,
            maxSize: 600000,
            reuseExistingChunk: true,
            enforce: true,
          },
          ...config.optimization.splitChunks.cacheGroups,
        };
      }
    }

    // Important: return the modified config
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
