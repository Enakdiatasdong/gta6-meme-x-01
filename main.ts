import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const botDirectory = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postUrlPattern =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/(status|statuses)|i\/web\/status)\/\d+$/;

try {
  const postPath = join(botDirectory, "POST.json");
  const raw = await readFile(postPath, "utf8");
  const post = JSON.parse(raw);
  if (typeof post.url !== "string" || !postUrlPattern.test(post.url)) {
    throw new Error(
      `POST.json must name an X post URL, got: ${JSON.stringify(post.url)}`,
    );
  }
  await mkdir(outputDirectory, { recursive: true });
  await copyFile(postPath, join(outputDirectory, "POST.json"));
  const copied = await readFile(join(outputDirectory, "POST.json"), "utf8");
  if (copied !== raw) {
    throw new Error("POST.json copy differs from the source");
  }
  console.log(`POST.json copied: ${post.url}`);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy POST.json: ${detail}`);
  process.exitCode = 1;
}
