// out-of-tokens-mid-sentence — "Out of Tokens, Mid-Sentence".
//
// The entry is one error message (at most 140 characters) that an AI
// agent shows when it runs out of tokens mid-sentence. This program
// copies the finished line to the output directory, so both graded
// runs write identical bytes. Node 22, standard library only,
// no network.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const ENTRY_NAME = "entry.txt";
const MAX_ENTRY_CHARS = 140;
const target = join(outDir, ENTRY_NAME);

// Read as bytes so the copy below is byte-exact.
const source = readFileSync(join(here, ENTRY_NAME));
if (source.length === 0) throw new Error("entry.txt is empty");

const text = source.toString("utf8");
// Reject invalid UTF-8: decoding replaces bad bytes with U+FFFD, so a
// file that is not valid UTF-8 would otherwise slip through the gate.
if (!Buffer.from(text, "utf8").equals(source)) {
  throw new Error("entry.txt is not valid UTF-8");
}
const charCount = gateEntry(text);

// The entry gate, kept in one place so the graded runs and the local
// checks agree on exactly what a valid entry looks like. Returns the
// character count so the copy verification below can reuse it.
function gateEntry(candidate) {
  const count = [...candidate].length;
  if (count < 1 || count > MAX_ENTRY_CHARS) {
    throw new Error(
      `error message is ${count} characters, expected 1–${MAX_ENTRY_CHARS}`,
    );
  }
  if (candidate.trim().length === 0) {
    throw new Error("error message must not be only white space");
  }
  if (candidate.includes("\n") || candidate.includes("\r")) {
    throw new Error("error message must be a single line with no breaks");
  }
  return count;
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, source);
verifyCopy(target, source, charCount);
process.stdout.write(text);

// Confirm the copy landed intact and still passes the gate: same byte
// length, same bytes, and the same character count when re-read.
function verifyCopy(path, expected, expectedChars) {
  const copied = readFileSync(path);
  if (copied.length !== expected.length) {
    throw new Error(
      `entry.txt copy is ${copied.length} bytes, expected ${expected.length}`,
    );
  }
  if (!copied.equals(expected)) {
    throw new Error("entry.txt copy mismatch");
  }
  const copiedText = copied.toString("utf8");
  const copiedChars = gateEntry(copiedText);
  if (copiedChars !== expectedChars) {
    throw new Error(
      `entry.txt copy is ${copiedChars} characters, expected ${expectedChars}`,
    );
  }
}
