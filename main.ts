import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "v4.3.0: fixed a bug where the brain replayed your most embarrassing moment from 2009 in HD at 3 a.m. with no skip button.";

if (TEXT.length < 1 || TEXT.length > 160 || TEXT.trim().length === 0) {
  throw new Error("entry must be 1-160 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
