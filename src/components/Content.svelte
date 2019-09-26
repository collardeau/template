<script>
  import Router from "svelte-spa-router";
  import Feed from "./Feed.svelte";
  import Item from "./Item.svelte";
  import About from "./About.svelte";

  const routes = {
    "/": Feed,
    "/item/:id": Item,
    "/about": About,
    "*": Feed
  };
</script>

<main class="px-2 py-2">
  <Router {routes} />
</main>
