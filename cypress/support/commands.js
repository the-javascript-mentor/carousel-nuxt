Cypress.Commands.add("isItemWithIndexVisibleInCarousel", (index) => {
  cy.get('[data-test-id="product-list"]').then((wrapper) => {
    cy.get(`[data-test-id="product"][data-test-index=${index}]`).then(
      (product) => {
        expect(
          wrapper[0].getBoundingClientRect().left <=
            product[0].getBoundingClientRect().left &&
            wrapper[0].getBoundingClientRect().right >=
              product[0].getBoundingClientRect().left
        ).to.be.true;
      }
    );
  });
});

Cypress.Commands.add("isItemWithIndexNotVisibleInCarousel", (index) => {
  cy.get('[data-test-id="product-list"]').then((wrapper) => {
    cy.get(`[data-test-id="product"][data-test-index=${index}]`).then(
      (product) => {
        expect(
          wrapper[0].getBoundingClientRect().left <=
            product[0].getBoundingClientRect().left &&
            wrapper[0].getBoundingClientRect().right >
              product[0].getBoundingClientRect().left
        ).to.be.false;
      }
    );
  });
});
