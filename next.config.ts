import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['mixed-decls', 'legacy-js-api'],
    quietDeps: true,
    api: 'modern',
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
  webpack(config) {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/shared/icons'),
      '@images': path.resolve(__dirname, 'src/shared/images'),
      vars: path.resolve(__dirname, 'src/app/styles/_vars.scss'),
      ...config.resolve.alias,
    };
    return config;
  },
  async rewrites() {
    return [{ source: '/', destination: '/home' }];
  },
};

export default nextConfig;
