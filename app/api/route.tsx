import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import packageJson from "@/package.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") || "json";

  const copywritingStr = await readFile(
    path.resolve("data", "copywriting.txt"),
    "utf-8"
  );

  const copywriting =
    copywritingStr.split("\r\n\r\n").length === 1
      ? copywritingStr.split("\n\n")
      : copywritingStr.split("\r\n\r\n");

  const data = copywriting[Math.floor(Math.random() * copywriting.length)];

  return type === "plain"
    ? new NextResponse(data)
    : NextResponse.json({
        code: 200,
        msg: 'success',
        data,
        repo: "https://github.com/colour93/saob-work",
        version: packageJson.version,
      });
}
