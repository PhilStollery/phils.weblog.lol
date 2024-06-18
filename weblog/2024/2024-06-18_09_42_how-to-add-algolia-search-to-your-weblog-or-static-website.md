---
Date: 2024-06-18 09:42
Tags: 2024, weblog, algolia, search
---

# How to add Algolia search to your weblog (or static website)

The first thing you need to do is to create a JSON file of all your current posts. This JSON will be used to create a search index in Algolia. 

1. Sign in to your [omg.lol](https://home.omg.lol/dashboard/) account, select your domain name, then select **<i class="fas fa-rss"></i> Weblog**.
2. Scroll to the bottom of the page.

![A screenshot of the different feeds that weblog can create.](https://cdn.some.pics/phils/667161206f26d.png)

3. Select **JSON**.
4. Save the JSON feed - you'll need this location in the next steps.

You need to edit the JSON feed so that it conforms to this shape:

```json
[
  {
    "firstname": "Jimmie",
    "lastname": "Barninger",
    "zip_code": 12345
  },
  {
    "firstname": "John",
    "lastname": "Doe",
    "zip_code": null
  }
]
```

Luckily, this is the `items array` in the feed. Delete everything up to the `[` so your JSON looks like this:

```json
[
    {
        "id": "https:\/\/stollerys.co.uk\/2024\/06\/bringing-audio-to-my-weblog",
        "title": "Bringing audio to my weblog",
        "content_text": "# Bringing audio to my weblog\n\n<audio controls>\n ....",
        "url": "https:\/\/stollerys.co.uk\/2024\/06\/bringing-audio-to-my-weblog",
        "date_published": "2024-06-02T12:23:00+00:00",
        "tags": [
            "2024",
            "weblog",
            "audio",
            "google drive"
        ]
    },
    ... <All your posts will be here>
```

Also remember to delete the closing `}` at the bottom of the JSON file.

Now create a free [Algolia account](https://dashboard.algolia.com/users/sign_up). Once you've verified your email address, they take you through an onboarding flow.

![A screenshot of the Get Started screen in Algolia search. ](https://cdn.some.pics/phils/66715b0e78e0e.png)

1. **Step 1**. Select **Upload a File** (No code).
2. Upload the JSON feed you created.
3. Select **Upload**.

![A screenshot of the next Algolia step. Design your search display. ](https://cdn.some.pics/phils/66715f9238797.png)

4. **Step 2**. For the Primary text, select **title**.
5. For the Secondary text, select **content_text**.
6. At the bottom, select **Continue**.

![A screenshot of Step 3 in Algolia search. ](https://cdn.some.pics/phils/66716279a27e8.png)

7. **Step 3**. Consider adding your hashtags to the search. Select **Add a searchable attribute**.
8. Select **tags**.
9. Scroll to the bottom and select **Configure relevancy settings**.
10. In the top right, select **Skip for now**.

![A screenshot of the Algolia welcome screen. Showing the App ID and API keys.](https://cdn.some.pics/phils/6671639994ad9.png)

You should be taken to your Welcome screen that has your Application ID and Search API key. Save these to use in your JavaScript in the next steps. While you're here, you can test that the data was imported correctly and try out searching. Select the **Search** menu from the left navigation.

![A screenshot of the search index testing screen.](https://cdn.some.pics/phils/66716457ec9da.png)

Now, in the search box, try finding a post you like.

To make things easier when editing your weblog, consider stripping out your CSS into a file. In your weblog, create a **New Entry**, at the top add this YAML:

```yaml
Type: file
Content-Type: text/css
Title: Stylesheet
Location: /style.css
```

Then paste in your CSS rules below. I'm using a tweaked version of Adam's excellent default weblog [template](https://github.com/neatnik/weblog.lol/blob/main/configuration/template.html). You can see my version [here](https://stollerys.co.uk/style.css). You are welcome to copy the Algolia specific styles, they're at the bottom of my CSS file below:

```css
.search-box {
  margin:0 auto;
  max-width:720px;
  color:#fff;
  padding:24px
}
```

Next, repeat the steps to create a JavaScript file that will connect to your Algolia search index. Remember to add your Application ID and Search API key at the top:

```javascript
Type: file
Content-Type: text/javascript
Title: search
Location: /search.js

// Search
const searchClient = algoliasearch('< Your Algolia Application ID >', '< Your Algolia Search API Key >');

const search = instantsearch({
    indexName: 'feed',
    searchClient,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#search_widget',
        autofocus: true,
    }),

    instantsearch.widgets.hits({
        container: '#search_results',
        templates: {
            item: `
                <h3>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h3>
                <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
                <p><a href="{{ url }}">Read more</a></p>
            `,
        },
        escapeHTML: true,
    })
]);

search.start();
```

You need a place for the search, so create a search page to host this functionality. Create a **New Entry** as a page:

```yaml
---
Date: 2023-01-06 15:57
Type: Page
Title: search
Location: /search
---

# Search

<div id="search_widget">
</div>
<div id="search_results">
</div>
```

Connect it all together by editing your Page Template. You need to add the CSS and JavaScript references inside the head of your template:

```HTML
<link rel="stylesheet" media="all" href="/style.css" />
<script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.23.3/dist/algoliasearch-lite.umd.js" integrity="sha256-1QNshz86RqXe/qsCBldsUu13eAX6n/O98uubKQs87UI=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4.71.0/dist/instantsearch.production.min.js" integrity="sha256-HwiQbSydpPkcoRaTUT9tAcbbWrDk+KkdjN7vlmEllGE=" crossorigin="anonymous"></script>

<script type="module" src="/search.js"></script>
</head>
```

## Next steps

That's it. There are some tweaks I did. Like adding a `description` field to the JSON with summary lines, so your results don't show all your post content. Happy to add these steps if you need them.

You also have to add every new post into the search index. I was hoping the excellent [Echo Feed](https://echofeed.app/) might help me here, but currently it can't send the authentication tokens it needs. So I manually add the JSON for every new post.


Good luck [searching](/search).