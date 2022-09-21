import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit homepage", () => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});

Then("I should see a Button", () => {
  cy.get('[data-test-id="F4"]').should("be.visible");
});

Then("I press F4 button first", () => {
  cy.get('[data-test-id="F4"]').trigger("keydown", { keyCode: 115 });
});

Then("I can see 140 room", () => {
  cy.get('[data-test-id="home-content"] > div')
    .should("be.visible")
    .should("have.length", 140);
});

Then("I press F4 button second", () => {
  cy.get('[data-test-id="F4"]').trigger("keydown", { keyCode: 115 });
});

Then("I can't see checkout room", () => {
  cy.get('[data-test-id="home-content"] > div:visible').should(
    "not.have.css",
    "background-color",
    "rgb(183, 154, 91)"
  );
});
