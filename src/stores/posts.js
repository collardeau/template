import { getPosts } from "../mockDB";
import { readable, writable } from "svelte/store";

export const postsLoading = writable(true);

export const posts = readable([], async set => {
  set(await getPosts());
  postsLoading.set(false);
});
