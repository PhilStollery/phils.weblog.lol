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
    console.log("Updating search index through Algolia...");
    const response = await fetch('https://stollerys.co.uk/feed.json');
    const data = await response.json();
    let to_index = data["items"][0];

    // Add the objectID and description to the index data
    let titleLength = to_index.content_text.indexOf("\n\n");
    to_index.description = to_index.content_text.substring(titleLength+2, titleLength+180)+"...";
    to_index.objectID = to_index.id;
    delete to_index.content_html;
    
    console.log("Adding this post details ...");
    console.log(to_index);
    //const client = algoliasearch("GQILQXL5YC", process.env.ALGOLIA_SECRET);
    const client = algoliasearch("GQILQXL5YC", "4c08db85212d58c48d3e28e0c8dbfd16");
    const index = client.initIndex("feed");
    console.log("... updating index");
    await index.saveObject(to_index);
    console.log("Index updated. 🎉");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Ensure the process exits after completion or error
    process.exit(0);
  }
})();