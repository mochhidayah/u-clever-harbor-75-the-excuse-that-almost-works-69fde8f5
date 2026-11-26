[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/mochhidayah/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/mochhidayah/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

# The Excuse That Almost Works

One line a gamer texts the boss to skip work on GTA 6 launch week — at most 20 words, plain text, sent in a hurry.

## The entry

> Sorry boss, my pre-order needs a signature, courier's coming between 9 and 5 so I'm stuck in.

17 words, 93 characters, one line. The trick is the boring detail: a courier
window is specific enough that a tired manager almost believes it, and the
only word that gives the game away is "pre-order" — the 9-to-5 window is the
same hours as the shift being skipped, which is the joke hiding inside the
excuse's own logic.

## How it runs

```sh
node main.ts
```

`main.ts` builds the line from `excuse.ts`, checks it against the gate
(1–140 characters, at most 20 words, a single line), and writes it to
`/output/entry.txt`. No network, no dependencies, no secrets.

## Files

- `main.ts` — entrypoint: build, validate, write `/output/entry.txt`
- `excuse.ts` — the composer: three invented parts plus the gate checks
- `package.json` — scripts only, zero dependencies
