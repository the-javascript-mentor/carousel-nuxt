/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("right button works on a big screen", () => {
    cy.viewport(1400, 600);
    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);

    cy.get("[data-test-id='next']").click();

    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexNotVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexVisibleInCarousel(4);
    cy.isItemWithIndexVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);
  });

  it("autoplay works on a big screen", () => {
    cy.viewport(1400, 600);
    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);

    cy.wait(5500);

    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexNotVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexVisibleInCarousel(4);
    cy.isItemWithIndexVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);
  });

  it("right button works on a medium screen", () => {
    cy.viewport(1200, 600);
    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexNotVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);

    cy.get("[data-test-id='next']").click();

    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexNotVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);
  });

  it("right button works on a small screen", () => {
    cy.viewport(800, 600);
    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexNotVisibleInCarousel(3);
    cy.isItemWithIndexNotVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);

    cy.get("[data-test-id='next']").click();

    cy.isItemWithIndexNotVisibleInCarousel(0);
    cy.isItemWithIndexNotVisibleInCarousel(1);
    cy.isItemWithIndexVisibleInCarousel(2);
    cy.isItemWithIndexVisibleInCarousel(3);
    cy.isItemWithIndexNotVisibleInCarousel(4);
    cy.isItemWithIndexNotVisibleInCarousel(5);
    cy.isItemWithIndexNotVisibleInCarousel(6);
    cy.isItemWithIndexNotVisibleInCarousel(7);
    cy.isItemWithIndexNotVisibleInCarousel(8);
    cy.isItemWithIndexNotVisibleInCarousel(9);
  });
});
