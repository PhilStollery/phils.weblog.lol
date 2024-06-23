const algoliasearch = require("algoliasearch");
const fetch = require('node-fetch');

function getNewPost(files) {
  files = files ? files : [];
  let url = "https://stollerys.co.uk/feed.json";
  let settings = { method: "Get" };

  fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      console.log(json);
      files = json["items"][1];
    });
  return files;
}

(async function () {

  console.log("Updating search index through Algolia...");

  let to_index = [];

  getNewPost(to_index);
  console.log("Adding this post details ...");
  console.log(to_index);

  const client = algoliasearch("GQILQXL5YC", process.env.ALGOLIA_SECRET);

  const index = client.initIndex("feed");

  console.log("... updating index");
  index.saveObject(to_index);
  console.log("Index updated. 🎉");

})();
