/// <reference types='cypress' />
import { mockHandlers } from "./exclude/mockHandlers";

describe("Log in and access specific film (first in films table)", () => {
  // use specific handler for msw
  before("use msw server needed", () => {
    const { worker } = window.msw;
    worker.resetHandlers();
    worker.use(...mockHandlers);
  });

  // login
  beforeEach("log in", () => {
    cy.logIn();
  });
  // logout
  afterEach("log out", () => {
    cy.logOut();
  });

  // check if films table exists
  it("check if films table exists", () => {
    cy.get(".react-bootstrap-table table");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length.above", 0);
  });

  // check if last row contains a link to specific film
  it("check if last row contains a link to specific film", () => {
    cy.get(
      ".react-bootstrap-table table tbody tr:last-child td:last-child"
    ).contains("a", "Check movie");
  });

  // check the url after clicking the link and go back
  it("check url and film's info table after clicking link and go back", () => {
    cy.get(
      ".react-bootstrap-table table tbody tr:last-child td:last-child a"
    ).click();
    cy.url().should("include", "/films/6");
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length", 1);

    // click the go back
    cy.get("header button:last-child")
      .should("exist")
      .should("contain.html", "Back")
      .click();

    // check if returned to films table
    cy.url().should("include", "/films");

    // check if films table is there
    cy.get(".react-bootstrap-table table");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length.above", 0);
  });
});
