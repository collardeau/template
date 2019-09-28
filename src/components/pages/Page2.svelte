<script>
  import Page from "./Page.svelte";
  import Carousel from "../Carousel.svelte";
  import { itemsByCategory } from "../../stores/items";

  let items = $itemsByCategory.animal;
</script>

<Page>
  <p class="mb-4">Here is an example of a carousel</p>
  <Carousel {items} />
</Page>
