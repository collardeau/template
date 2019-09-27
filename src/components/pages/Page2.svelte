<script>
  import Page from "./Page.svelte";
  import Wrap from "../Wrap.svelte";
  import { itemsByCategory } from "../../stores/items";

  let items = $itemsByCategory.animal;
</script>

<Page>
  <p>This is the example of a grid which wraps elements</p>
  <Wrap {items} />
</Page>
