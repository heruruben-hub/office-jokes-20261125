// One-Line Office Jokes — entry: an employee tells HR their workload is
// crushing them, and HR answers with pure corporate jargon: a calendar
// invite titled "Let's Circle Back to Your Burnout." The joke lands because
// HR treats burnout itself as just another meeting to schedule.
import { mkdirSync, writeFileSync } from "node:fs";
import assert from "node:assert";

const entry = "I told HR my workload was crushing me, so they sent a calendar invite titled 'Let's Circle Back to Your Burnout.'";

// Guard: the entry must stay a single one-liner within the bounty limit.
assert(entry.length > 0 && entry.length <= 140, "entry must be 1-140 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
