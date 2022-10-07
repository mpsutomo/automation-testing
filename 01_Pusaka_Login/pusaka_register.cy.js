describe('empty spec', () => {
  it('register', () => {
    cy.getCookies()
    
    // kunjungi Website
    cy.visit('https://pusaka.impstudio.id/public/register')

    // Input Data
    cy.get("input[placeholder=\"NIK\"]").type("12345678910")
    cy.get("input[placeholder=\"Nama Lengkap\"]").type("bambang")
    cy.get("input[placeholder=\"Email\"]").type("bambang@gmail.com")
    cy.get("input[placeholder=\"Nomor HP\"]").type("08123456789")
    cy.get("input[placeholder=\"Password\"]").type("bambang")
    cy.get("input[placeholder=\"Tanggal Lahir\"]").type("2012-12-12")
    cy.get('.form-control').type("JL. Sukamundur")
   
    // Selected Option
    cy.get('.selection').type("Islam{enter}")
    //cy.get('.select2-selection').click()
    cy.get('.selection').type("Kristen{enter}")
    //cy.get('.select2-selection').click()
    cy.get('.selection').type("Katolik{enter}")
    //cy.get('.select2-selection').click()
    cy.get('.selection').type("Buddha{enter}")
    //cy.get('.select2-selection').click()
    cy.get('.selection').type("Hindu{enter}")
    //cy.get('.select2-selection').click()
    cy.get('.selection').type("Khonghucu{enter}")
    
    // centang persetujuan
    cy.get('[type="checkbox"]').check()

  })
})