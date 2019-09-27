<script>
  export let items = [];
</script>

<section class="flex flex-wrap justify-around">
  {#each items as { id, img, title, createdOn }}
    <article class="bg-white shadow mb-4 w-48 h-64">
      <a href="#/item/{id}">
        <img class="h-32 cover" src={img} alt="item" />
        <section class="p-2 ">
          <h3>{title}</h3>
          <p class="text-gray-500">posted on {createdOn}</p>
        </section>
      </a>
    </article>
  {/each}
</section>
