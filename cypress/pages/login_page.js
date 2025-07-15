// cypress/pages
// login_page.js

import { DashboardPage } from "./dashboard_page.js";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  // * Atomický přístup k metodám - každý krok v Cypress je v samostatné metodě
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  // * Sloučený přístup využívající již vytvořených metod
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }
}
