describe('Phonebook', () => {
  it('can navigate to front page', () => {
    cy.visit('http://localhost:3001')
    cy.contains('bob burger')
  })
})