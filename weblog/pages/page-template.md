Type: Template
Title: Page Template

<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<title>{weblog-title}{separator}{post-title}</title>
<meta proof="proven.lol/fe24d0">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" conent="#222" media="(prefers-color-scheme: dark)">
<meta name="theme-color" conent="#f8f9fa" media="(prefers-color-scheme: light)">
{feeds}
<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/PhilStollery/phils.weblog.lol/master/images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/PhilStollery/phils.weblog.lol/master/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://raw.githubusercontent.com/PhilStollery/phils.weblog.lol/master/images/favicon-16x16.png">
<link rel="manifest" href="https://raw.githubusercontent.com/PhilStollery/phils.weblog.lol/master/images/site.webmanifest">
<link rel="stylesheet" media="all" href="/style.css" />
<script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.23.3/dist/algoliasearch-lite.umd.js" integrity="sha256-1QNshz86RqXe/qsCBldsUu13eAX6n/O98uubKQs87UI=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4.71.0/dist/instantsearch.production.min.js" integrity="sha256-HwiQbSydpPkcoRaTUT9tAcbbWrDk+KkdjN7vlmEllGE=" crossorigin="anonymous"></script>

<script type="module" src="/search.js"></script>
</head>
<body>

<header>
  <h1 class="weblog-title"><a href="{base-path}">{weblog-title}</a></h1>
</header>

{navigation}

<main>

<article>
  {body}
</article>

<div class="weblog-info">
  <div class="item">
    <h3 class="current-status">Current status</h3>
    <script src="https://status.lol/phils.js?time&link"></script>
    <br\>
    <h3 class="contact-me">Contact me: <a href="mailto:phils@omg.lol" title="Email me"><i class="far fa-envelope"></i></a> <a rel="me" href="https://social.lol/@phils" title="My Mastodon instance."><i class="fa-brands fa-fw fa-mastodon"></i></a></h3>
    <br\>
        <h3 class="page-hits">Hits: <a href="https://tinylytics.app/public/aacr4gz9Xw_Ya-qqQH8d" title="Page hits supplied by tinylytics.app"><span class="tinylytics_hits"></span></a></h3>
  </div>
  <div class="item">
    <h3 class="recent-posts">Last post</h3>
    <span style="padding-left: 1em; display: block;">{recent-posts}</span>
    <h3 class="more-posts">More posts</h3>
    <ul style="padding-left: 1em;">
      <li>All <a href="/archive">posts</a></li>
      <li>Random <a href="/random">post</a></li>
      <li>All <a href="/tags">tags</a></li>
    </ul>
  </div>
	<div class="item">
		<h3 class="webring">Webring</h2>
<span class="webring-title"><a href="https://stollerys.co.uk/webring">The Unofficial weblog.lol</a></span>
<span class="webring-buttons">
<a href="https://webri.ng/webring/webloglol/previous?via=https://stollerys.co.uk"><i class="fa-solid fa-circle-left"></i></a>
<a href="https://webri.ng/webring/webloglol/random?via=https://stollerys.co.uk"><i class="fa-solid fa-shuffle"></i></a>
<a href="https://webri.ng/webring/webloglol/next?via=https://stollerys.co.uk"><i class="fa-solid fa-circle-right"></i></a>
</span> 
	</div>
	<div class=“item”>
	   <a href=“https://people.pledge.party”><img src=“/images/people_pledge_badge.png”/></a>
	</div>
</div>

</main>

<footer>
  <p>Made with <a href="https://home.omg.lol/referred-by/phils" title="Love by prami at omg.lol"><i class="fa-solid fa-heart"></i></a> at <a href="https://weblog.lol">weblog.lol</a> © 2018 - {year}</p>

<script src="https://tinylytics.app/embed/vjqvBE9nv_zxbDL17UsJ.js?hits&kudos=❤️" defer></script>

</footer>

</body>
</html>
