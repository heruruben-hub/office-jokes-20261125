import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I told HR my workload was crushing me, so they sent a calendar invite titled 'Let's Circle Back to Your Burnout.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
