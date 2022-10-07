describe('empty spec', () => {
    it('testing Pendidikan - menu lembaga pendidikan - khonghucu - sekolah minggu', () => {
        cy.visit('https://pusaka.impstudio.id/')
        
        cy.contains(" Pendidikan ").click()
        cy.contains("Lembaga Pendidikan").click()
        cy.contains("Khonghucu").click()
        cy.contains("Sekolah Minggu").click()
        cy.get('.btn-filter').click()
        cy.get(':nth-child(26) > .checkbox-inline').click()
        cy.wait(4000)
        cy.get('.default-form-wrapper > .btn').click()
        cy.wait(4000)
        cy.get("input[placeholder=\"Cari Lembaga\"]").type("bitung")
        cy.wait(5000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.get('.caption').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    
    })
  
  })
  
