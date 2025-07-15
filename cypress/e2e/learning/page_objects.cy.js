// page_objects.cy.js
// cypress/e2e/learning

import { DashboardPage } from "../../pages/dashboard_page.js";
import { LoginPage } from "../../pages/login_page.js";

describe("Page Object testy", () => {
  it("Přihlášení do Pmtoolu (atomické metody)", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Přihlášení do Pmtoolu (sloučené metody)", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.login("cypress_zima_2024", "Zima2024Cypress");
  });

  it("Kontrola nadpisu a odhlášení", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    loginPage.openPmtool();
    loginPage.login("cypress_zima_2024", "Zima2024Cypress");
    dashboardPage.dashboardTitleHaveText(
      "Vítej v testovací aplikaci Tredgate Project"
    );
    dashboardPage.logout();
  });

  it("Využití fluent interface v POM", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .logout();
  });
});
