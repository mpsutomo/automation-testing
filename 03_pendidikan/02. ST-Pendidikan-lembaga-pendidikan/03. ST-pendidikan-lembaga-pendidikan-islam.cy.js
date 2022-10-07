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
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
        
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - pdf', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("PDF").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(12) > .checkbox-inline > input').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("ulya minhajurrosyidin")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
      
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - spm', () => {
    cy.visit('https://pusaka.impstudio.id/')

    cy.contains(" Pendidikan ").click()
    cy.contains("Lembaga Pendidikan").click()
    cy.contains("Islam").click()
    cy.contains("SPM").click()
    cy.get('.btn-filter').click()
    cy.get(':nth-child(16) > .checkbox-inline > input').click()
    cy.wait(4000)
    cy.get('.default-form-wrapper > .btn').click()
    cy.wait(4000)
    cy.get("input[placeholder=\"Cari Lembaga\"]").type("miftahul mubtadiin")
    cy.wait(5000)
    cy.get('#load_more').click({force: true})
    cy.wait(5000)
    cy.get('.caption').first().click({force: true})
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err);
      return false;
    })
    
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - Ma-had Aly', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("Ma'had Aly").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(16) > .checkbox-inline > input').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("data tidak ada")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - LPQ', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("LPQ").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(18) > .checkbox-inline > input').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("ad-dawah")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - MDT', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("MDT").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(17) > .checkbox-inline > input').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("Abdullah")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - Kesetaraan', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("Kesetaraan").click()
      cy.get('.btn-filter').click()
      cy.get(':nth-child(12) > .checkbox-inline > input').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("nurul mustofa")
      cy.wait(5000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.caption').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
    })

    it('testing Pendidikan - menu lembaga pendidikan - islam - Kesetaraan', () => {
      cy.visit('https://pusaka.impstudio.id/')
      
      cy.contains(" Pendidikan ").click()
      cy.contains("Lembaga Pendidikan").click()
      cy.contains("Islam").click()
      cy.contains("Madrasah").click()
      cy.get('.btn-filter').click()
      cy.get('.default-form-wrapper > :nth-child(8) > .checkbox-inline').click()
      cy.wait(4000)
      cy.get('.default-form-wrapper > .btn').click()
      cy.wait(4000)
      cy.get("input[placeholder=\"Cari Lembaga\"]").type("Buleleng")
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
