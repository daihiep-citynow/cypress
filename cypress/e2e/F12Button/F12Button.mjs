import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit homepage", () => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});

Then("I should see a Button", () => {
  cy.get('[data-test-id="F12"]').should("be.visible");
});

Then("I press F12 button first", () => {
  cy.get('[data-test-id="F12"]').trigger("keydown", { keyCode: 123 });
});

Then("I can see EN in F12 button", () => {
  cy.get('[data-test-id="F12"]').should("contain.text", "EN");
});

Then("I press F12 button second", () => {
  cy.get('[data-test-id="F12"]').trigger("keydown", { keyCode: 123 });
});

Then("I can see VN in F12 button", () => {
  cy.get('[data-test-id="F12"]').should("contain.text", "VN");
});
