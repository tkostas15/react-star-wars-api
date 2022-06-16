/// <reference types="cypress" />
import { mockHandlers } from "./exclude/mockHandlers";

describe("Log in and manipulate Films table", () => {
  // use specific handler for msw
  before("use msw server needed", () => {
    const { worker } = window.msw;
    worker.resetHandlers();
    worker.use(...mockHandlers);
  });

  // log in
  beforeEach("log in", () => {
    cy.logIn();
  });

  // log out
  afterEach("log out", () => {
    cy.logOut();
  });

  // check if table exists
  it.only("checking if films table exists and contains rows", () => {
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .should("exist")
      .find("tr")
      .should("have.length.above", 0);
  });

  // check if table has search on title field
  it("check search exists on title field", () => {
    cy.get("#text-filter-column-title");
  });

  // type in valid search
  it("search valid terms", () => {
    cy.get("#text-filter-column-title").type("hope");
    cy.wait(1000);
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length.above", 0);
  });

  // type in not valid search
  it("search not valid terms", () => {
    cy.get("#text-filter-column-title").type("wrong");
    cy.wait(1000);
    cy.get(".react-bootstrap-table table tbody").should("not.exist");
  });
});
