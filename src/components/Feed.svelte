<script>
  export let items = [];
</script>

<section class="center-column">
  {#each items as { id, img, title, createdOn }}
    <article class="mb-4 bg-white shadow">
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
