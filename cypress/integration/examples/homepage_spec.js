/// <reference types="Cypress" />
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  it("submits the form and gets a card with the name submitted", () => {
    cy.visit("http://localhost:3000"); // change URL to match your dev URL
    cy.get("input").type("Maria");
    cy.get("form").submit();
    cy.contains("Maria");
  });

  it("submits the form twice and gets a card with the names submitted", () => {
    cy.visit("http://localhost:3000"); // change URL to match your dev URL
    const names = ["Maria", "Roberto"];
    names.forEach((name) => {
      cy.get("input").type(name);
      cy.get("form").submit();
      cy.contains(name);
    });
  });
});
