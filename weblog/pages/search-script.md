Type: file
Content-Type: text/javascript
Title: search
Location: /search.js

// Search
const searchClient = algoliasearch('GQILQXL5YC', '6214fc2431ee84b8efd22db7b476e529');

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