describe('empty spec', () => {
    it('testing Pendidikan - menu lembaga pendidikan - katolik - taman seminari', () => {
        cy.visit('https://pusaka.impstudio.id/')
        
        cy.contains(" Pendidikan ").click()
        cy.contains("Lembaga Pendidikan").click()
        cy.contains("Katolik").click()
        cy.contains("Taman Seminari").click()
        cy.get('.btn-filter').click()
        cy.get(':nth-child(34) > .checkbox-inline').click()
        cy.wait(4000)
        cy.get('.default-form-wrapper > .btn').click()
        cy.wait(4000)
        cy.get("input[placeholder=\"Cari Lembaga\"]").type("santo petrus madi")
        cy.wait(5000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.get('.caption').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    
    })

    it('testing Pendidikan - menu lembaga pendidikan - katolik - Sekolah Menengah Agama Katolik (SMAK)', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Katolik").click()
      cy.contains("Sekolah Menengah Agama Katolik (SMAK)").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(20) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("negeri ende")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })
    
    it('testing Pendidikan - menu lembaga pendidikan - katolik - taman seminari', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Katolik").click()
      cy.contains("Perguruan Tinggi Keagamaan Katolik").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(20) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("stipar ende")
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
  
