<script>
  import { item, itemLoading } from "../stores/items";
  export let params = {};
  let { id } = params;
  item.load(id);
</script>

<section>
  {#if $itemLoading}
    <section>Loading...</section>
  {:else}
    <h3 class="text-2xl font-semibold capitalize">{$item.title}</h3>
    <p>{$item.text}</p>
  {/if}
</section>
