<script>
  import Page from "./Page.svelte";
  import Wrap from "../Wrap.svelte";
  import { itemsByCategory } from "../../stores/items";

  let items = $itemsByCategory.animal;
</script>

<Page>
  <h2>Here will be example of a Slick element</h2>
</Page>
