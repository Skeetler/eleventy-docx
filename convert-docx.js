const { exec } = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);
const { glob } = require("glob");
const path = require("path");
const os = require("os");

function getLibreOfficePath() {
  switch (process.platform) {
    case "darwin": // macOS
      return "/Applications/LibreOffice.app/Contents/MacOS/soffice";
    case "win32": // Windows
      return '"C:\\Program Files\\LibreOffice\\program\\soffice.exe"';
    default: // Linux/Unix
      return "libreoffice";
  }
}

async function convertDocxToHtml() {
  const docxFiles = await glob("./input/**/*.docx");

  for (const docxFile of docxFiles) {
    const htmlPath = docxFile
      .replace("input/", "src/components/")
      .replace(".docx", ".html");
    const outputDir = path.dirname(htmlPath);

    // LibreOffice converts to HTML with better formatting
    await execAsync(
      `${getLibreOfficePath()} --headless --convert-to html --outdir "${outputDir}" "${docxFile}"`,
    );

    // LibreOffice uses original filename, rename to match your structure
    const libreOfficePath = path.join(
      outputDir,
      path.basename(docxFile, ".docx") + ".html",
    );
    if (libreOfficePath !== htmlPath) {
      await execAsync(`mv "${libreOfficePath}" "${htmlPath}"`);
    }
  }
}
convertDocxToHtml();
