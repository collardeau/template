import faker from "faker";

let id = 0;
function createItems(num = 3) {
  return [...Array(num)].map((_, i) => {
    let title = faker.lorem.words();
    return {
      id: `post-${id++}`,
      title,
      text: faker.lorem.sentences(),
      createdOn: faker.date.past().toLocaleDateString()
    };
  });
}

export let abstractItems = createItems(6).map((s, i) => ({
  ...s,
  img: `images/lorempixels/abstract-${i}.jpg`,
  category: "abstract"
}));

export let animalItems = createItems(4).map((s, i) => ({
  ...s,
  img: `images/lorempixels/animal-${i}.jpg`,
  category: "animal"
}));

export let items = [...abstractItems, ...animalItems];
