/// <reference types="Cypress"/>

    Given(/^I am on CRM website$/, function () {
        cy.visit("https://ui.freecrm.com/")
        cy.location('protocol').should('include', 'https')
        cy.url().should('include', 'freecrm')
        });

    Then(/^I should see \"([^\"]*)\"$/, function (title) {
        cy.title().should('eq', title)
            
        });
      
    And(/^I enter \"([^\"]*)\" and \"([^\"]*)\"$/, function (username, password) {
        cy.get('input[name=email]').should('be.visible').type(username)
        cy.get('input[type=password]').should('be.visible').type(password)
        });
      
    And(/^I click login button$/, function () {
        cy.get('.fluid').should('be.visible').click()
      
        });

   
      
  
  