/// <reference types='cypress' />

describe("Log in and access specific film (last in films table)", () => {
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

  // check the url after clicking the link
  it("check url and film's info table after clicking link", () => {
    cy.get(
      ".react-bootstrap-table table tbody tr:last-child td:last-child a"
    ).click();
    cy.url().should("include", "/films/6");
    cy.get(".react-bootstrap-table table").should("exist");
    cy.get(".react-bootstrap-table table tbody")
      .find("tr")
      .should("have.length", 1);
  });
});
