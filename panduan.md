# 📖 Panduan Mengelola Website Intan Snack Purbalingga


## 📋 Daftar Isi
1. [Persiapan Sebelum Mulai](#persiapan-sebelum-mulai)
2. [Cara Mengganti Gambar di Halaman Utama](#cara-mengganti-gambar-di-halaman-utama)
3. [Cara Menambah Menu Baru](#cara-menambah-menu-baru)
4. [Cara Mengubah Menu yang Sudah Ada](#cara-mengubah-menu-yang-sudah-ada)
5. [Tips dan Trik](#tips-dan-trik)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Persiapan Sebelum Mulai

### Yang Anda Butuhkan:
- **Text Editor** (seperti Notepad++, Visual Studio Code, atau bahkan Notepad biasa)
- **Browser** (Chrome, Firefox, Edge, dll) untuk melihat hasil
- **Gambar baru** yang ingin ditambahkan (format JPG atau PNG)

### Struktur Folder Website:
```
📁 LandingPage/
├── 📄 index.html (halaman utama)
├── 📄 menu.html (halaman menu)
├── 📄 styles.css (pengaturan tampilan)
├── 📄 script.js (fungsi website)
└── 📁 imgs/ (tempat semua gambar)
    ├── 📁 assets/ (gambar utama website)
    └── 📸 gambar-menu-*.jpg (gambar menu makanan)
```

---

## 🖼️ Cara Mengganti Gambar di Halaman Utama

### 1. Mengganti Gambar Hero (Gambar Besar di Atas)

**Langkah-langkah:**

1. **Siapkan gambar baru:**
   - Ukuran ideal: 1920x1080 piksel atau lebih besar
   - Format: JPG atau PNG
   - Nama file: sebaiknya "Hero.jpg" (atau bisa nama lain)

2. **Masukkan gambar ke folder:**
   ```
   📁 imgs/assets/ ← Letakkan gambar hero baru di sini
   ```

3. **Edit file index.html:**
   - Buka file `index.html` dengan text editor
   - Cari baris ini (sekitar baris 47):
   ```html
   <img src="imgs/assets/Hero.jpg" alt="Intan Snack Purbalingga Storefront" />
   ```
   - Ganti `Hero.jpg` dengan nama file gambar baru Anda:
   ```html
   <img src="imgs/assets/gambar-baru-saya.jpg" alt="Intan Snack Purbalingga Storefront" />
   ```

4. **Simpan dan refresh browser** untuk melihat perubahan

### 2. Mengganti Logo

**Langkah-langkah:**

1. **Siapkan logo baru:**
   - Ukuran ideal: 200x200 piksel
   - Format: PNG (dengan background transparan) atau JPG
   - Nama file: "logo.png" atau "logo.jpg"

2. **Masukkan logo ke folder utama:**
   ```
   📁 LandingPage/ ← Letakkan logo di folder utama
   ```

3. **Edit file index.html:**
   - Cari baris ini (sekitar baris 34):
   ```html
   <img src="logo-placeholder.png" alt="Intan Snack Logo" id="header-img" />
   ```
   - Ganti dengan nama logo baru:
   ```html
   <img src="logo.png" alt="Intan Snack Logo" id="header-img" />
   ```

4. **Edit file menu.html juga** (baris 21):
   ```html
   <img src="logo.png" alt="Intan Snack Logo" id="header-img" />
   ```

---

## 🍰 Cara Menambah Menu Baru

### Langkah 1: Siapkan dan Tambahkan Gambar Menu Baru



1. **Ukuran dan Format:**
   - Ukuran ideal: **400x400 piksel** atau **600x600 piksel**
   - Format: **JPG** (ukuran file lebih kecil)
   - Ukuran file: maksimal **500KB** (untuk loading cepat)

2. **Edit gambar (opsional):**
   - Crop/potong gambar agar fokus ke makanan
   - Sesuaikan brightness dan contrast jika perlu
   - Bisa pakai apps: Canva, Photoshop, GIMP, atau editor HP

3. **Nama file yang benar:**
   - Format: **"Nama Makanan_Rp Harga.jpg"**
   - Contoh yang benar: `Kue_Lapis_Rp_3000.jpg`
   - Contoh yang salah: `Kue Lapis.JPG` atau `foto makanan baru.png`
   - 🚫 Hindari spasi dan karakter khusus (!@#$%^&*)

#### C. Masukkan Gambar ke Website
1. **Buka folder website** di komputer Anda
2. **Masuk ke folder imgs:**
   ```
   📁 LandingPage/
   └── 📁 imgs/ ← Masukkan gambar di sini
   ```
3. **Copy/paste gambar baru** ke dalam folder `imgs/`
4. **Pastikan nama file sama** dengan yang akan ditulis di kode nanti

#### D. Alternatif: Kompres Gambar Online
Jika gambar terlalu besar (>1MB), kompres dulu:
- 🌐 Buka **TinyPNG.com** atau **Compressor.io**
- Upload gambar Anda
- Download hasil kompresi
- Ganti nama file sesuai format di atas

#### E. Contoh Praktis Menambah Gambar
**Skenario:** Anda ingin menambah menu "Kue Lumpia" dengan harga Rp 2.500

1. **Foto kue lumpia** dengan HP/kamera
2. **Edit dan crop** gambar jika perlu
3. **Simpan dengan nama:** `Kue_Lumpia_Rp_2500.jpg`
4. **Copy file** ke folder `imgs/`
5. **Cek ukuran file** - pastikan di bawah 500KB

**✅ Checklist sebelum lanjut:**
- [ ] Gambar sudah ada di folder `imgs/`
- [ ] Nama file sesuai format yang benar
- [ ] Ukuran file tidak terlalu besar
- [ ] Gambar terlihat jelas dan menarik

---

### Langkah 2: Tambahkan Menu di Halaman Utama (index.html)

1. **Buka file index.html**
2. **Cari bagian menu** (sekitar baris 110-200):
   ```html
   <div class="menu-grid">
   ```
3. **Tambahkan menu baru** sebelum tag penutup `</div>`:

   ```html
   <!-- Kue Lumpia (sesuai contoh di atas) -->
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="100">
     <img src="imgs/Kue_Lumpia_Rp_2500.jpg" alt="Kue Lumpia" />
     <div class="menu-content">
       <h4 class="menu-title">Kue Lumpia</h4>
       <div>
         <p class="menu-price">Harga mulai <strong>Rp2.500/pcs</strong></p>
         <p class="menu-note">Kue lumpia dengan isian kacang hijau yang lezat.</p>
       </div>
     </div>
   </div>
   ```

**🔄 Ganti sesuai menu Anda:**
- `Kue_Lumpia_Rp_2500.jpg` → nama file gambar Anda
- `Kue Lumpia` → nama menu Anda  
- `Rp2.500/pcs` → harga menu Anda
- Deskripsi → sesuai dengan menu Anda

**📝 Catatan:** Struktur di index.html menggunakan `menu-tile` dengan `menu-content`, bukan `tile` dengan `tile-details`.

### Langkah 3: Tambahkan Menu di Halaman Menu (menu.html)

1. **Buka file menu.html**
2. **Cari bagian menu grid** (sekitar baris 35):
   ```html
   <div class="menu-grid full-menu">
   ```
3. **Cari menu tile yang kosong** atau tambahkan setelah menu terakhir:

**Cara mudah:** Scroll ke baris 700an, cari `</section>` dan sebelumnya ada `</div>`, di atas itu ada baris kosong. Copy code berikut ke baris kosong tersebut:

   ```html
   <!-- Kue Lumpia (sesuai contoh di atas) -->
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="50">
     <img src="imgs/Kue_Lumpia_Rp_2500.jpg" alt="Kue Lumpia" />
     <div class="menu-content">
       <h4 class="menu-title">Kue Lumpia</h4>
       <div>
         <p class="menu-price">Harga mulai <strong>Rp2.500/pcs</strong></p>
         <p class="menu-note">Kue lumpia dengan isian kacang hijau yang lezat dan renyah.</p>
       </div>
     </div>
   </div>
   ```

**🔄 Ganti sesuai menu Anda:**
- `Kue_Lumpia_Rp_2500.jpg` → nama file gambar Anda
- `Kue Lumpia` → nama menu Anda  
- `Rp2.500/pcs` → harga menu Anda
- Deskripsi → buat lebih detail untuk halaman menu

**📝 Catatan Penting:**
- Anda bisa mengisi menu tile kosong yang sudah ada dengan menambahkan gambar dan konten
- Gunakan format yang konsisten seperti contoh di atas
- Di menu.html, deskripsi boleh lebih panjang dan detail

### Langkah 4: Test dan Verifikasi

#### A. Cek Gambar Sudah Muncul
1. **Simpan semua file** yang sudah diedit (Ctrl+S)
2. **Buka website** di browser (double-click index.html)
3. **Refresh halaman** (F5 atau Ctrl+F5)
4. **Cek apakah gambar muncul:**
   - ✅ Gambar tampil dengan jelas
   - ✅ Nama menu sesuai
   - ✅ Harga benar
   - ✅ Deskripsi menarik

#### B. Test di Mobile
1. **Tekan F12** di browser (Developer Tools)
2. **Klik icon mobile** (toggle device toolbar)
3. **Pilih device** seperti iPhone atau Samsung
4. **Cek tampilan** menu baru di mobile

#### C. Troubleshooting Cepat
- **Gambar tidak muncul?** 
  - Cek nama file di kode sama dengan nama file asli
  - Pastikan gambar ada di folder `imgs/`
- **Layout berantakan?**
  - Pastikan tidak ada tag HTML yang kurang
  - Cek struktur kode sama dengan contoh

---

## ✏️ Cara Mengubah Menu yang Sudah Ada

### Mengisi Menu Tile yang Kosong (Khusus untuk menu.html)

**Banyak menu tile di menu.html yang masih kosong. Berikut cara mengisinya:**

1. **Buka file menu.html**
2. **Cari menu tile kosong** (yang terlihat seperti ini):
   ```html
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="100">
   </div>
   ```

3. **Isi dengan konten lengkap:**
   ```html
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="100">
     <img src="imgs/Nama Menu.jpg" alt="Nama Menu" />
     <div class="menu-content">
       <h4 class="menu-title">Nama Menu</h4>
       <div>
         <p class="menu-price">Harga mulai <strong>Rp2.500/pcs</strong></p>
         <p class="menu-note">Deskripsi singkat tentang menu ini.</p>
       </div>
     </div>
   </div>
   ```

### Mengganti Gambar Menu Lama

1. **Siapkan gambar baru** dengan nama yang sama atau ganti nama di kode
2. **Ganti gambar lama** di folder `imgs/`
3. **Atau edit kode** untuk mengganti nama file:

   **Di index.html, cari:**
   ```html
   <img src="imgs/Bika ambon.jpg" alt="Bika Ambon" />
   ```
   
   **Ganti dengan:**
   ```html
   <img src="imgs/Gambar Baru.jpg" alt="Bika Ambon" />
   ```

### Mengubah Harga Menu

**Di index.html:**
```html
<p class="price">Rp 2.000</p>
```

**Di menu.html:**
```html
<p class="menu-price">Harga mulai <strong>Rp2.000/pcs</strong></p>
```

**Ganti dengan harga baru:**
```html
<p class="menu-price">Harga mulai <strong>Rp2.500/pcs</strong></p>
```

### Mengubah Deskripsi Menu

**Di index.html:**
```html
<p>Kue tradisional yang lembut dan manis</p>
```

**Di menu.html:**
```html
<p class="menu-note">Kue tradisional yang lembut dan manis</p>
```

**Ganti dengan deskripsi baru:**
```html
<p class="menu-note">Deskripsi baru yang lebih menarik</p>
```

---

## 💡 Tips dan Trik

### ✅ Penamaan File Gambar
- **Gunakan nama yang jelas:** "Kue Lapis_Rp 3000.jpg"
- **Hindari spasi berlebihan:** gunakan underscore (_) atau dash (-)
- **Konsisten dengan format:** selalu sertakan harga di nama file

### ✅ Ukuran Gambar Optimal
- **Gambar Hero:** 1920x1080px atau lebih
- **Logo:** 200x200px
- **Menu:** 400x400px atau 300x300px
- **Ukuran file:** maksimal 2MB per gambar

### ✅ Format Gambar
- **JPG:** untuk foto makanan (ukuran file lebih kecil)
- **PNG:** untuk logo dengan background transparan

### ✅ Backup
- **Selalu backup** file asli sebelum mengedit
- **Simpan gambar lama** sebelum menggantinya

### ✅ Tips Mengelola Banyak Gambar Sekaligus
- **Buat folder sementara** untuk foto mentah sebelum diedit
- **Gunakan batch rename tools** untuk ganti nama banyak file sekaligus
- **Kompres semua gambar** sebelum upload ke website
- **Buat list nama menu** dan harga di notepad untuk konsistensi
- **Upload gambar bertahap** - test 2-3 menu dulu sebelum tambah banyak

### ✅ Organisasi File yang Baik
```
📁 LandingPage/
├── 📁 imgs/
│   ├── 📁 backup/          ← Simpan gambar lama di sini
│   ├── 📁 raw/             ← Foto mentah sebelum edit
│   └── 📸 menu-siap-*.jpg  ← Gambar yang sudah siap pakai
```

---

## 🔧 Troubleshooting

### ❌ Masalah Gambar Menu

#### Gambar Tidak Muncul (Muncul Icon Rusak)

**Penyebab dan Solusi:**

1. **Nama file tidak cocok**
   ```html
   <!-- Di kode tertulis: -->
   <img src="imgs/Kue_Lapis_Rp_2500.jpg" alt="..." />
   
   <!-- Tapi file aslinya bernama: -->
   Kue Lapis Rp 2500.JPG  ← Salah! Ada spasi dan huruf besar
   ```
   **Solusi:** Ganti nama file menjadi `Kue_Lapis_Rp_2500.jpg` (sesuai kode)

2. **File tidak ada di folder yang tepat**
   - ✅ Benar: `📁 imgs/Kue_Lapis_Rp_2500.jpg`
   - ❌ Salah: `📁 LandingPage/Kue_Lapis_Rp_2500.jpg`
   - ❌ Salah: `📁 imgs/assets/Kue_Lapis_Rp_2500.jpg`

3. **Format file tidak didukung**
   - ✅ Gunakan: `.jpg`, `.jpeg`, `.png`
   - ❌ Hindari: `.gif`, `.bmp`, `.webp`

4. **Ukuran file terlalu besar**
   - Jika gambar >5MB, website mungkin lambat loading
   - Kompres di TinyPNG.com atau Compressor.io

#### Gambar Muncul Tapi Pecah/Blur

**Penyebab:**
- Resolusi gambar terlalu kecil (misal 100x100px)
- Gambar di-stretch berlebihan

**Solusi:**
- Gunakan gambar minimal 400x400px
- Crop gambar persegi sebelum upload

#### Gambar Muncul Tapi Terpotong Aneh

**Penyebab:**
- Rasio gambar tidak sesuai (misal terlalu panjang/lebar)

**Solusi:**
- Edit gambar jadi rasio 1:1 (persegi)
- Atau 4:3 jika memang perlu persegi panjang

### ❌ Layout Menu Berantakan

**Solusi:**
- Pastikan setiap menu memiliki struktur HTML yang sama
- Periksa tidak ada tag yang terlewat (seperti `</div>`)
- Gunakan ukuran gambar yang konsisten

### ❌ Website Tidak Responsive di Mobile

**Solusi:**
- Gunakan gambar dengan ukuran yang tidak terlalu besar
- Pastikan text tidak terlalu panjang
- Test di browser mobile atau gunakan developer tools

---

## 📞 Bantuan Lebih Lanjut

Jika Anda mengalami masalah:

1. **Periksa kembali langkah-langkah** di panduan ini
2. **Bandingkan kode Anda** dengan contoh yang ada
3. **Backup dan coba lagi** dari awal jika perlu

---

## ✨ Selamat!

Anda sekarang dapat:
- ✅ **Foto dan edit gambar menu** dengan kualitas yang baik
- ✅ **Menambah gambar menu baru** ke folder dengan nama yang benar
- ✅ **Menambah menu baru** di kedua halaman (index.html dan menu.html)
- ✅ **Mengganti gambar hero dan logo** sesuai kebutuhan
- ✅ **Mengubah harga dan deskripsi** menu yang ada
- ✅ **Mengisi menu tile kosong** di menu.html
- ✅ **Troubleshooting masalah gambar** yang umum terjadi
- ✅ **Mengoptimalkan gambar** untuk performa website yang lebih baik

### 📋 Checklist Cepat untuk Menambah Menu Baru:
1. [ ] Foto menu dengan pencahayaan yang baik
2. [ ] Edit gambar jadi ukuran 400x400px, format JPG
3. [ ] Beri nama file: `Nama_Menu_Rp_Harga.jpg`
4. [ ] Simpan di folder `imgs/`
5. [ ] Tambah kode HTML di `index.html` (untuk halaman utama)
6. [ ] Tambah kode HTML di `menu.html` (untuk menu lengkap)
7. [ ] Test tampilan di browser desktop dan mobile
8. [ ] Refresh halaman untuk memastikan gambar muncul

**Semoga website Intan Snack Purbalingga semakin menarik dan mudah dikelola! 🎉**

---

*Panduan ini dibuat untuk memudahkan pengelolaan website secara mandiri. Simpan panduan ini sebagai referensi dan jangan ragu untuk bereksperimen dengan menu-menu baru!*
