<script>
  import Page from "./Page.svelte";
  import Feed from "../Feed.svelte";
  import Wrap from "../Wrap.svelte";
  import { itemsByCategory } from "../../stores/items";

  let items = $itemsByCategory.abstract;
  let tabs = ["feed", "grid"];
  let activeTab = "feed";
  let onTabClick = tab => {
    activeTab = tab;
  };
</script>

<Page>
  <section class="p-2 mb-4 bg-white flex border-solid border-2">
    <p>Select Layout:</p>
    <ul class="flex ml-2">
      {#each tabs as tab}
        <li class="ml-3">
          <button
            class="capitalize hover:font-bold focus:outline-none"
            class:font-bold={activeTab === tab}
            on:click={() => onTabClick(tab)}>
            {tab}
          </button>
        </li>
      {/each}
    </ul>
  </section>
  {#if activeTab === 'grid'}
    <section>
      <p class="mb-4">This is the example of the Grid layout</p>
      <Wrap {items} />
    </section>
  {:else}
    <section>
      <p class="mb-4">
        This is the example of a Feed, using a single column and stacking items
      </p>
      <Feed {items} />
    </section>
  {/if}

</Page>
