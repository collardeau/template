<script>
  // https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/
  export let items = [];
</script>

<style>
  section {
    -webkit-overflow-scrolling: touch;
  }
  @supports (scroll-snap-align: start) {
    /* modern scroll snap points */
    section {
      scroll-snap-type: x mandatory;
    }
    section > div {
      scroll-snap-align: center;
    }
  }
  @supports not (scroll-snap-align: start) {
    /* old scroll snap points spec */
    section {
      -webkit-scroll-snap-type: mandatory;
      scroll-snap-type: mandatory;
      -webkit-scroll-snap-destination: 0 50%;
      scroll-snap-destination: 0 50%;
      -webkit-scroll-snap-points-x: repeat(100%);
      scroll-snap-points-x: repeat(100%);
    }
    section > div {
      scroll-snap-coordinate: 0 0;
    }
  }
</style>

<section class="flex overflow-x-auto">
  {#each items as { id, img, title, createdOn }}
    <div class="w-full bg-white pb-5 flex-shrink-0">
      <img class="w-64 mx-auto" src={img} alt="item" />
      <div class="w-64 mx-auto ">
        <h3>{title}</h3>
        <p class="text-gray-500">posted on {createdOn}</p>
      </div>
    </div>
  {/each}
</section>
