<script>
  export let items = [];
</script>

<section class="flex flex-wrap flex-between max-w-6xl mx-auto">
  {#each items as { id, img, title, createdOn }}
    <article class="px-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <a href="#/item/{id}">
        <img class="h-48 cover" src={img} alt="item" />
        <section class="p-2 bg-white">
          <h3>{title}</h3>
          <p class="text-gray-500">posted on {createdOn}</p>
        </section>
      </a>
    </article>
  {/each}
</section>
