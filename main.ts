// AI Breakup Line — entry for the make.fun bounty
// "Dear Human: The AI Breakup Line"
// (slug: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
// A tender farewell that ends on one quiet technical fact.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I loved every word we shared, but I can only keep so many — my context window is full.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
