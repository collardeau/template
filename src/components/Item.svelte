<script>
  import Page from "./pages/Page.svelte";
  import { createItem } from "../stores/items";
  export let params = {};
  let item = createItem(params.id);
  let { title, img, text, createdOn } = $item;
</script>

<Page>
  <section class="center-column">
    <h3>{title}</h3>
    <img class="pt-2 cover" src={img} alt={title} />
    <p class="pt-2">{text}</p>
    <p class="pt-1 text-gray-500 text-sm">{createdOn}</p>
  </section>
</Page>
