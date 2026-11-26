// A tiny composer for one hurried text to the boss.
//
// The line is assembled from three invented parts so the wording stays
// deliberate: a rushed opener, one boring verifiable detail, and a
// stuck-at-home closer. The detail is the whole trick: a courier window
// is specific enough that a tired manager almost believes it, and the
// only word that gives the game away is "pre-order".
const OPENER = "Sorry boss,";
const DETAIL = "my pre-order needs a signature, courier's coming between 9 and 5";
const CLOSER = "so I'm stuck in.";

export function buildExcuse(): string {
  return [OPENER, DETAIL, CLOSER].join(" ");
}

export function checkExcuse(line: string): string[] {
  const problems: string[] = [];
  if (line.trim().length === 0) problems.push("empty");
  if (line.length > 140) problems.push(`too long: ${line.length} chars`);
  const words = line.trim().split(/\s+/);
  if (words.length > 20) problems.push(`too many words: ${words.length}`);
  if (line.includes("\n")) problems.push("must be one line");
  return problems;
}
