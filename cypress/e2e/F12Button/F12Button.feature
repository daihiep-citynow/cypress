Feature: F12 Button Testing
  Scenario: visit homepage and press F12 Button
    When I visit homepage
    Then I should see a Button
    Then I press F12 button first
    Then I can see EN in F12 button
    Then I press F12 button second
    Then I can see VN in F12 button