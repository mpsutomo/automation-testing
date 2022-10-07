describe('empty spec', () => {
    // BAGIAN INFORMASI
        it('testing keagamaan buddha - menu kitab suci', () => {
            // kunjungi Website
            cy.visit('https://pusaka.impstudio.id/')
        
            // Perintah click
            cy.contains("Buddha").click()
            cy.contains("Kitab Suci").click()
            cy.wait(15000)
            Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
            })
        })
    
        it('testing keagamaan buddha - menu tempat ibadah', () => {
            cy.visit('https://pusaka.impstudio.id/')
          
            // Menu Terdekat
            cy.contains("Buddha").click()
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
            cy.get("input[placeholder=\"Cari Vihara\"]").type("Vihara Maitri")
            cy.wait(5000)
            cy.get('.title').first().click({force: true})
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
            
        })
        
        it('testing keagamaan buddha - menu tokoh agama', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Tokoh Agama").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Cari Nama  Tokoh Agama  - Buddha\"]").type("Krishna Salim Aryamaitri")        
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

        it('testing keagamaan buddha - menu pilihan doa', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Pilihan Doa").click()
            cy.wait(2000)
            cy.contains("Doa Harian").click()
            // cy.get('.title').first().click({force: true})
            cy.contains("DOA SEBELUM TIDUR").click()
            Cypress.on('uncaught:exception', (err, runnable) => {
              console.log(err);
              return false;
            })
      
        })
          
        it('testing keagamaan buddha - menu materi keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Materi Keagamaan").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Materi Keagamaan\"]").type("Sikap terhadap mukjizat")
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
        it('testing keagamaan buddha - menu video rohani', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Video Rohani").click()
            cy.wait(2000)
            cy.get("input[placeholder=\"Video Rohani\"]").type("Legenda Kelinci Terpahat")        
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
        it('testing keagamaan buddha - menu organisasi', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Organisasi").click()
            cy.get("input[placeholder=\"Cari Organisasi\"]").type("Dharma ratna")
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
    
        it('testing keagamaan buddha - menu Majelis / Perkumpulan Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Majelis/Perkumpulan Keagamaan").click()
            cy.get("input[placeholder=\"Cari Mejelis/Perkumpulan\"]").type("pengurus cabang majelis pandita buddha maitreya indonesia (pc mapanbumi)")
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

        it('testing keagamaan buddha - menu yayasan keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Yayasan Keagamaan").click()
            cy.get("input[placeholder=\"Cari Yayasan Keagamaan\"]").type("murni sakti idi")
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
        
        it('testing keagamaan buddha - menu Sanggar Seni Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
        
            cy.contains("Buddha").click()
            cy.contains("Sanggar Seni Keagamaan").click()
            cy.get("input[placeholder=\"Cari Sanggar Seni Keagamaan\"]").type("seni keagamaan buddha sriwijaya - kota kapur ")
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
      // 5 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    
        it('testing keagamaan Buddha - menu Pendaftaran Tempat Ibadah', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Buddha").click()
            cy.contains("Pendaftaran Tempat Ibadah").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan Buddha - menu Pendaftaran Organisasi', () => {
          cy.visit('https://pusaka.impstudio.id/')
          cy.contains("Buddha").click()
          cy.contains("Pendaftaran Organisasi").click()
          cy.wait(2000)
          cy.contains('Unduh').click()
        })

        it('testing keagamaan Buddha - menu Pendaftaran Majelis Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Buddha").click()
            cy.contains("Pendaftaran Majelis Keagamaan").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan Buddha - menu Pendaftaran Yayasan Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Buddha").click()
            cy.contains("Pendaftaran Yayasan Keagamaan").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })

        it('testing keagamaan Buddha - menu Pendaftaran Sanggar Seni Keagamaan', () => {
            cy.visit('https://pusaka.impstudio.id/')
            cy.contains("Buddha").click()
            cy.contains("Pendaftaran Sanggar Seni Keagamaan").click()
            cy.wait(2000)
            cy.contains('Unduh').click()
        })
        

})