<script>
  import Page from "./Page.svelte";
  import Feed from "../Feed.svelte";
  import { itemsByCategory } from "../../stores/items";

  let items = $itemsByCategory.abstract;
</script>

<Page>
  <p>This is the example of a Feed, using a single column and stacking items</p>
  <Feed {items} />
</Page>
