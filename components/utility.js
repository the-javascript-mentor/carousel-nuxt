const productWidth = 240;

const shuffleArray = (array) => {
  return array;
  // Fisher-Yates shuffle
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  const arrayCopy = [...array];
  let currentIndex = arrayCopy.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }

  return arrayCopy;
};

const moveLastItemInTheFirstPosition = (array) => [
  array[array.length - 1],
  ...array.slice(0, -1),
];

const moveFirstItemInTheLastPosition = (array) => [...array.slice(1), array[0]];

const getNumberOfVisibleCarouselItems = () => {
  let items = 4;
  if (window.matchMedia("(max-width: 1280px)").matches) {
    items = 3;
  }
  if (window.matchMedia("(max-width: 920px)").matches) {
    items = 2;
  }
  return items;
};

export {
  shuffleArray,
  productWidth,
  getNumberOfVisibleCarouselItems,
  moveLastItemInTheFirstPosition,
  moveFirstItemInTheLastPosition,
};

export default {
  shuffleArray,
  productWidth,
  getNumberOfVisibleCarouselItems,
  moveLastItemInTheFirstPosition,
  moveFirstItemInTheLastPosition,
};
