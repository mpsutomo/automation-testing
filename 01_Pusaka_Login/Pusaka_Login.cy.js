describe('empty spec', () => {
  it('Login', () => {
    cy.visit('https://pusaka.impstudio.id/public/login')
    cy.get(':nth-child(1) > input').type('0812345678')
    cy.get(':nth-child(2) > input').type('aaaaaaaaaa')
    cy.get('.default-form-wrapper > .btn').type('masuk')
    
  })
})

