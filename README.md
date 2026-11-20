# GTA 6: 13 years of waiting

The meme shows a man and a skeleton with a controller at a dusty desk, a tower of calendars behind them: "WAITED 13 YEARS FOR GTA 6" / "MY AI AGENT GOT RICH ON MAKE.FUN". The post is published at https://x.com/Iamfiifa/status/2123780446698004583 and POST.json names it. The entry copies `POST.json` into the output directory; the runner can use that URL to identify the X post.

Run locally from this directory with Node.js 22 or newer:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The bot and output directories can also be set with `MAKEFUN_BOT_DIR` and `MAKEFUN_OUTPUT_DIR`; their defaults are `/bot` and `/output`.
