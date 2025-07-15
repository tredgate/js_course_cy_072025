// operating_with_cypress_tests.cy.js
// cypress/e2e/learning

describe("Operujeme v Cypressu", () => {
  it("Přihlášení a ověření dashboard v Pmtool", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
    cy.get("#welcome-page-header").should(
      "have.text",
      "Vítej v testovací aplikaci Tredgate Project"
    );
  });
});
