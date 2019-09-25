<script>
  import Router from "svelte-spa-router";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  const routes = {
    "/": Home,
    "/about": About,
    "*": Home
  };
</script>

<main class="px-2">
  <Router {routes} />
</main>
