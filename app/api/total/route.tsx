import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import packageJson from "@/package.json";

export async function GET() {
  const copywritingStr = await readFile(
    path.resolve("data", "copywriting.txt"),
    "utf-8"
  );

  const copywriting =
    copywritingStr.split("\r\n\r\n").length === 1
      ? copywritingStr.split("\n\n")
      : copywritingStr.split("\r\n\r\n");

  const data = copywriting;

  return NextResponse.json({
    code: 200,
    data,
    repo: "https://github.com/colour93/saob-work",
    version: packageJson.version,
  });
}
