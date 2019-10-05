<script>
  // svelte-responsive-header
  import { slide } from "svelte/transition";
  import DefaultButton from "./DefaultButton.svelte";
  export let toggleMenu;
  export let navIsOpen;
  export let defaultButtonClass;
  export let duration;
  export let bp;
  // todo: ability to change header tag
  // todo: run a function or open or close?
</script>

<div class="flex justify-between items-center">
  <slot name="left">left</slot>
  <div class="{bp}:hidden">
    <slot name="right-collapsed">
      <DefaultButton {toggleMenu} {navIsOpen} {defaultButtonClass} />
    </slot>
  </div>
</div>
<div class="hidden {bp}:block">
  <slot name="right">right</slot>
</div>
{#if navIsOpen}
  <div transition:slide={{ duration }} class="{bp}:hidden">
    <slot name="drawer">drawer</slot>
  </div>
{/if}
