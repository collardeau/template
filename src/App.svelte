<script>
  import Router from "svelte-spa-router";
  import { fade } from "svelte/transition";
  import Home from "./components/Home.svelte";
  import Page1 from "./components/pages/Page1.svelte";
  import Page2 from "./components/pages/Page2.svelte";
  import Item from "./components/Item.svelte";
  import About from "./components/About.svelte";
  import Header from "./components/Header.svelte";

  let title = "demo gallery";

  let routes = {
    "/": Home,
    "/abstract": Page1,
    "/animal": Page2,
    "/item/:id": Item,
    "/about": About,
    "*": Home
  };

  let navLinks = [
    { name: "abstract", href: "#/abstract" },
    { name: "animals", href: "#/animal" },
    { name: "about", href: "#/about" }
  ];
</script>

<div class="app-wrapper">
  <Header {title} {navLinks} />
  <main class="p-2">
    <Router {routes} />
  </main>
</div>
