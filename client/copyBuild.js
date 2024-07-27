// client/copyBuild.js

const fs = require("fs-extra");
const path = require("path");

const buildDir = path.join(__dirname, "build");
const publicDir = path.join(__dirname, "..", "server", "public");

// Remove the old public directory if it exists
fs.removeSync(publicDir);

// Copy the build directory to the public directory
fs.copy(buildDir, publicDir)
  .then(() => console.log("Build files copied to public directory!"))
  .catch((err) => console.error("Error copying build files:", err));
