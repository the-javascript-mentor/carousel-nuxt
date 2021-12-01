const shuffleArray = (array) => {
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

export { shuffleArray };

export default { shuffleArray };
