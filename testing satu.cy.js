describe('empty spec', () => {
  it('testing Pendidikan - menu lembaga pendidikan - islam - pesantren', () => {
    cy.visit('https://pusaka.impstudio.id/')

    cy.contains(" Pendidikan ").click()
    cy.contains("Lembaga Pendidikan").click()
    cy.contains("Islam").click()
    cy.contains("Pesantren").click()
    cy.get('.btn-filter').click()
    cy.get(':nth-child(15) > .checkbox-inline > input').click()
    cy.get('.default-form-wrapper > .btn').click()
    cy.wait(4000)
    cy.get("input[placeholder=\"Cari Lembaga\"]").type("al fajru")
    cy.wait(5000)
    cy.get('#load_more').click({force: true})
    cy.wait(5000)
    cy.get('.caption').first().click({force: true})
})

})
