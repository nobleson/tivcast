import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default withNextVideo(nextConfig);