const fs = require("fs");
const path = require("path");

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Cleaned ${dir}`);
  }
}

cleanDirectory("./dist");
cleanDirectory("./src/components");

console.log("Cleanup complete");
