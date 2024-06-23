const algoliasearch = require("algoliasearch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

(async function () {

  console.log("Updating search index through Algolia...");
  const response = await fetch('https://stollerys.co.uk/feed.json');
  const data = await response.json();

  let to_index = data["items"][0];
  to_index.description = to_index.content_text.substring(0, 45)+"...";

  console.log("Adding this post details ...");
  console.log(to_index);

  const client = algoliasearch("GQILQXL5YC", process.env.ALGOLIA_SECRET);

  const index = client.initIndex("feed");

  console.log("... updating index");
  index.saveObject(to_index);
  console.log("Index updated. 🎉");

})();
