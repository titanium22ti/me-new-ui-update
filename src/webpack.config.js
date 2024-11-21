module.exports = {
    // other webpack config...
    resolve: {
      extensions: [".js", ".mjs", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  };
  