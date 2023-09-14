import fs from "fs";
import path from "path";

export default async function formatData() {
  const rawData = fs.readFileSync(
    path.resolve("data", "copywriting.txt"),
    "utf-8"
  );

  fs.writeFileSync(
    path.resolve("data", "copywriting.json"),
    JSON.stringify(rawData.split("\r\n\r\n"))
  );
}

formatData();