// https://blog.csdn.net/zoepriselife316/article/details/89711062

const { override, fixBabelImports} = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })

);