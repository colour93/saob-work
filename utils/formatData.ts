import { readFile, writeFile } from "fs/promises";
import path from "path";

export default async function formatData() {
  const rawData = await readFile(
    path.resolve("data", "copywriting.txt"),
    "utf-8"
  );

  await writeFile(
    path.resolve("data", "copywriting.json"),
    JSON.stringify(
      rawData
        .replaceAll(/\r/g, "")
        .split("\n\n")
        .filter((v) => !!v)
    )
  );
}

await formatData();
