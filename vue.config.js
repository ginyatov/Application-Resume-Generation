const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@css": path.resolve(__dirname, "./src/assets/css"),
        "@img": path.resolve(__dirname, "./src/assets/img"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "Генерация Резюме",
    },
  },
};
