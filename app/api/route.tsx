import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import packageJson from "@/package.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") || "json";

  const copywritingStr = await readFile(
    path.resolve("data", "copywriting.json"),
    "utf-8"
  );
  let data: string[] = [];

  try {
    data = JSON.parse(copywritingStr);
  } catch (e) {
    return type === "plain"
      ? new NextResponse(`Unexpected error\n${(e ?? new Error()).toString()}`)
      : NextResponse.json({
          code: 500,
          data: (e ?? new Error()).toString(),
          repo: "https://github.com/colour93/saob-work",
          version: packageJson.version,
        });
  }

  const res = data[Math.floor(Math.random() * data.length)];

  return type === "plain"
    ? new NextResponse(res)
    : NextResponse.json({
        code: 200,
        data: res,
        repo: "https://github.com/colour93/saob-work",
        version: packageJson.version,
      });
}
