<script>
  import Router, { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  import Home from "./components/Home.svelte";
  import Page1 from "./components/pages/Page1.svelte";
  import Page2 from "./components/pages/Page2.svelte";
  import Item from "./components/Item.svelte";
  import About from "./components/About.svelte";
  import Header from "./components/fluid-header/index.svelte";

  let title = "New Header";

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

  let toggleMenu;
  const handleClick = () => {
    toggleMenu();
  };
</script>

<style>
  :global(.fluid-header-container) {
    background-color: goldenrod;
    padding: 10px;
  }
  :global(.fluid-header-button:hover) {
    color: green;
  }
</style>

<div class="app-wrapper">
  <Header
    bind:toggleMenu
    on:open={() => {
      console.log('open');
    }}
    on:close={() => {
      console.log('close');
    }}>
    <div slot="left">
      <h1>{title}</h1>
    </div>
    <div slot="right">My Horizontal Menu</div>
    <div slot="drawer">My Vertical Menu</div>
    <div slot="right-collapsed">
      <button on:click={handleClick}>Toggle</button>
    </div>
  </Header>
  <main class="p-2">
    <Router {routes} />
  </main>
</div>
