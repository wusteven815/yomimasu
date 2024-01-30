/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs/promises");

const ICON_MAP_PATH = "./src/components/material/Icon/iconMap.ts";
const ICON_MAP_ENCODING = "utf-8";

async function getSVGPathString(icon, isFilled) {
  const res = await fetch(
    `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${icon}/${
      isFilled ? "fill1" : "default"
    }/24px.svg`,
  );
  if (res.status !== 200) {
    throw Error(`Failed to fetch icon`);
  }
  return (await res.text()).slice(97, -9);
}

async function addIcon() {
  const [, , name] = process.argv;

  const orgFile = await fs.readFile(ICON_MAP_PATH, ICON_MAP_ENCODING);
  const icons = JSON.parse(`${orgFile.slice(84, -32)}]]`);
  icons.push([`${name.replaceAll("_", "-")}-false`, await getSVGPathString(name, false)]);
  icons.push([`${name.replaceAll("_", "-")}-true`, await getSVGPathString(name, true)]);
  icons.sort((a, b) => a[0].localeCompare(b[0]));

  const iconTexts = icons.map((icon) => `  ["${icon[0]}", "${icon[1]}"],`).join("\n");

  const newFile = `/* eslint-disable prettier/prettier */\n\nconst data: Map<string, string> = new Map([\n${iconTexts}\n]);\n\nexport default data;\n`;
  await fs.writeFile(ICON_MAP_PATH, newFile);
  console.log(`Added icon "${name}" to "${ICON_MAP_PATH}"`);
}

addIcon();
