import { faker } from "@faker-js/faker";

describe("API testy", () => {
  it("Poslání requestu a testování response", () => {
    cy.request("https://tegb-backend-877a0b063d29.herokuapp.com/train").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Základní intercept test", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.exampleEmail();
    cy.intercept("/tegb/register").as("post_register");
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
    cy.get('[data-testid="register-button"]').click();
    cy.get('[data-testid="username-input"]').type(username);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="submit-button"]').click();
    cy.wait("@post_register").its("request.method").should("eq", "POST");
  });

  it("Poslání a otestování /auth/register endpointu", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const password = faker.internet.password();
    const email = faker.internet.exampleEmail();
    const age = faker.number.int({ min: 18, max: 99 });

    cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/auth/register",
      body: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("message");
      expect(response.body.user.email).to.eq(email);
      expect(response.body.firstName).to.be.a("string");
    });
  });
});
