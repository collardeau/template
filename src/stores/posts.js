import { getPosts } from "../mockDB";
import { readable, writable } from "svelte/store";

export const postsLoading = writable(true);

export const posts = readable([], set => {
  getPosts().then(ps => {
    set(ps);
    postsLoading.set(false);
  });
});
