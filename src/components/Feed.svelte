<script>
  import { posts, postsLoading } from "../stores/posts";
</script>

<section>
  {#if $postsLoading}
    <p>Loading...</p>
  {:else}
    <section class="max-w-xl mx-auto">
      {#each $posts as { img, title, createdOn }}
        <article class="bg-white mt-4">
          <img class="h-32 w-full object-cover" src={img} alt="test-image" />
          <section class="p-2 ">
            <h3 class="text-2xl font-semibold capitalize p-0 m-0">{title}</h3>
            <p class="text-gray-500">posted on {createdOn}</p>
          </section>
        </article>
      {/each}
    </section>
  {/if}

</section>
