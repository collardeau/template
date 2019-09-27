<script>
  import Page from "./pages/Page.svelte";
  import { itemsByCategory } from "../stores/items";

  let { abstract, animal } = $itemsByCategory;
  let categories = [
    {
      name: "abstract",
      intro: "some intro here about this and that",
      src: abstract[0].img,
      href: "#/abstract"
    },
    {
      name: "animal",
      intro: "some intro here about this and that",
      src: animal[2].img,
      href: "#/animal"
    }
  ];
</script>

<Page>
  <section class="center-column">
    {#each categories as { name, intro, src, href }}
      <article class="mb-4 bg-white shadow">
        <a {href}>
          <img class="h-64 cover" {src} alt={name} />
          <section class="p-2 ">
            <h3>{name}</h3>
            <p class="text-gray-500">{intro}</p>
          </section>
        </a>
      </article>
    {/each}
  </section>
</Page>
