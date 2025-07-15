describe("Náš první Cypress Test", () => {
  it("Otevření webové stránky", () => {
    cy.visit("https://tredgate.com/pmtool/");
  });
});
