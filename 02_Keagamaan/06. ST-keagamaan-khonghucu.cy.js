describe('empty spec', () => {
    // BAGIAN INFORMASI
        it('testing keagamaan khonghucu - menu kitab suci', () => {
            // kunjungi Website
            cy.visit('https://pusaka.impstudio.id/')
        
            // Perintah click
            cy.contains("Khonghucu").click()
            cy.contains("Kitab Suci").click()
            cy.wait(2000)
            cy.get('.title').first().click({force: true})
            cy.wait(15000)
            Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
            })
        })
        
        it('testing keagamaan Khonghucu - menu tokoh agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Khonghucu").click()
            cy.contains("Dewan Rohaniawan").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Cari Nama  Dewan Rohaniawan  - Khonghucu\"]").type("Suryadi")        
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
          
        it('testing keagamaan buddha - menu materi keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Khonghucu").click()
            cy.contains("Materi Keagamaan").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Materi Keagamaan\"]").type("kehidupan keseharian umat")
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
        it('testing keagamaan khonghucu - menu video rohani', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Khonghucu").click()
            cy.contains("Video Rohani").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Video Rohani\"]").type("thema keimanan yang pokok")        
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
        it('testing keagamaan Khonghucu - menu yayasan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Khonghucu").click()
            cy.contains("Yayasan").click()
            cy.get("input[placeholder=\"Cari Yayasan\"]").type("Medan Permai")
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
    
        it('testing keagamaan Khonghucu - menu Penyuluh Khonghucu', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Khonghucu").click()
            cy.contains("Penyuluh Khonghucu").click()
            cy.get("input[placeholder=\"Cari Penyuluh Khonghucu\"]").type("Rudy leonard")
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
        
     
    // BAGIAN Panduan
      // 3 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    
        it('testing keagamaan Khonghucu - menu Pendaftaran Tempat Ibadah', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Khonghucu").click()
            cy.contains("Pendaftaran Tempat Ibadah").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan Khonghucu - menu Pendaftaran Yayasan', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Khonghucu").click()
            cy.contains("Pendaftaran Yayasan").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan Khonghucu - menu Pendaftaran Penyuluh Khonghucu', () => {
          cy.visit('https://pusaka.impstudio.id/')
          cy.contains("Khonghucu").click()
          cy.contains("Pendaftaran Penyuluh Khonghucu").click()
          cy.wait(2000)
          cy.contains('Unduh').click()
        })
        
            

})