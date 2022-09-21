import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit homepage", () => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});

Then("I should see a Button", () => {
  cy.get('[data-test-id="F1"]').should("be.visible");
});

Then("I press F1 button first", () => {
  cy.get('[data-test-id="F1"]').trigger("keydown", { keyCode: 112 });
});

Then("I can see 2 number", () => {
  cy.get('[data-testid="page-number"]').should("have.text", "2");
});

Then("I press F1 button second", () => {
  cy.get('[data-test-id="F1"]').trigger("keydown", { keyCode: 112 });
});

Then("I can see 3 number", () => {
  cy.get('[data-testid="page-number"]').should("have.text", "3");
});

Then("I press F1 button third", () => {
  cy.get('[data-test-id="F1"]').trigger("keydown", { keyCode: 112 });
});

Then("I can see 1 number", () => {
  cy.get('[data-testid="page-number"]').should("have.text", "1");
});
