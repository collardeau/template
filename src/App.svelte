<script>
  import Router from "svelte-spa-router";
  import Feed from "./components/Feed.svelte";
  import Item from "./components/Item.svelte";
  import About from "./components/About.svelte";
  import Header from "./components/Header.svelte";

  let title = "awesome app";

  let routes = {
    "/": Feed,
    "/item/:id": Item,
    "/about": About,
    "*": Feed
  };

  let navLinks = [
    { name: "feed", href: "#/feed" },
    { name: "about", href: "#/about" }
  ];
</script>

<div class="app-wrapper">
  <Header {title} {navLinks} />
  <main class="p-2">
    <Router {routes} />
  </main>
</div>
