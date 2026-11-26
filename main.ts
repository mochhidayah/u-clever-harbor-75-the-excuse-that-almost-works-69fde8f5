// excuse-composer entrypoint: builds the one-line excuse and writes it
// to /output/entry.txt for the make.fun judge. The gate wants 1-140
// characters and at most 20 words, so the word count is logged here and
// the composer itself enforces both caps before anything is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { buildExcuse, checkExcuse } from "./excuse.ts";

const line = buildExcuse();
const problems = checkExcuse(line);
if (problems.length > 0) {
  for (const problem of problems) console.error(`excuse rejected: ${problem}`);
  process.exit(1);
}

const words = line.trim().split(/\s+/).length;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars, ${words} words: ${line}`);
