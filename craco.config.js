const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_utils.scss";
            @import "@/styles/Init.scss";

            `
      }
    }
  },

  resolve: {
    alias: {
      // "@/images/": `${path.resolve(__dirname, "src/app/assets/images")}/`,
      // "@/icons/": `${path.resolve(__dirname, "src/app/assets/icons")}/`,
      // "@": `${path.resolve(__dirname, "src")}`
    }
  }
};
