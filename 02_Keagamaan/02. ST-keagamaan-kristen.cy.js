describe('empty spec', () => {
// BAGIAN INFORMASI
    it('testing keagamaan kristen - menu kitab suci', () => {
      // kunjungi Website
      cy.visit('https://pusaka.impstudio.id/')
  
      // Perintah click
      cy.contains("Kristen").click()
      cy.contains("Kitab Suci").click()
      cy.wait(15000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    it('testing keagamaan kristen - menu tempat ibadah', () => {
        cy.visit('https://pusaka.impstudio.id/')
      
        // Menu Terdekat
        cy.contains("Kristen").click()
        cy.contains("Tempat Ibadah").click()
        cy.wait(4000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more').click({force: true})
        cy.wait(5000)
        cy.scrollTo('top')
        cy.wait(5000)
    
        // Filter dan Cari
        cy.get('#select2-provinsi-dropdown-container').type("Aceh{enter}")
        cy.get('#select2-kabupaten-dropdown-container').type("Banda Aceh{enter}")
        cy.get("input[placeholder=\"Cari Gereja\"]").type("bnkp banda aceh")
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
        
    })
      
    it('testing keagamaan kristen - menu pilihan doa', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Kristen").click()
        cy.contains("Pilihan Doa").click()
        cy.wait(2000)
        cy.contains("Doa Harian").click()
        cy.contains("Doa Bapa Kami").click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
  
    })
    
    it('testing keagamaan kristen - menu Aras Nasional', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Kristen").click()
      cy.contains("Aras Nasional").click()
      cy.get("input[placeholder=\"Cari Nama Aras Nasional\"]").type("PGI")
      cy.wait(5000)
      cy.scrollTo('bottom')
      cy.wait(2000)
      cy.get('#load_more').click({force: true})
      cy.wait(2000)
      cy.scrollTo('top')
      cy.wait(2000)
      cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })
      
    it('testing keagamaan kristen - menu materi keagamaan', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Kristen").click()
        cy.contains("Materi Keagamaan").click()
        cy.wait(2000)
        cy.get("input[placeholder=\"Materi Keagamaan\"]").type("beriman dan berbuat di masa pandemi")
        cy.wait(5000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more').click({force: true})
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })
    
    it('testing keagamaan kristen - menu tokoh agama', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Kristen").click()
        cy.contains("Tokoh Agama").click()
        cy.wait(2000)
        cy.get("input[placeholder=\"Cari Nama  Tokoh Agama  - Kristen\"]").type("Ronny Mandang")        
        cy.wait(5000)
        cy.get('#select2-provinsi-dropdown-container').type("DKI Jakarta{enter}")
        cy.wait(5000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more').click({force: true})
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })

    // MENU VIDEO ROHANI MASIH TERKENDALA DI PLAY BUTTON VIDEO
    it('testing keagamaan kristen - menu video rohani', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Kristen").click()
        cy.contains("Video Rohani").click()
        cy.wait(2000)
        cy.get("input[placeholder=\"Video Rohani\"]").type("ditjen bimas kristen")        
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.wait(1000)
        cy.get('#load_more').click({force: true})
        cy.wait(1000)
        cy.get('.title').first().click({force: true})
        // cy.contains("#151").click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })

// BAGIAN Layanan & Keagamaaan
    it('testing keagamaan kristen - menu Rohaniawan Asing', () => {
        cy.visit('https://pusaka.impstudio.id/')

        cy.contains("Kristen").click()
        cy.contains("Rohaniawan Asing").click()
        cy.wait(2000)
        cy.get("input[placeholder=\"Cari Rohaniawan Asing\"]").type("kim dongmin")
        cy.wait(5000)
        cy.contains('KIM DONGMIN').click()
        // cy.get('a[href*="1"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })

    it('testing keagamaan kristen - menu Sinode', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains("Kristen").click()
      cy.contains("Sinode").click()
      cy.wait(5000)
      cy.get("input[placeholder=\"Cari Sinode\"]").type("GSI")
      cy.wait(2000)
      cy.get('#select2-provinsi-dropdown-container').type("Aceh{enter}")
      cy.wait(5000)
      cy.get('a[href*="2"]').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })



// BAGIAN Panduan
  // 3 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)

    it('testing keagamaan kristen - menu pendaftaran rohaniawan asing', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains("Kristen").click()
        cy.contains("Pendaftaran Rohaniawan Asing").click()
        cy.wait(2000)
        cy.contains('Unduh').click()
    })
    it('testing keagamaan kristen - menu pendaftaran sinode', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains("Kristen").click()
        cy.contains("Pendaftaran Sinode").click()
        cy.wait(2000)
        cy.contains('Unduh').click()
    }) 
    it('testing keagamaan kristen - menu Pendaftaran Tempat Ibadah', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Kristen").click()
      cy.contains("Pendaftaran Tempat Ibadah").click()
      cy.wait(2000)
      cy.contains('Unduh').click()
    })
  
})