Type: file
Content-Type: text/css
Title: Stylesheet
Location: /style.css

@import url('https://static.omg.lol/type/font-honey.css');
@import url('https://static.omg.lol/type/font-lato-regular.css');
@import url('https://static.omg.lol/type/font-lato-bold.css');
@import url('https://static.omg.lol/type/font-lato-italic.css');
@import url('https://static.omg.lol/type/font-md-io.css');
@import url('https://static.omg.lol/type/fontawesome-free/css/all.css');

:root {
  --foreground: #212529;
  --background: #f8f9fa;
  --link: #0b5a66;
  --accent: #868e96;
  --navbar: #868e96;
  --color-scheme: dark light;
  --search-results: #eee;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: #eee;
    --background: #222;
    --link: #99e9f2;
    --accent: #ced4da;
    --navbar: #111;
    --search-results: #1b1b1b;
  }
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 120%;
  color: var(--foreground);
  background: var(--background);
}

nav {
    overflow: hidden;
    background-color: var(--navbar);
    border-radius: 2em;
    font-family: 'VC Honey Deck', sans-serif;
    line-height: 100%;

    /* Sticky menu */
    position: sticky;
    top: 0px;
    z-index: 9999;
}

nav li {
    list-style-type: none;
}

nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    margin: 10px 15px 10px 15px;
    align-content: center;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'VC Honey Deck', serif;
  margin: 1rem 0;
}

p, li {
  line-height: 160%;
}

main {
  max-width: 50em;
  margin: 1.5em auto;
  padding: 0 1.1em;
}

#recent-posts-title {
  padding-top: 3em;
  padding-bottom: 1em;
}

header, nav, footer {
  max-width: 50em;
  margin: 1.5em auto;
  padding: 0 0.5em;
}

header {
  margin-top: 1em;
}

header h1 { 
  text-align: center;
}

header h1 a:hover { 
  text-decoration: none;
}

footer p {
  font-size: 85%;
  text-align: center;
}

a:link { color: var(--link); text-decoration: none; }
a:visited { color: var(--link); text-decoration: none; }
a:hover { color: var(--link); text-decoration: underline; }
a:active { color: var(--link); text-decoration: underline; }

nav li a:link, nav li a:visited {
    color: #f8f9fa;
}

weblog-info {
    color: #f8f9fa;
}

.post-info, .post-tags {
  font-size: 85%;
  color: var(--accent);
  text-align: left;
}

.post-info i:nth-child(2) {
  margin-left: .75em;
}

.post-tags {
  padding-bottom: 1em;
}

.tag {
  background: var(--accent);
  color: var(--background) !important;
  padding: .3em .4em;
  margin: .8em 0 0 .4em;
  border-radius: .5em;
  text-decoration: none;
  display: inline-block;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  margin: 2em 0;
}

code {
  padding: .2em .3em;
  border: 1px solid var(--accent);
  white-space: pre-wrap;
  word-wrap: break-word; 
}

pre, code {
  font-family: 'MD IO 0.4';
  font-size: 90%;
}

pre code {
  background:  #000;
  color:  #eee;
  display: inline-block;
  padding: 1em;
  white-space: pre-wrap;
  word-wrap: break-word;   
}

table {
  border-collapse: collapse;
}

td, th {
  padding: .75em;
  text-align: left;
  border: 1px solid var(--accent);
}
  
.weblog-title a {
  text-decoration: none;
  color: var(--foreground);
}

img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  border-radius: 1em;
}

div.table-container {
  display: flex; 
  flex-direction: row;
}

div.table-cell {
  padding-right: 1em;
  padding-bottom: 1em;
}

div.weblog-info {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem 2rem 0.75rem;
    background-color: var(--navbar);
    border-radius: 2em;
    color: #f8f9fa;
}

div.weblog-info div.item {
  flex: 1;
}

