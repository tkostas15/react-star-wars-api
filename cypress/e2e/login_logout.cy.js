/// <reference types="cypress" />

describe("Login testing", () => {
  // before anything, login
  it("Log in", () => {
    cy.logIn();
  });

  // check if header is present
  it("checking header exists", () => {
    cy.get("header");
  });

  // check header contains logout button
  it("checking logout button exists", () => {
    cy.get("header button").contains("Log out");
  });

  // log out
  it("log out", () => {
    cy.logOut();
  });
});
