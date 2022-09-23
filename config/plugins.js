module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-sftp-v2",
      providerOptions: {
        host: `${process.env.CDN_SERVER_HOST}`,
        port: `${process.env.CDN_SERVER_PORT}`,
        user: `${process.env.CDN_SERVER_USER}`,
        password: `${process.env.CDN_SERVER_PASSWORD}`,
        basePath: `${process.env.CDN_SERVER_BASE_PATH}`,
        baseUrl: `${process.env.CDN_SERVER_URL}`,
      },
    },
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ["id", "uid", "slug"],
      excludedTypes: [],
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        // getTimeout: 500, // Time in milliseconds to wait for the provider to respond
        options: {
          max: 32767, // The maximum size of the cache
          maxAge: 3600000, // The maximum life of the cache
        },
      },
      strategy: {
        // keysPrefix: "", // Add UID to cached entry
        maxAge: 15000, // Keeps cached entries for X seconds
        debug: true, // Show request logs
        contentTypes: [], // Add your collection types here: api::example1.example1, api::example2.example2
      },
    },
  },
});
