/// <reference types="cypress" />
import { mockHandlers } from "./exclude/mockHandlers";

describe("Login testing", () => {
  // use specific handler for msw
  before("use msw server needed", () => {
    const { worker } = window.msw;
    worker.resetHandlers();
    worker.use(...mockHandlers);
  });

  // before anything, login
  it("Log in", () => {
    cy.logIn();
  });

  // check if header is present
  it("checking header exists", () => {
    cy.logIn();
    cy.get("header");
  });

  // check header contains logout button
  it("checking logout button exists", () => {
    cy.logIn();
    cy.get("header button").contains("Log out");
  });

  // log out
  it("log out", () => {
    cy.logIn();
    cy.logOut();
  });
});
