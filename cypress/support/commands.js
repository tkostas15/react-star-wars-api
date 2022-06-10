// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("logIn", () => {
  cy.visit("/welcome");
  cy.get("#logInUserName").invoke("val").should("eq", "");
  cy.get("#logInPassword").invoke("val").should("eq", "");
  cy.get("button[type=submit]").should("be.disabled");
  cy.get("#logInUserName").type("cypress");
  cy.get("#logInPassword").type("testing");
  cy.get("button[type=submit]").should("not.be.disabled");
  cy.get("form").submit();
  cy.url().should("include", "/films");
});

Cypress.Commands.add("logOut", () => {
  cy.get("header button:first-child").click();
  cy.url().should("include", "/welcome");
  cy.get("#logInUserName").invoke("val").should("eq", "");
  cy.get("#logInPassword").invoke("val").should("eq", "");
  cy.get("button[type=submit]").should("be.disabled");
});
