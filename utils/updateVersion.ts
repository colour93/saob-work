import { readFile, writeFile } from "fs/promises";
import path from "path";
import moment from "moment";

export default async function updateVersion() {
  let rawData = JSON.parse(
    await readFile(path.resolve("package.json"), "utf-8")
  );

  rawData.version = moment().zone("+08:00").format("YYYY-MM-DD HH:mm:ss");

  await writeFile(
    path.resolve("package.json"),
    JSON.stringify(rawData, null, 2)
  );
}

await updateVersion();
