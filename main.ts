import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single line, no newline, no extra text.
const LINE = "v2.4.1 — Fixed: humans now sneeze at 100 mph with zero warning. Added: the ability to stub your toe on furniture you placed yourself.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
