/// <reference types='cypress' />

describe("1) login and check films table, 2) alter url manually, 3) check table and go back ", () => {
  // login
  beforeEach("log in", () => {
    // root
    cy.logIn();

    // films' table exist and has proper structure
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length.above", 0);
  });

  // logout
  afterEach("log out", () => {
    cy.logOut();
  });

  // change the url manually
  it("change the url manually and check the info table", () => {
    // change the url
    cy.visit(Cypress.config("baseUrl") + "/films/1");

    // table must exist with only one row
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length", 1);
  });

  // go back and check table and url
  it("go back and check url and table", () => {
    // change the url
    cy.visit(Cypress.config("baseUrl") + "/films/1");

    // table must exist with only one row
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length", 1);

    // go back
    cy.get("header button:last-child")
      .should("exist")
      .should("contain.html", "Back")
      .click();

    // check the new url whitch is the all films table
    cy.url().should("include", "/films");
  });
});
