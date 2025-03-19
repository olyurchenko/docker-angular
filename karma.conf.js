module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    host: "0.0.0.0",
    port: 9876,
    frameworks: ["jasmine"],
    files: ["src/**/*.spec.ts"],
    preprocessors: {
      "src/**/*.spec.ts": [
        "@angular-devkit/build-angular/src/broccoli/karma-typescript-preprocessor",
      ],
    },

    reporters: ["progress", "coverage"],
    coverageReporter: {
      dir: require("path").join(__dirname, "coverage"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },

    // Можливі інші налаштування
    client: {
      clearContext: false, // важливо, щоб не було очищення контексту після завершення тестів
    },
  });
};
