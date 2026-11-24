import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm down: the API and dashboard are out, and so is the monitoring I'd use to check why. I don't know why yet and can't verify anything until services return.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
