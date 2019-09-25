<script>
  import Home from "./Home.svelte";
  import { route } from "../stores/route";
</script>

<main class="px-2">
  {#if $route === 'about'}
    About
  {:else}
    <Home />
  {/if}
</main>
