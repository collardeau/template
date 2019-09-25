<script>
  import { link } from "svelte-spa-router";
  // https://www.youtube.com/watch?v=ZT5vwF6Ooig&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=16
  export let title = "title";
  export let links = [];
  export let colors = "bg-gray-900 text-white";
  let navIsOpen = false;
  let toggleMenu = () => (navIsOpen = !navIsOpen);
</script>

<header
  class="{colors} sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
  <div class="px-4 py-3 flex justify-between items-center sm:p-0">
    <div>
      <h1 class="font-semibold text-2xl capitalize">{title}</h1>
    </div>
    <div class="sm:hidden">
      <button
        type="button"
        on:click={toggleMenu}
        class="block text-gray-500 hover:text-white focus:text-white
        focus:outline-none">
        <svg
          class="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          {#if !navIsOpen}
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          {:else}
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
              1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
              10l7.071-7.071-1.414-1.414L10 8.586z" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
  <nav class="px-2 pt-1 pb-4 {navIsOpen ? 'block' : 'hidden'} sm:block sm:p-0">
    <ul class="sm:flex">
      {#each links as { href, name }, i}
        <li>
          <a
            {href}
            use:link
            class:mt-1={i}
            class="block px-2 py-1 text-white font-semibold rounded
            hover:bg-gray-800 sm:mt-0 sm:ml-4 capitalize">
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
