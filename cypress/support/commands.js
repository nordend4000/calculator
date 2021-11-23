Cypress.Commands.add("getCalculatorButton", text => {
	cy.contains(".calculator-grid > button", text)
})
