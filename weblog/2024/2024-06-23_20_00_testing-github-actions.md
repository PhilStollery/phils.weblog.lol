---
Date: 2024-06-23 20:00
Tags: 2024, weblog, algolia, search
---

# Testing GitHub actions to add new weblog posts to my search index

Well, this is interesting. I've migrated my Weblog to GitHub, added a GitHub automation to submit new posts to my Algolia search index.

This is now a test, do I need some sort of pause between updating prami, so the feed.json has time to be created... let's see.

## Bug 1

My feed.json isn't updating when I post from GitHub. I've asked Adam for help - or might have been a server issue. Seems to work now.

### Let's look at the code

My approach was to look around and see if I could find someone with an Algolia search update GitHub action. I found this one [https://github.com/streamlit/docs/blob/main/.github/workflows/postbuild-scripts.yml](https://github.com/streamlit/docs/blob/main/.github/workflows/postbuild-scripts.yml). It uses node to call the Algolia API to add new posts to the index.

I used that framework, Kagi'd some JavaScript commands, and got to this code to do my updates:

```javascript
const algoliasearch = require("algoliasearch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Global unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionally, you can choose to exit the process
  process.exit(1);
});

(async function () {
  try {
    // Get the latest feed.json RSS feed
    const client = algoliasearch("GQILQXL5YC", process.env.ALGOLIA_SECRET);
    const index = client.initIndex("feed");

    console.log("Updating search index through Algolia...");
    const response = await fetch('https://stollerys.co.uk/feed.json');
    const data = await response.json();

    let posts = data["items"];

    console.log(`Rebuilding search index data ${posts.length} posts...`);
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];

      // Add the objectID and description to the index data
      let titleLength = post.content_text.indexOf("\n\n");
      post.description = post.content_text.substring(titleLength+2, titleLength+140)+"...";
      post.objectID = post.id;
      delete post.content_html;

      console.log("Adding this post details ...");
      console.log(post);

      await index.saveObject(post);
      console.log("... added post to index");
    }
    
    console.log("Full search index updated. 🎉");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Ensure the process exits after completion or error
    process.exit(0);
  }
})();
```

Hopefully it makes sense. I grab my RSS feed as JSON. Then enumerate each post, delete the HTML, add a unique objectID, and then save it to Algolia. 

If you want to copy the approach see https://github.com/philstollery/phils.weblog.lol.
