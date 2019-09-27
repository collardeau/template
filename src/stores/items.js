import { readable } from "svelte/store";
import { groupBy, toObj } from "../utils/helpers";
import { items } from "../data";

const groupByCategory = groupBy("category");
const itemsObj = toObj(items);
const getItem = id => itemsObj[id] || {};

export const itemsByCategory = readable(groupByCategory(items));

export function createItem(id) {
  return readable(getItem(id));
}

// export const categoryNames = derived(allItems, $allItems => {
//   return [...new Set($allItems.map(item => item.category))];
// });
