describe('empty spec', () => {
    // BAGIAN INFORMASI
        it('testing keagamaan katolik - menu kitab suci', () => {
          // kunjungi Website
          cy.visit('https://pusaka.impstudio.id/')
      
          // Perintah click
          cy.contains("Katolik").click()
          cy.contains("Kitab Suci").click()
          cy.wait(15000)
          Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
        })
    
        it('testing keagamaan katolik - menu tempat ibadah', () => {
            cy.visit('https://pusaka.impstudio.id/')
          
            // Menu Terdekat
            cy.contains("Katolik").click()
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
            cy.get("input[placeholder=\"Cari Gereja\"]").type("Gereja katolik paroki hati kudus yesus keuskupan agung medan")
            cy.wait(5000)
            cy.get('.title').first().click({force: true})
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
            
        })
          
        it('testing keagamaan katolik - menu pilihan doa', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Katolik").click()
            cy.contains("Pilihan Doa").click()
            cy.wait(2000)
            cy.contains("Doa Harian").click()
            // cy.get('.title').first().click({force: true})
            cy.contains("Doa Tanda Salib").click()
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
      
        })
          
        it('testing keagamaan katolik - menu materi keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Katolik").click()
            cy.contains("Materi Keagamaan").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Materi Keagamaan\"]").type("pojok renungan harian penyuluh agama katolik")
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
        
        it('testing keagamaan katolik - menu tokoh agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Katolik").click()
            cy.contains("Tokoh Agama").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Cari Nama  Tokoh Agama  - Katolik\"]").type("Mgr. Fransiskus Tuaman Sasfo Sinaga")        
            cy.wait(5000)
            cy.get('#select2-provinsi-dropdown-container').type("Sumatera Utara{enter}")
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
        
            cy.contains("Katolik").click()
            cy.contains("Video Rohani").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Video Rohani\"]").type("Lukas Metropolitan")        
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
        it('testing keagamaan katolik - menu Rohaniawan Asing', () => {
            cy.visit('https://pusaka.impstudio.id/')
    
            cy.contains("Katolik").click()
            cy.contains("Rohaniawan Asing").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Cari Rohaniawan Asing\"]").type("Bai Shuping")
            cy.wait(5000)
            cy.contains('Bai Shuping').click()
            // cy.get('a[href*="1"]').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
        })
    
    
    // BAGIAN Panduan
      // 2 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    
        it('testing keagamaan katolik - menu pendaftaran rohaniawan asing', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Katolik").click()
            cy.contains("Pendaftaran Rohaniawan Asing").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan katolik - menu Pendaftaran Tempat Ibadah', () => {
          cy.visit('https://pusaka.impstudio.id/')
          cy.contains("Katolik").click()
          cy.contains("Pendaftaran Tempat Ibadah").click()
          cy.wait(2000)
          cy.contains('Unduh').click()
        })
       
})