<script>
  import { fade } from "svelte/transition";
</script>

<section in:fade={{ duration: 500 }}>
  <slot />
</section>
