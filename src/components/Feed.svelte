<script>
  import Page from "./Page.svelte";
  import { summaries, summariesLoading } from "../stores/items";
</script>

<Page loading={$summariesLoading}>
  <section class="center-column">
    {#each $summaries as { id, img, title, createdOn }}
      <a href="#/item/{id}" class="mb-4 block">
        <article class="bg-white shadow">
          <img class="h-32 cover" src={img} alt="item" />
          <section class="p-2 ">
            <h3>{title}</h3>
            <p class="text-gray-500">posted on {createdOn}</p>
          </section>
        </article>
      </a>
    {/each}
  </section>
</Page>
