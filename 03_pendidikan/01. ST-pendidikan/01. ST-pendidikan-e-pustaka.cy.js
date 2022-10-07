describe('empty spec', () => {
    it('testing Pendidikan - menu e-pustaka', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains(" Pendidikan ").click()
      
        // Menu Terdekat
        cy.contains("E-Pustaka").click()
        cy.get('#select2-agama-dropdown-container').type("Islam{enter}")
        cy.get('#select2-jenjang-dropdown-container').type("SD{enter}")
        cy.get("input[placeholder=\"Cari Buku\"]").type("Buku PAI dan Budi Pekerti Kelas VI Bab 2")
        cy.wait(4000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.scrollTo('top')
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        cy.wait(15000)
        cy.contains("Detail Buku").click()
    
        // Menu Cari
        cy.contains("Umum").click()
        cy.get('#select2-agama-dropdown-container').type("Islam{enter}")
        cy.get('#select2-jenjang-dropdown-container').type("Semua Jenjang{enter}")
        cy.get("input[placeholder=\"Cari Buku\"]").type("pendidikan islam")
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
        
    })

})
