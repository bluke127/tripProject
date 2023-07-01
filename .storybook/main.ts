const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, { configType }) => {
    // sass-loader 설정추가 - webpackFinal 만으로 전역 scss 추가
    config.module.rules.push({
      test: /.*\.(?:c|sc|sa)ss$/,
      use: [
        //"style-loader",
        //"css-loader",
        {
          loader: "sass-loader",
          options: {
            additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_utils.scss";
          @import "@/styles/Init.scss";
                                    `
          }
        }
      ]
    });

    //storybook 에 알리어스 추가
    config.resolve.alias["@"] = path.resolve(__dirname, "../src/");
    return {
      ...config
    };
  },
  docs: {
    autodocs: true
  }
};
