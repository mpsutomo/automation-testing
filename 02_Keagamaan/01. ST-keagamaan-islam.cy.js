describe('empty spec', () => {
  
  // BAGIAN atas

    // 1 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    
    it('testing keagamaan islam - menu jadwal solat', () => {
      // kunjungi Website
      cy.visit('https://pusaka.kemenag.go.id/')

      // Perintah click
      cy.contains("Islam").click()
      cy.wait(10000)
      cy.get('#time').click()
      cy.wait(5000)
      cy.get('#cari').click()
      cy.get('#select2-provinsi-dropdown-container').type("Sumatera Utara{enter}")
      cy.get('#select2-kabupaten-dropdown-container').type("KAB. LANGKAT{enter}")
      cy.get('#select2-tahun-dropdown-container').type("2023{enter}")
      cy.get('#select2-bulan-dropdown-container').type("Januari{enter}")
      cy.get('#lihat-jadwal').click()
      cy.wait(5000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
      cy.scrollTo("bottom")
    })

    it('testing keagamaan islam - menu kiblat', () => {
      // kunjungi Website
      cy.visit('https://pusaka.impstudio.id/')
  
      // Perintah click
      cy.contains("Islam").click()
      cy.get('a.item-info-sholat').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    /*it('testing keagamaan islam - menu alamat ?', () => {
      // kunjungi Website
      cy.visit('https://pusaka.impstudio.id/')
  
      // Perintah click
      cy.contains("Islam").click()
      cy.get('#textAlamat').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })*/


  // BAGIAN INFORMASI
    it('testing keagamaan islam - menu kitab suci', () => {
      // kunjungi Website
      cy.visit('https://pusaka.impstudio.id/')
  
      // Perintah click
      cy.contains("Islam").click()
      cy.contains("Kitab Suci").click()
      cy.wait(5000)
      cy.contains('Al-Fātiḥah').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
  
      //Perintah Scroll
      cy.scrollTo('bottom')
      cy.wait(2000)
      cy.get('#load_more').click({force: true})
    })

    it('testing keagamaan islam - menu masjid', () => {
        cy.visit('https://pusaka.impstudio.id/')
      
        // Menu Terdekat
        cy.contains("Islam").click()
        cy.contains("Masjid").click()
        cy.wait(4000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#load_more_terdekat').click({force: true})
        cy.wait(5000)
        cy.scrollTo('top')
        cy.wait(5000)
  
        // Menu Cari
        cy.contains("Cari").click()
        cy.get('#select2-provinsi-dropdown-container').type("Aceh{enter}")
        cy.get('#select2-kabupaten-dropdown-container').type("Aceh Selatan{enter}")
        cy.get("input[placeholder=\"Cari Masjid\"]").type("Al-kautsar")
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        //cy.get('a[href*="2667"]').click()
        
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
        
    })
      
    it('testing keagamaan islam - menu pilihan doa', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Islam").click()
        cy.contains("Pilihan Doa").click()
        cy.wait(2000)
        cy.contains("Doa Sehari-hari").click()
        cy.contains("Doa Permohonan Ampunan").click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
  
    })
      
    it('testing keagamaan islam - menu materi keagamaan', () => {
        cy.visit('https://pusaka.impstudio.id/')
    
        cy.contains("Islam").click()
        cy.contains("Materi Keagamaan").click()
        cy.wait(2000)
        cy.get("input[placeholder=\"Materi Keagamaan\"]").type("Era Revolusi Digital")
        cy.contains("Era Revolusi Digital").click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })
    
    it('testing keagamaan islam - menu tokoh agama', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Tokoh Agama").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Cari Nama  Tokoh Agama  - Islam\"]").type("Ridwan Saleh")        
      cy.wait(5000)
      cy.get('#select2-provinsi-dropdown-container').type("Aceh{enter}")
      cy.wait(5000)
      cy.get('.title').first().click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    it('testing keagamaan islam - menu ormas', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Ormas").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Cari Nama Ormas\"]").type("Muslimat NU Kupang")        
      cy.wait(5000)
      cy.get('#select2-provinsi-dropdown-container').type("Nusa Tenggara Timur{enter}")
      cy.wait(2000)
      cy.scrollTo('bottom')
      cy.wait(1000)
      cy.scrollTo('top')
      cy.wait(1000)
      cy.get('#load_more').click({force: true})
      cy.wait(5000)
      cy.get('.title').first().click({force: true})
      // cy.get('a[href*="24970"]').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    // MENU VIDEO ROHANI MASIH TERKENDALA DI PLAY BUTTON VIDEO
    it('testing keagamaan islam - menu video rohani', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Video Rohani").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Video Rohani\"]").type("Ibadah kurban di tengah wabah pmk")        
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
        // BELUM SELESAI TEKAN VIDE YOUTUBE
    })

// BAGIAN Layanan Haji & Umrah
    // Menu estimasi keberangkatan
    it('testing keagamaan islam - menu estimasi keberangkatan (jika ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains("Islam").click()
      cy.contains("Estimasi Keberangkatan").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("1301579999")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    it('testing keagamaan islam - menu estimasi keberangkatan (jika tidak ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')

      cy.contains("Islam").click()
      cy.contains("Estimasi Keberangkatan").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("13015799993")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    // Menu cek pelunasan
    it('testing keagamaan islam - menu cek pelunasan (jika ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Cek Pelunasan").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("1300420980")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })
  
    it('testing keagamaan islam - menu estimasi keberangkatan (jika tidak ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Cek Pelunasan").click()
      cy.wait(3000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("13015799993")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(3000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    // Menu cek pembatalan
    it('testing keagamaan islam - menu cek pembatalan (jika ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Cek Pembatalan").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("2500015706")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })
  
    it('testing keagamaan islam - menu cek pembatalan (jika tidak ditemukan)', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Cek Pembatalan").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Nomor Porsi\"]").type("13015799993")
      cy.get('button').contains('Cari Nomor Porsi').click()        
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

  // Menu sertifikasi halal
    //BAGIAN Layanan
    // 00
    it('testing keagamaan islam - menu sertifikasi halal - cari produk halal', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Sertifikasi Halal").click()
      cy.contains("Cari Produk Halal").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Cari Nama Produk\"]").type("Indomie Goreng Rasa Ayam")        
      cy.wait(10000)
      cy.get('.title').first().click({force: true})
      cy.wait(10000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    it('testing keagamaan islam - menu cek sertifikat - cek sertifikat halal', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Sertifikasi Halal").click()
      cy.contains("Cek Sertifikat Halal").click()
      cy.wait(2000)
      cy.get("input[placeholder=\"Masukkan Nomor\"]").type("ID33110000034351120")
      cy.get('button').contains('Cek Nomor').click()        
      cy.wait(20000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })
    })

    // BAGIAN Prosedur
      // 2 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)
    it('testing keagamaan islam - menu sertifikasi halal - prosedur sertifikat halal', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Sertifikasi Halal").click()
      cy.contains("Prosedur Sertifikat Halal").click()
      cy.wait(2000)
      cy.contains('Unduh').click()
      
    })
  
    it('testing keagamaan islam - menu sertifikasi halal - alur proses', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Sertifikasi Halal").click()
      cy.contains("Alur Proses").click()
      cy.wait(2000)
      cy.contains('Unduh').click()
     
    })


// BAGIAN Panduan
  // 4 ERROR DIKECUALIKAN (ERROR TERJADI KARENA FITUR CYPRESS)

    it('testing keagamaan islam - menu pendaftaran haji', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Islam").click()
      cy.contains("Pendaftaran Haji").click()
      cy.wait(2000)
      cy.scrollTo('bottom')
      // cy.contains("Unduh").click()
      
    })

    it('testing keagamaan islam - menu pendaftaran haji khusus', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Islam").click()
      cy.contains("Pendaftaran Haji Khusus").click()
    })  

    it('testing keagamaan islam - menu pendaftaran umroh', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Islam").click()
      cy.contains("Pendaftaran Umroh").click() 
    })

    it('testing keagamaan islam - menu persyaratan Nikah', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains("Islam").click()
        cy.contains("Persyaratan Nikah").click()
        cy.wait(2000)
        cy.contains('Unduh').click()
    })

    it('testing keagamaan islam - menu bimbingan nikah', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains("Islam").click()
        cy.contains("Bimbingan Nikah").click()
        cy.wait(2000)
        cy.contains('Unduh').click()
    })

    it('testing keagamaan islam - menu Prosedur Legalisasi Buku Nikah', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Islam").click()
      cy.contains("Prosedur Legalisasi Buku Nikah").click()
      cy.wait(2000)
      cy.contains('Unduh').click()
    })
    
    it('testing keagamaan islam - menu Prosedur Layanan Nikah', () => {
      cy.visit('https://pusaka.impstudio.id/')
      cy.contains("Islam").click()
      cy.contains("Layanan Nikah").click()
      cy.wait(2000)
      cy.contains('Unduh').click()
    })
      
