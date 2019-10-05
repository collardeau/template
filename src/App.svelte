<script>
  import Router, { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  import Home from "./components/Home.svelte";
  import Page1 from "./components/pages/Page1.svelte";
  import Page2 from "./components/pages/Page2.svelte";
  import Item from "./components/Item.svelte";
  import About from "./components/About.svelte";
  import Header from "./components/Header2.svelte";

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
  div :global(.crazy) {
    background-color: goldenrod;
    padding: 10px;
  }
</style>

<div class="app-wrapper">
  <Header
    bind:toggleMenu
    bp="lg"
    wrapperClass="bg-red-500 p-8"
    buttonClass="foobar">
    <div slot="left">
      <h1>{title}</h1>
    </div>
    <!-- <div slot="right-small">
      <button on:click={handleClick}>Toggle</button>
    </div> -->
    <div slot="horizontal">Horizontal links</div>
    <div slot="menu-slider">Vertical links</div>
  </Header>
  <main class="p-2">
    <Router {routes} />
  </main>
</div>
