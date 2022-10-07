describe('empty spec', () => {
    // BAGIAN INFORMASI
        it('testing keagamaan hindu - menu kitab suci', () => {
            // kunjungi Website
            cy.visit('https://pusaka.impstudio.id/')
        
            // Perintah click
            cy.contains("Hindu").click()
            cy.contains("Kitab Suci").click()
            cy.wait(2000)
            cy.get('.title').first().click({force: true})
            cy.wait(15000)
            Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
            })
        })
    
        it('testing keagamaan hindu - menu tempat ibadah', () => {
            cy.visit('https://pusaka.impstudio.id/')
          
            // Menu Terdekat
            cy.contains("Hindu").click()
            cy.contains("Tempat Ibadah").click()
            cy.wait(4000)
            cy.scrollTo('bottom')
            cy.wait(2000)
            cy.get('#load_more').click({force: true})
            cy.wait(5000)
            cy.scrollTo('top')
            cy.wait(5000)
        
            // Filter dan Cari
            cy.get('#select2-provinsi-dropdown-container').type("Riau{enter}")
            cy.get('#select2-kabupaten-dropdown-container').type("Dumai{enter}")
            cy.get("input[placeholder=\"Cari Pura\"]").type("Dharma Kerta")
            cy.wait(5000)
            cy.get('.title').first().click({force: true})
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
            
        })
          
        it('testing keagamaan hindu - menu pilihan doa', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Pilihan Doa").click()
            cy.wait(2000)
            cy.contains("Doa Sehari-hari").click()
            // cy.get('.title').first().click({force: true})
            cy.contains("Doa bangun pagi").click()
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
      
        })
          
        it('testing keagamaan hindu - menu materi keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Materi Keagamaan").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Materi Keagamaan\"]").type("Tri Hita Karana")
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
        
        it('testing keagamaan hindu - menu tokoh agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Tokoh Agama").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Cari Nama  Tokoh Agama  - Hindu\"]").type("Aditya Dharmawan")        
            cy.wait(5000)
            cy.get('#select2-provinsi-dropdown-container').type("Aceh{enter}")
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
        it('testing keagamaan hindu - menu video rohani', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Video Rohani").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Video Rohani\"]").type("lingkungan")        
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
        it('testing keagamaan Hindu - menu lembaga agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Lembaga Agama").click()
            cy.get("input[placeholder=\"Cari Lembaga\"]").type("phdi kabupaten srengat")
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
    
        it('testing keagamaan Hindu - menu Lembaga Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Hindu").click()
            cy.contains("Lembaga Keagamaan").click()
            cy.get("input[placeholder=\"Cari Lembaga\"]").type("Muara Malungai")
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
    
        it('testing keagamaan hindu - menu pasraman', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Hindu").click()
            cy.contains("Pasraman").click()
            cy.wait(4000)
            cy.scrollTo('bottom')
            cy.wait(2000)
            cy.get('#load_more').click({force: true})
            cy.wait(5000)
            cy.scrollTo('top')
            cy.wait(5000)
        
            // Filter dan Cari
            cy.get("input[placeholder=\"Cari Pasraman\"]").type("kumara bina graha")
            cy.get('#select2-provinsi-dropdown-container').type("Bali{enter}")
            cy.get('#select2-kabupaten-dropdown-container').type("Jembrana{enter}")
            cy.wait(1000)
            cy.get('#select2-jenjang-dropdown-container').type("Pratama Widya Pasrama{enter}")
            cy.wait(5000)
            cy.scrollTo('bottom')
            cy.wait(2000)
            cy.scrollTo('top')
            cy.wait(2000)
            cy.get('#load_more').click({force: true})
            cy.wait(2000)
            cy.get('.title').first().click({force: true})
                Cypress.on('uncaught:exception', (err, runnable) => {
                console.log(err);
                return false;
                })
        })
     
    // BAGIAN Panduan
      // 3 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    
        it('testing keagamaan hindu - menu Pendaftaran Lembaga Agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Hindu").click()
            cy.contains("Pendaftaran Lembaga Agama").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan hindu - menu Pendaftaran Lembaga Keagamaan', () => {
          cy.visit('https://pusaka.impstudio.id/')
          cy.contains("Hindu").click()
          cy.contains("Pendaftaran Lembaga Keagamaan").click()
          cy.wait(2000)
          cy.contains('Unduh').click()
        })

        it('testing keagamaan hindu - menu Pendaftaran Pasraman', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Hindu").click()
            cy.contains("Pendaftaran Pasraman").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })
        

})