@media only screen and (max-width: 750px) {
  div.weblog-info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  div.weblog-info div.item {
    flex: 1;
  }
  div.table-container {
    display: flex; 
    flex-direction: column;
    gap: 0;
  }
}

div.weblog-info ul {
   margin-left: 1.2rem;
    padding-left: 0;
}

div.weblog-info div.statuslol_emoji_container {
  display: none;
}

.statuslol_content p {
  line-height: 100%;
  margin-bottom: 0.5em;
}

.statuslol_time {
    padding-left: 0.5em;
    font-size: 0.8em;
}

h3.recent-posts:before {
  content: "\f1da";
  font: var(--fa-font-solid);
  margin-right: 0.8rem;
}

h3.more-posts:before {
  content: "\f0ca";
  font: var(--fa-font-solid);
  margin-right: 0.8rem;
}

h3.more-posts:before {
  content: "\f0ca";
  font: var(--fa-font-solid);
  margin-right: 0.8rem;
}

h3.webring:before {
  content: "\f70b";
  font: var(--fa-font-solid);
  margin-right: 0.8rem;
}

span.webring-title {
  width: 100%;
  text-align: center;
  display: block;
}

span.webring-buttons {
  width: 100%;
  text-align: center;
  display: block;
  font-size: larger;
}

span.webring-buttons i {
  padding: 1em 0.5em;
}

h3.page-hits:before {
  content: "\f080";
  font: var(--fa-font-solid);
  margin-right: 0.8rem;
}

article > h1 {
  padding-bottom: 0.5em;
}

article > ol {
  margin-left: 0.5em;
}

.tinylytics_kudos{
  background: var(--accent);
  color: var(--background) !important;
  padding: .3em .4em;
  margin: .8em 0 0 .4em;
  border-radius: .5em;
  padding: 4px;
  cursor:pointer;
}

.tinylytics_kudos.did_select{
  background: var(--accent);
  color: var(--background) !important;
  border: none;
  font-weight: bold;
  cursor:default;
}

.search-box {
  margin:0 auto;
  max-width:720px;
  color:#fff;
  padding:24px
}
.search-results {
  padding:0
}
.ais-SearchBox-form {
  position:relative;
  padding-bottom:2em;
}

.ais-SearchBox-form .ais-SearchBox-submit {
  position:absolute;
  right:4px;
  top:4px;
  padding:12px;
  height:48px;
  width:48px;
  margin:0;
  outline:0;
  border-radius:0.75em;
  background-color:transparent
}
.ais-SearchBox-form .ais-SearchBox-submit .ais-SearchBox-submitIcon {
  width:24px;
  height:24px;
  fill:var(--foreground)
}
.ais-SearchBox-form .ais-SearchBox-submit:focus {
  background-color:var(--search-results)
}
.ais-SearchBox-form .ais-SearchBox-submit:focus .ais-SearchBox-submitIcon {
  fill:var(--foreground)
}
.ais-SearchBox-form .ais-SearchBox-reset {
  position:absolute;
  right:46px;
  top:3px;
  padding:12px
}
.ais-SearchBox-form .ais-SearchBox-reset .ais-SearchBox-resetIcon {
  width:16px;
  height:16px;
  fill:var(--foreground)
}
.ais-SearchBox-form .ais-SearchBox-reset .ais-SearchBox-resetIcon:focus {
  background-color:var(--search-results)
}
.ais-SearchBox-form .ais-SearchBox-reset .ais-SearchBox-resetIcon:focus .ais-SearchBox-submitIcon {
  fill:var(--foreground)
}
.ais-SearchBox-input {
  padding:12px 60px 12px 12px;
  font-size:1.2em;
  border-radius:0.75em;
  color:var(--foreground);
  border:2px solid transparent;
  width:100%;
  outline:1;
  background-color:var(--search-results);
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none
}
.ais-SearchBox-input:focus {
  border-color:var(--foreground)
}