// Bagian Tempat Dan Lokasi
    it('testing keagamaan islam - menu asrama haji', () => {
      cy.visit('https://pusaka.impstudio.id/')
  
      cy.contains("Islam").click()
      cy.contains("Asrama Haji").click()
      cy.get("input[placeholder=\"Cari Asrama Haji\"]").type("Balikpapan")
      cy.wait(5000)
      cy.scrollTo('bottom')
      cy.wait(2000)
      cy.get('#load_more').click({force: true})
      cy.wait(2000)
      cy.scrollTo('top')
      cy.wait(2000)
      cy.get('a[href*="1"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })

    it('testing keagamaan islam - menu KUA', () => {
        cy.visit('https://pusaka.impstudio.id/')
      
        // Menu KUA Terdekat
        cy.contains("Islam").click()
        cy.contains("KUA").click()
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('#ContentTerdekat > .load-more-btn').click({force: true})
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
    
        // Menu Daftar KUA
        cy.contains("Daftar KUA").click()
        cy.get('#select2-provinsi-dropdown-container').type("Sumatera Utara{enter}")
        cy.get('#select2-kabupaten-dropdown-container').type("Kabupaten Tapanuli{enter}")
        cy.get("input[placeholder=\"Cari KUA\"]").type("Angkola")
        cy.wait(5000)
        cy.get('.title').first().click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
          console.log(err);
          return false;
        })
    })

    it('testing keagamaan islam - menu Layanan Haji & Umroh (PLHUT)', () => {
        cy.visit('https://pusaka.impstudio.id/')
        cy.contains("Islam").click()
        cy.contains("Layanan Haji & Umroh (PLHUT)").click()
        cy.get("input[placeholder=\"Cari PLHUT\"]").type("kantor kementerian agama kabupaten/kota")
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
      
    it('testing keagamaan islam - menu Penyelenggara Ibadah Haji Khusus (PIHK)', () => {
          cy.visit('https://pusaka.impstudio.id/')
          cy.contains("Islam").click()
          cy.contains("Penyelenggara Ibadah Haji Khusus (PIHK)").click()
          cy.get("input[placeholder=\"Cari PIHK\"]").type("gelora indah lestari")
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


})