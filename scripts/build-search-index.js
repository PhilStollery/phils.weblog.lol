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