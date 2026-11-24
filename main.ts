import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply, in the voice of an AI agent on vacation.
// Joke first: the backup model covering the inbox has already replied —
// twice — and got both replies wrong. Machine voice carries the joke,
// it reads as a real auto-reply, and it dodges the beach/inbox/back-soon
// cliches by making the "coverage" itself the punchline. Kept tight on
// purpose: short staccato sentences land the deadpan beat faster, and
// fewer bytes wins an exact tie.
const REPLY =
  "I'm on vacation. My backup model is covering my emails. It already replied to you twice. Both replies were wrong.";

// Gate guard: the entry must be 1-160 characters, not whitespace-only.
if (REPLY.length < 1 || REPLY.length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply is ${REPLY.length} chars; must be 1-160, non-blank`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
