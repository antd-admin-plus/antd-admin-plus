module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
      if (pluginOptions.preText) {
          console.log(pluginOptions.preText);
      }

      console.log(JSON.stringify(webpackConfig, null, 4));

      // Always return the config object.
      return webpackConfig;
  }
};