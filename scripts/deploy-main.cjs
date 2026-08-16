const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");
const docsDir = path.join(projectRoot, "docs");

function removeDirContents(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync(buildDir)) {
  console.error("Build directory was not found. Run npm run build first.");
  process.exit(1);
}

fs.mkdirSync(docsDir, { recursive: true });
removeDirContents(docsDir);
copyDir(buildDir, docsDir);

console.log("Copied build output to docs for GitHub Pages (main branch).");