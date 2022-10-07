describe('empty spec', () => {
    it('testing Pendidikan - menu lembaga pendidikan - buddha - sekolah mingggu buddha', () => {
        cy.visit('https://pusaka.impstudio.id/')
        
        cy.contains(" Pendidikan ").click()
        cy.contains("Lembaga Pendidikan").click()
        cy.contains("Buddha").click()
        cy.contains("Sekolah Minggu Buddha").click()
        cy.get('.btn-filter').click()
        cy.get(':nth-child(23) > .checkbox-inline').click()
        cy.wait(4000)
        cy.get('.default-form-wrapper > .btn').click()
        cy.wait(4000)
        cy.get("input[placeholder=\"Cari Lembaga\"]").type("ariyasacca")
        cy.wait(5000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.get('.caption').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    
    })

    it('testing Pendidikan - menu lembaga pendidikan - buddha - Nava Dhammaseka', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Nava Dhammaseka").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(21) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("Tk jaya")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - buddha - Mula Dhammaseka', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Mula Dhammaseka").click()
      cy.get('.btn-filter').click()
      cy.get('.default-form-wrapper > :nth-child(3) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("Mestika Abadi")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })

    })
  
    it('testing Pendidikan - menu lembaga pendidikan - buddha - pusdiklat', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Pusdiklat").click()
      cy.get('.btn-filter').click()
      cy.get('.default-form-wrapper > :nth-child(3) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("sad paramita")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })

    })

    it('testing Pendidikan - menu lembaga pendidikan - buddha - dhammaseka', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Dhammaseka").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(18) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("guang ming")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - buddha - dhammaseka', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Budhasiswa").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(18) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("LPB Samantabhadra")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - buddha - muda dhammaseka', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Buddha").click()
      cy.contains("Muda Dhammasekha").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(12) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("Muda Dhammasekha")
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
  
