// next.config.js
module.exports = {
  // Other configurations...

  // Specify the export path (optional)
  distDir: 'out',

  // Configure the output for static HTML export
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};
