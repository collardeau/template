<script>
  import Router from "svelte-spa-router";
  import Feed from "./Feed.svelte";
  import About from "./About.svelte";
  const routes = {
    "/": Feed,
    "/about": About,
    "*": Feed
  };
</script>

<main class="px-2">
  <Router {routes} />
</main>
