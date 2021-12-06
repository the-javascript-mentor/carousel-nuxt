/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/vue";
import Carousel from "./Carousel.vue";

// TODO: Fix this component test

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Element.prototype.scrollTo = () => {};

test.skip("increments value on click", async () => {
  const products = [
    {
      id: "1",
      name: "1 - Shampoo",
      description: "Makes your hair clean",
      image: "https://www.placecage.com/300/300",
    },
    {
      id: "2",
      name: "2 - Headphones",
      description: "Speakers for your head",
      image: "https://placekitten.com/210/210",
    },
    {
      id: "3",
      name: "3 - Trousers",
      description: "Like shorts, but long",
      image: "https://www.placecage.com/320/320",
    },
    {
      id: "4",
      name: "4 - Lipstick",
      description: "Mouth paint",
      image: "https://placekitten.com/230/230",
    },
    {
      id: "5",
      name: "5 - Dog",
      description: "The best friend of people",
      image: "https://www.placecage.com/340/340",
    },
  ];

  render(Carousel, {
    props: {
      products,
    },
  });

  const nextButton = screen.getByText("👉");
  const previousButton = screen.getByText("👈");

  expect(nextButton).toBeVisible();
  expect(previousButton).toBeVisible();
});
