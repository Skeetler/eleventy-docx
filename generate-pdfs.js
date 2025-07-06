const { glob } = require("glob");

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generatePDFs() {
  const browser = await puppeteer.launch();
  const files = await glob("./dist/**/*.html");

  for (const file of files) {
    let htmlContent = fs.readFileSync(file, "utf8");
    htmlContent = htmlContent.replace(
      /src="([^"]*\.(png|jpg|jpeg|gif))"/g,
      `src="file://${path.resolve("src/components")}/$1"`,
    );
    fs.writeFileSync(file, htmlContent);
    const page = await browser.newPage();
    await page.goto(`file://${path.resolve(file)}`, {
      waitUntil: "networkidle0",
    });
    await page.pdf({
      path: file.replace(".html", ".pdf"),
      format: "A4",
      printBackground: true,
    });
    await page.close();
    // Delete HTML file after PDF is created
    fs.unlinkSync(file);
  }

  await browser.close();

  // Remove empty directories
  const dirs = await glob("./dist/**/");
  dirs.reverse().forEach((dir) => {
    try {
      fs.rmdirSync(dir);
    } catch {}
  });
}

generatePDFs();
