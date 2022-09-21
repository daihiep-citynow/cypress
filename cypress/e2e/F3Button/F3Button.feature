Feature: F3 Button Testing
  Scenario: visit homepage and press F3 Button
    When I visit homepage
    Then I should see a Button
    Then I press F3 button first
    Then I can see 3 number
    Then I press F3 button second
    Then I can see 2 number
    Then I press F3 button third
    Then I can see 1 number