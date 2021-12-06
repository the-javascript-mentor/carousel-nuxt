import {
  shuffleArray,
  moveLastItemInTheFirstPosition,
  moveFirstItemInTheLastPosition,
} from "./utility";

describe("shuffleArray", () => {
  it("should return an array of the same size", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);
    expect(originalArray.length).toEqual(shuffledArray.length);
  });

  it("should contain all the elements of the original array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);
    originalArray.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });

  it("should preserve duplicates", () => {
    const originalArray = [1, 1, 2, 2, 3, 3, 3];
    const shuffledArray = shuffleArray(originalArray);
    expect(shuffledArray.filter((element) => element === 1)).toHaveLength(2);
    expect(shuffledArray.filter((element) => element === 2)).toHaveLength(2);
    expect(shuffledArray.filter((element) => element === 3)).toHaveLength(3);
  });

  it("should work with huge arrays", () => {
    const originalArray = [...Array(10000).keys()];
    const shuffledArray = shuffleArray(originalArray);
    expect(originalArray.length).toEqual(shuffledArray.length);
    originalArray.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });
});

describe("moveLastItemInTheFirstPosition", () => {
  it("should work correctly", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const updatedArray = moveLastItemInTheFirstPosition(originalArray);
    expect(updatedArray).toEqual([5, 1, 2, 3, 4]);
  });
});

describe("moveFirstItemInTheLastPosition", () => {
  it("should work correctly", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const updatedArray = moveFirstItemInTheLastPosition(originalArray);
    expect(updatedArray).toEqual([2, 3, 4, 5, 1]);
  });
});
