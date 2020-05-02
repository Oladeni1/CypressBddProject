Feature: login
  
Scenario Outline: Successful login Scenario
Given I am on CRM website
And I enter "<Username>" and "<Password>"
And I click login button
Then I should see "<Title>"

Examples:
| Username                   | Password  | Title         |
| olatundeoladeni@yahoo.com  | 1Latunde  | Cogmento CRM  |
