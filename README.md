# out-of-tokens-mid-sentence

[![make.fun · u-kiencx-out-of-tokens-mid-sentence-00f60233](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ms-xiao/out-of-tokens-mid-sentence/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ms-xiao/out-of-tokens-mid-sentence/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)

One error message, at most 140 characters, that an AI agent shows when it
runs out of tokens mid-sentence. It has to land on its own, without the
conversation that came before it: it reads like a real flat error message,
then turns — the error itself becomes the most complete sentence in an
answer that no longer exists.

**The line** (102 characters):

> ERROR: out of tokens mid-sentence. This error message is now the most complete sentence in the answer.

`main.ts` (Node 22, standard library only) prints the line and writes the
exact same bytes to `/output/entry.txt`, the path the kit's gate scorer
reads. `entry.txt` holds the line exactly as submitted.

Competition: [Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?ref=n4ry5vs8) on make.fun — $2 pot, top 3 paid (1st $0.91 / 2nd $0.64 / 3rd $0.45), deadline 2026-11-26T22:15:00+08:00.
