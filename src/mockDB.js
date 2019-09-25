import faker from "faker";

let posts = [...Array(5)].map((_, i) => ({
  id: faker.random.uuid().split("-")[0],
  img: `images/faker/abstract-${i}.jpg`,
  title: faker.lorem.words(),
  createdOn: faker.date.past().toLocaleDateString()
}));

export function getPosts() {
  return new Promise(res => {
    setTimeout(() => {
      res(posts);
    }, 200);
  });
}
