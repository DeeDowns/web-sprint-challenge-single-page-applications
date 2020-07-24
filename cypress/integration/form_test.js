
describe('can add text to the name input', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the form page through the to form button', () => {
        cy.get('button').click()
    })
    it('can get name input and add text', () => {
        cy.get('input[name="name"]').type('Dee')
    })
})


describe('can select multiple toppings', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the form page through the to form button', () => {
        cy.get('button').click()
    })
    it('can get pepperoni input and select it', () => {
        cy.get('input[name="pepperoni"]').click()
    })
    it('can get sausage input and select it', () => {
        cy.get('input[name="sausage"]').click()
    })
    it('can get anchovies input and select it', () => {
        cy.get('input[name="anchovies"]').click()
    })
    it('can get extraCheese input and select it', () => {
        cy.get('input[name="extraCheese"]').click()
    })
})