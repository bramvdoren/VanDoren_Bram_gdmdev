const mix = require("laravel-mix");

mix
  .js("./src/scripts/main.js", "app.js")
  .sass("./src/styles/main.scss", "app.css")
  .setPublicPath("./dist");
