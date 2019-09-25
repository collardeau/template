<script>
  import Header from "./components/Header.svelte";
  import Home from "./components/Home.svelte";
  import { route } from "./stores/route";

  let title = "My New App";
  let links = [{ id: "Home", href: "#" }, { id: "About", href: "#about" }];
</script>

<div class="antialiased text-gray-900 bg-gray-200 min-h-screen">
  <Header {title} {links} />
  <main class="px-2">
    {#if $route === 'about'}
      About
    {:else}
      <Home />
    {/if}
  </main>
</div>
