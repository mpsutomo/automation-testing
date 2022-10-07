describe('empty spec', () => {
    it('testing Pendidikan - menu Video Pembelajaran', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains(" Pendidikan ").click()
      
        
        cy.contains("Video Pembelajaran").click()
        cy.get('#select2-agama-dropdown-container').type("Islam{enter}")
        cy.get('#select2-jenjang-dropdown-container').type("SD{enter}")
        cy.get("input[placeholder=\"Cari Video\"]").type("materi sikap jujur")
        cy.wait(4000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.scrollTo('top')
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
        
    })

})
