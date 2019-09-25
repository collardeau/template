import { getSummaries, getItem } from "../mockDB";
import { readable, writable } from "svelte/store";

let itemsCache = {};
export const itemLoading = writable(false);
function createItem() {
  const { subscribe, set } = writable({});
  const load = id => {
    let cache = itemsCache[id];
    if (cache) return set(cache.data);
    itemLoading.set(true);
    getItem(id).then(item => {
      set(item);
      itemLoading.set(false);
      itemsCache[id] = {
        data: item,
        fetchedAt: new Date()
      };
    });
  };
  return {
    subscribe,
    load
  };
}

export const item = createItem();

let summariesCache = {};
export const summariesLoading = writable(false);
export const summaries = readable([], set => {
  const { data } = summariesCache;
  if (data) return set(data);
  summariesLoading.set(true);
  getSummaries().then(summs => {
    set(summs);
    summariesLoading.set(false);
    summariesCache = {
      data: summs,
      fetchedAt: new Date()
    };
    // preload items
    summs.forEach(s => {
      item.load(s.id);
    });
  });
});