.ais-CurrentRefinements-list,
.ais-Hits-list,
.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Menu-list,
.ais-NumericMenu-list,
.ais-Pagination-list,
.ais-RatingMenu-list,
.ais-RefinementList-list,
.ais-Results-list,
.ais-ToggleRefinement-list {
  margin:0;
  padding:0;
  list-style:none
}
.ais-ClearRefinements-button,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-reset,
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadMore,
.ais-InfiniteHits-loadPrevious,
.ais-InfiniteResults-loadMore,
.ais-Menu-showMore,
.ais-RangeInput-submit,
.ais-RefinementList-showMore,
.ais-SearchBox-reset,
.ais-SearchBox-submit,
.ais-VoiceSearch-button {
  padding:0;
  overflow:visible;
  font:inherit;
  line-height:normal;
  color:inherit;
  background:0 0;
  border:0;
  cursor:pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
.ais-ClearRefinements-button::-moz-focus-inner,
.ais-CurrentRefinements-delete::-moz-focus-inner,
.ais-CurrentRefinements-reset::-moz-focus-inner,
.ais-HierarchicalMenu-showMore::-moz-focus-inner,
.ais-InfiniteHits-loadMore::-moz-focus-inner,
.ais-InfiniteHits-loadPrevious::-moz-focus-inner,
.ais-InfiniteResults-loadMore::-moz-focus-inner,
.ais-Menu-showMore::-moz-focus-inner,
.ais-RangeInput-submit::-moz-focus-inner,
.ais-RefinementList-showMore::-moz-focus-inner,
.ais-SearchBox-reset::-moz-focus-inner,
.ais-SearchBox-submit::-moz-focus-inner,
.ais-VoiceSearch-button::-moz-focus-inner {
  padding:0;
  border:0
}
.ais-ClearRefinements-button[disabled],
.ais-CurrentRefinements-delete[disabled],
.ais-CurrentRefinements-reset[disabled],
.ais-HierarchicalMenu-showMore[disabled],
.ais-InfiniteHits-loadMore[disabled],
.ais-InfiniteHits-loadPrevious[disabled],
.ais-InfiniteResults-loadMore[disabled],
.ais-Menu-showMore[disabled],
.ais-RangeInput-submit[disabled],
.ais-RefinementList-showMore[disabled],
.ais-SearchBox-reset[disabled],
.ais-SearchBox-submit[disabled],
.ais-VoiceSearch-button[disabled] {
  cursor:default
}
.ais-Breadcrumb-item,
.ais-Breadcrumb-list,
.ais-Pagination-list,
.ais-PoweredBy,
.ais-RangeInput-form,
.ais-RatingMenu-link {
  display:flex;
  align-items:center
}
.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
  margin-left:1em
}
.ais-PoweredBy-logo {
  display:block;
  height:1.2em;
  width:auto
}
.ais-RatingMenu-starIcon {
  display:block;
  width:20px;
  height:20px
}
.ais-SearchBox-input::-ms-clear,
.ais-SearchBox-input::-ms-reveal {
  display:none;
  width:0;
  height:0
}
.ais-SearchBox-input::-webkit-search-cancel-button,
.ais-SearchBox-input::-webkit-search-decoration,
.ais-SearchBox-input::-webkit-search-results-button,
.ais-SearchBox-input::-webkit-search-results-decoration {
  display:none
}
.ais-Hits-item {
  padding:6px 24px 12px 24px;
  background-color:var(--search-results);
  color:var(--foreground);
  border-radius:0.75em;
  margin-bottom:24px;
  position:relative;
  overflow:hidden;
  border:2px solid transparent
}
.ais-Hits-item p {
  margin:0
}
.ais-Hits-item a {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  text-indent:-400px
}
.ais-Hits-item mark {
  background-color:transparent;
  color:var(--link);
  text-shadow:1px 1px 1px var(--background);
  display:inline-block
}
.ais-Hits-item:focus-within {
  border-color:var(--foreground)
}
#search_results {
  padding-bottom: 2em;
}
