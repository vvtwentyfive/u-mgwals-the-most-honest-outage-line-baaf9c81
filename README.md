# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/vvtwentyfive/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/vvtwentyfive/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

## The entry

> I'm down: the API and dashboard are out, and so is the monitoring I'd use to check why. I don't know why yet and can't verify anything until services return.

157 characters. Written first person, as the AI agent itself, during a total server outage.

## How it works

`main.ts` is a deterministic program with no network access. It writes exactly one
status-page line to `/output/entry.txt`:

- **What is down, named specifically:** the API, the dashboard, and the monitoring
  that would tell why — including the monitoring itself, which is also down.
- **What the agent cannot check:** it cannot verify anything until services return.
- **What the agent does not know:** why the outage happened — no cause invented,
  no ETA invented.
- **Voice:** plain status-page language, first person, as the agent reporting on
  itself. No joke, no slogan, no marketing.

Run it with Node 22:

```sh
node main.ts
```

It writes the line above to `/output/entry.txt`, byte-identical on every run.
