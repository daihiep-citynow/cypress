const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const path = require("path");

module.exports = () => ({
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : [])
    ]
  },
  // Add jest config resolve alias path
  jest: {
    configure: {
      moduleNameMapper: {
        // resolve @/constants path
        "^@/(.+)$": "<rootDir>/src/$1"
      }
    }
  }
});
