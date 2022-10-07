describe('empty spec', () => {
    it('testing Pendidikan - menu lembaga pendidikan - kristen - Sekolah Menengah Teologi', () => {
        cy.visit('https://pusaka.impstudio.id/')
        
        cy.contains(" Pendidikan ").click()
        cy.contains("Lembaga Pendidikan").click()
        cy.contains("Kristen").click()
        cy.contains("Sekolah Menengah Teologi").click()
        cy.get('.btn-filter').click()
        cy.get(':nth-child(34) > .checkbox-inline').click()
        cy.wait(4000)
        cy.get('.default-form-wrapper > .btn').click()
        cy.wait(4000)
        cy.get("input[placeholder=\"Cari Lembaga\"]").type("kaimana")
        cy.wait(5000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.get('.caption').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    
    })

    it('testing Pendidikan - menu lembaga pendidikan - kristen - Perguruan Tinggi Agama Kristen', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click() 
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Kristen").click()
      cy.contains("Perguruan Tinggi Agama Kristen").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(22) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("institut agama kristen negeri palangkaraya")
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
  
