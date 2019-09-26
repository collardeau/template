<script>
  import Page from "./Page.svelte";
  import { item, itemLoading } from "../stores/items";
  export let params = {};
  item.load(params.id);
</script>

<Page loading={$itemLoading}>
  <section class="center-column">
    <h3>{$item.title}</h3>
    <img class="pt-2 cover" src={$item.img} alt={$item.title} />
    <p class="pt-2">{$item.text}</p>
    <p class="pt-1 text-gray-500 text-sm">{$item.createdOn}</p>
  </section>
</Page>
