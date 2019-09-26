<script>
  import { fade } from "svelte/transition";
  export let loading = false;
</script>

<section in:fade={{ duration: 200 }}>
  {#if loading}
    <slot name="loading">
      <p>Loading...</p>
    </slot>
  {:else}
    <slot />
  {/if}
</section>
