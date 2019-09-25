import faker from "faker";

let delay = 500;

let itemSummaries = [...Array(5)].map((_, i) => ({
  id: `item-${i + 1}`,
  img: `images/faker/abstract-${i}.jpg`,
  title: faker.lorem.words(),
  createdOn: faker.date.past().toLocaleDateString()
}));

let items = itemSummaries.map(s => ({
  ...s,
  text: faker.lorem.sentences()
}));

let itemsObj = items.reduce(
  (acc, next) => ({
    ...acc,
    [next.id]: next
  }),
  {}
);

export function getSummaries() {
  return new Promise(res => {
    setTimeout(() => {
      res(itemSummaries);
    }, delay);
  });
}

export function getItem(itemId) {
  let item = itemsObj[itemId] || null;
  return new Promise(res => {
    setTimeout(() => {
      res(item);
    }, delay);
  });
}
