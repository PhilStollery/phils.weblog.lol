---
Date: 2023-01-23 16:31
Tags: github, omgalol, blogging
---

# Is GitHub now able to manage my blog?

One of the cool things about omg.lol and specially its weblog feature is that it's backed by an API. There are [steps](https://advent.weblog.lol/day-12) on how to hook it up. 

This is a test post to see if it's now working? Maybe I had the wrong address — maybe just my username? The problem was with my YAML to start with:

```yml
on: [push]

jobs:
  weblog_import:
    runs-on: ubuntu-latest
    name: weblog.lol
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 2
      - id: weblog_import
        uses: neatnik/weblog.lol@v1
        env:
          ADDRESS: phils
          WEBLOG_API_KEY: ${{ secrets.WEBLOG_API_KEY }}
```

The docs said to use your own address, so I tried **phils.weblog.lol**, **stollerys.co.uk**, actually what the config wanted was just **phils**.

Then I had an issue that updates weren't happening. I asked for help and the missing step was having a file names **reset** in my configuration folder. It can be empty. 

After making all these fixes, I committed some changes and then my posts began to appear.

Why move to managing my weblog with GitHub?

1. The site is now backed up on Microsoft infrastructure.
1. I can host my weblogs images on GitHub.
1. I can use VS Code to write my posts (it has a great markdown editor).
1. Takes less than a minute to commit changes and them showing up online.

If you want to do the same, feel free to look at my [GitHub repo](https://github.com/PhilStollery/phils.weblog.lol) to see how I've set it up.