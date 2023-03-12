module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'ia.media-imdb.com'],
  },
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => config,
};
