import { readable, derived } from "svelte/store";

const getHashParts = () =>
  window.location.hash.replace(/^#\/?|\/$/g, "").split("/");

const hashParts = readable(getHashParts(), set => {
  window.onhashchange = () => set(getHashParts());
});

export const route = derived(hashParts, ps => ps[0]);
export const params = derived(hashParts, ([_, ...rest]) => rest);
