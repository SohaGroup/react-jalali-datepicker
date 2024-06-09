const fs = require("fs");
const path = require("path");

function fixImportPaths(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixImportPaths(filePath);
    } else if (path.extname(filePath) === ".js") {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(/(import .* from '.*)(?<!\.js)';/g, "$1.js';");
      content = content.replace(/(export .* from '.*)(?<!\.js)';/g, "$1.js';");
      fs.writeFileSync(filePath, content, "utf8");
    }
  });
}

fixImportPaths(path.join(__dirname, "dist/esm"));
fixImportPaths(path.join(__dirname, "dist/cjs"));
