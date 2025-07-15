import { LoginPage } from "./login_page.js";

export class DashboardPage {
  constructor() {
    this.dashboardTitle = "#welcome-page-header";
    this.profileMenu = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  dashboardTitleHaveText(titleText) {
    cy.get(this.dashboardTitle).should("have.text", titleText);
    return this;
  }

  logout() {
    cy.get(this.profileMenu).click();
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
