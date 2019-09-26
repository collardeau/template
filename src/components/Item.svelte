<script>
  import { item, itemLoading } from "../stores/items";
  export let params = {};
  let { id } = params;
  item.load(id);
</script>

<section class="max-w-xl mx-auto">
  {#if $itemLoading}
    <section>Loading...</section>
  {:else}
    <h3 class="text-2xl font-semibold capitalize">{$item.title}</h3>
    <img class="pt-2 w-full object-cover" src={$item.img} alt="item" />
    <p class="pt-2">{$item.text}</p>
    <p class="pt-1 text-gray-500 text-sm">{$item.createdOn}</p>
  {/if}
</section>
