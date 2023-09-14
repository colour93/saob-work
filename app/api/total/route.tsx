import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import packageJson from "@/package.json";

export async function GET() {
  const copywritingStr = await readFile(
    path.resolve("data", "copywriting.json"),
    "utf-8"
  );
  let data: string[] = [];

  try {
    data = JSON.parse(copywritingStr);
  } catch (e) {
    return NextResponse.json({
      code: 500,
      data: (e ?? new Error()).toString(),
      repo: "https://github.com/colour93/saob-work",
      version: packageJson.version,
    });
  }

  return NextResponse.json({
    code: 200,
    data,
    repo: "https://github.com/colour93/saob-work",
    version: packageJson.version,
  });
}
