# 📖 Panduan Mengelola Website Intan Snack Purbalingga

> **Update Terbaru:** Website sudah dilengkapi dengan hamburger menu modern dengan animasi skewed, favicon logo, dan responsif mobile design.

## 📋 Daftar Isi
1. [Persiapan Sebelum Mulai](#persiapan-sebelum-mulai)
2. [Fitur-Fitur Website Terbaru](#fitur-fitur-website-terbaru)
3. [Cara Mengganti Gambar di Halaman Utama](#cara-mengganti-gambar-di-halaman-utama)
4. [Cara Menambah Menu Baru](#cara-menambah-menu-baru)
5. [Cara Mengubah Menu yang Sudah Ada](#cara-mengubah-menu-yang-sudah-ada)
6. [Tips dan Trik](#tips-dan-trik)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Persiapan Sebelum Mulai

### Yang Anda Butuhkan:
- **Text Editor** (seperti Notepad++, Visual Studio Code, atau bahkan Notepad biasa)
- **Browser** (Chrome, Firefox, Edge, dll) untuk melihat hasil
- **Gambar baru** yang ingin ditambahkan (format JPG atau PNG)

### Struktur Folder Website Terbaru:
```
📁 LandingPage/
├── 📄 index.html (halaman utama dengan hamburger menu modern)
├── 📄 menu.html (halaman menu lengkap)
├── 📄 panduan.md (panduan ini)
├── 📄 styles.css (pengaturan tampilan)
├── 📄 script.js (fungsi website)
├── 📁 carousel_example/ (contoh carousel - tidak digunakan)
└── 📁 imgs/ (tempat semua gambar menu)
    ├── 📸 *.jpg (55+ gambar menu makanan)
    └── 📁 assets/ (gambar utama website)
        ├── 📸 Hero.jpg (gambar utama halaman)
        ├── 📁 carousel/ (gambar carousel)
        └── 📁 logo/
            ├── 📸 favicon.ico (icon browser)
            └── 📸 intansnack_logo.png (logo website)
```

---

## ✨ Fitur-Fitur Website Terbaru

### 🍔 Hamburger Menu Modern
- **Animasi Burger Bars:** Tiga garis yang berubah jadi X saat diklik
- **Overlay Skewed:** Menu fullscreen dengan efek miring dan band kuning
- **Smooth Transitions:** Animasi halus dengan cubic-bezier
- **Mobile Responsive:** Otomatis aktif di layar kecil (<768px)

### 🖼️ Favicon Logo
- **Logo di Browser Tab:** Intan Snack logo muncul di tab browser
- **Multi-Format Support:** ICO, PNG untuk berbagai device
- **Apple Touch Icon:** Icon untuk iPhone/iPad home screen

### 📱 Responsive Design
- **Mobile-First Approach:** Dioptimalkan untuk smartphone
- **Desktop Compatible:** Tampilan sempurna di layar besar
- **Touch-Friendly:** Button dan navigasi mudah di-tap

### 🎨 Modern UI Elements
- **Gradient Backgrounds:** Warna gradasi yang menarik
- **Card-Based Layout:** Menu ditampilkan dalam kartu modern
- **Hover Effects:** Efek interaktif saat cursor diarahkan
- **Smooth Scrolling:** Perpindahan halaman yang mulus

---

## 🖼️ Cara Mengganti Gambar di Halaman Utama

### 1. Mengganti Gambar Hero (Gambar Besar di Atas)

**Langkah-langkah:**

1. **Siapkan gambar baru:**
   - Ukuran ideal: 1920x1080 piksel atau lebih besar
   - Format: JPG atau PNG
   - Nama file: sebaiknya "Hero.jpg" (untuk konsistensi)

2. **Masukkan gambar ke folder yang tepat:**
   ```
   📁 imgs/assets/ ← Letakkan gambar hero baru di sini
   ```

3. **Edit file index.html:**
   - Buka file `index.html` dengan text editor
   - Cari baris ini (sekitar baris 415):
   ```html
   <img src="imgs/assets/Hero.jpg" alt="Intan Snack Purbalingga Storefront" width="600" height="400" />
   ```
   - Jika ingin ganti nama file, ubah `Hero.jpg` dengan nama file baru:
   ```html
   <img src="imgs/assets/gambar-baru-saya.jpg" alt="Intan Snack Purbalingga Storefront" width="600" height="400" />
   ```

4. **Simpan dan refresh browser** untuk melihat perubahan

### 2. Mengganti Logo Website

**Langkah-langkah:**

1. **Siapkan logo baru:**
   - Ukuran ideal: 200x200 piksel atau lebih
   - Format: PNG (dengan background transparan) lebih baik
   - Nama file: "intansnack_logo.png" (untuk konsistensi)

2. **Masukkan logo ke folder yang tepat:**
   ```
   📁 imgs/assets/logo/ ← Letakkan logo baru di sini
   ```

3. **Edit kedua file HTML:**
   
   **index.html** (sekitar baris 396):
   ```html
   <img src="imgs\assets\logo\intansnack_logo.png" alt="Intan Snack Logo" id="header-img" />
   ```
   
   **menu.html** (sekitar baris 25):
   ```html
   <img src="imgs\assets\logo\intansnack_logo.png" alt="Intan Snack Logo" id="header-img" />
   ```

4. **Update Favicon (Icon Browser):**
   - Logo yang sama juga akan jadi icon di tab browser
   - Sudah otomatis ter-link, tidak perlu edit kode

### 3. Mengganti Favicon (Icon Browser Tab)

Favicon sudah otomatis menggunakan logo website. Jika ingin ganti:

1. **Siapkan icon khusus:**
   - Ukuran: 32x32 atau 16x16 piksel
   - Format: ICO atau PNG
   - Nama file: "favicon.ico"

2. **Letakkan di folder logo:**
   ```
   📁 imgs/assets/logo/favicon.ico
   ```

3. **File sudah ter-link otomatis** di kedua halaman HTML

---

## 🍰 Cara Menambah Menu Baru

### Langkah 1: Siapkan dan Tambahkan Gambar Menu Baru

#### A. Standar Gambar Menu

1. **Ukuran dan Format:**
   - Ukuran ideal: **400x400 piksel** atau **600x600 piksel**
   - Format: **JPG** (ukuran file lebih kecil, cocok untuk foto makanan)
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

#### B. Masukkan Gambar ke Website
1. **Buka folder website** di komputer Anda
2. **Masuk ke folder imgs (bukan imgs/assets):**
   ```
   📁 LandingPage/
   └── 📁 imgs/ ← Masukkan gambar menu di sini (LANGSUNG)
       ├── Bakwan Sayur_Rp 1000.jpg ← Contoh file yang sudah ada
       ├── Bika ambon.jpg
       └── [gambar baru Anda].jpg ← Letakkan di sini
   ```
3. **Copy/paste gambar baru** ke dalam folder `imgs/` (tidak di subfolder)
4. **Pastikan nama file sama** dengan yang akan ditulis di kode nanti

#### C. Contoh Praktis Menambah Gambar
**Skenario:** Anda ingin menambah menu "Kue Lumpia" dengan harga Rp 2.500

1. **Foto kue lumpia** dengan HP/kamera
2. **Edit dan crop** gambar jadi persegi (400x400px)
3. **Simpan dengan nama:** `Kue_Lumpia_Rp_2500.jpg`
4. **Copy file** ke folder `imgs/` (langsung, bukan ke subfolder)
5. **Cek ukuran file** - pastikan di bawah 500KB

**✅ Checklist sebelum lanjut:**
- [ ] Gambar sudah ada di folder `imgs/` (langsung)
- [ ] Nama file mengikuti format: `Nama_Menu_Rp_Harga.jpg`
- [ ] Ukuran file tidak terlalu besar (<500KB)
- [ ] Gambar terlihat jelas dan menarik (400x400px atau lebih)

**📁 Struktur File yang Benar:**
```
📁 imgs/
├── Kue_Lumpia_Rp_2500.jpg ← Gambar baru Anda
├── Bakwan Sayur_Rp 1000.jpg ← File existing
├── Bika ambon.jpg ← File existing
└── 📁 assets/ ← Jangan taruh gambar menu di sini
    └── Hero.jpg ← Ini untuk gambar hero saja
```

---

### Langkah 2: Tambahkan Menu di Halaman Utama (index.html)

1. **Buka file index.html** dengan text editor
2. **Cari bagian menu** (sekitar baris 455-490):
   ```html
   <div class="menu-grid">
   ```
3. **Tambahkan menu baru** sebelum tag penutup `</div>` dari menu-grid:

   ```html
   <!-- Menu Baru: Kue Lumpia -->
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

**🔄 Personalisasi sesuai menu Anda:**
- `Kue_Lumpia_Rp_2500.jpg` → nama file gambar Anda (harus sama persis)
- `Kue Lumpia` → nama menu Anda yang akan ditampilkan
- `Rp2.500/pcs` → harga menu Anda
- Deskripsi → buat deskripsi singkat yang menarik (max 1 baris)

**📝 Tips Animasi:**
- `data-aos-delay="100"` → ubah jadi 50, 150, 200 untuk variasi timing
- Semakin besar delay, semakin lambat muncul animasinya

### Langkah 3: Tambahkan Menu di Halaman Menu Lengkap (menu.html)

1. **Buka file menu.html** dengan text editor
2. **Cari bagian menu grid** (sekitar baris 70):
   ```html
   <div class="menu-grid full-menu">
   ```
3. **Cari kategori yang sesuai** untuk menu baru Anda:
   - **Kue Tradisional:** bagian awal file (sekitar baris 75-400)
   - **Gorengan & Snack:** bagian tengah (sekitar baris 500-700)
   - **Minuman:** bagian akhir (sekitar baris 750+)

4. **Tambahkan di kategori yang tepat:**

   ```html
   <!-- Menu Baru: Kue Lumpia -->
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="50" data-category="tradisional">
     <img src="imgs/Kue_Lumpia_Rp_2500.jpg" alt="Kue Lumpia" />
     <div class="menu-content">
       <h4 class="menu-title">Kue Lumpia</h4>
       <div>
         <p class="menu-price">Harga <strong>Rp2.500/pcs</strong></p>
         <p class="menu-note">Kue lumpia renyah dengan isian kacang hijau yang lezat dan manis. Dibuat dengan resep tradisional turun temurun.</p>
       </div>
     </div>
   </div>
   ```

**🔄 Personalisasi sesuai menu Anda:**
- `data-category="tradisional"` → ganti sesuai kategori:
  - `"tradisional"` untuk kue tradisional
  - `"gorengan"` untuk gorengan & snack
  - `"minuman"` untuk minuman
- Deskripsi di menu.html **boleh lebih panjang dan detail** (2-3 baris)
- Format harga: `Harga <strong>Rp2.500/pcs</strong>` (tanpa "mulai")

### Langkah 4: Test dan Verifikasi

#### A. Cek Gambar dan Menu Baru
1. **Simpan semua file** yang sudah diedit (Ctrl+S)
2. **Buka website** di browser:
   - Double-click `index.html` untuk halaman utama
   - Double-click `menu.html` untuk halaman menu lengkap
3. **Refresh halaman** (F5 atau Ctrl+F5)
4. **Verifikasi menu baru:**
   - ✅ Gambar tampil dengan jelas (tidak ada icon rusak)
   - ✅ Nama menu sesuai yang diinginkan
   - ✅ Harga tercantum dengan benar
   - ✅ Deskripsi menarik dan informatif

#### B. Test Hamburger Menu (Mobile)
1. **Resize browser** jadi kecil (simulasi mobile)
2. **Klik hamburger icon** (3 garis di kanan atas)
3. **Cek animasi:**
   - ✅ Garis berubah jadi X dengan smooth
   - ✅ Menu overlay muncul dengan skewed effect
   - ✅ Background hitam dengan band kuning
   - ✅ Links muncul bertahap dengan animasi

#### C. Test Responsif Mobile
1. **Tekan F12** di browser (Developer Tools)
2. **Klik icon mobile** (toggle device toolbar)
3. **Pilih device** seperti iPhone 12 atau Samsung Galaxy
4. **Test semua fitur:**
   - ✅ Logo terlihat dengan baik
   - ✅ Hamburger menu berfungsi normal
   - ✅ Menu grid responsive (1-2 kolom di mobile)
   - ✅ Gambar loading dengan baik
   - ✅ Text terbaca dengan jelas

#### D. Test Link Navigation
1. **Klik setiap link** di navigation:
   - "BERANDA" → scroll ke atas halaman
   - "TENTANG" → scroll ke section about
   - "MENU" → scroll ke section menu atau pindah ke menu.html
   - "KONTAK" → scroll ke section contact
2. **Verifikasi smooth scrolling** berfungsi

#### E. Troubleshooting Cepat
- **Gambar tidak muncul?** 
  - Cek nama file di kode sama dengan nama file asli (huruf besar/kecil harus sama)
  - Pastikan gambar ada di folder `imgs/` (tidak di subfolder)
  - Cek format file (harus .jpg atau .png)
- **Layout berantakan?**
  - Pastikan tidak ada tag HTML yang kurang (`</div>`, `</p>`, dll)
  - Cek struktur kode sama dengan contoh yang diberikan
- **Hamburger menu tidak berfungsi?**
  - Refresh halaman (Ctrl+F5)
  - Pastikan browsing dalam mode mobile (<768px width)
- **Menu baru tidak muncul di filter?**
  - Cek `data-category` sudah sesuai dengan kategori yang benar

---

## ✏️ Cara Mengubah Menu yang Sudah Ada

### 1. Mengganti Gambar Menu Lama dengan Baru

**Opsi A: Ganti File dengan Nama yang Sama**
1. **Siapkan gambar baru** dengan ukuran 400x400px
2. **Beri nama sama** dengan file lama (contoh: `Bika ambon.jpg`)
3. **Replace file lama** di folder `imgs/` dengan file baru
4. **Refresh browser** - gambar otomatis terganti

**Opsi B: Ganti Nama File di Kode**
1. **Upload gambar baru** ke folder `imgs/` dengan nama baru
2. **Edit kode di kedua file HTML:**

   **Contoh di index.html (cari baris sekitar 460-480):**
   ```html
   <!-- DARI ini: -->
   <img src="imgs/Bika ambon.jpg" alt="Bika Ambon" />
   
   <!-- GANTI JADI ini: -->
   <img src="imgs/Bika_Ambon_Baru.jpg" alt="Bika Ambon" />
   ```

   **Contoh di menu.html (cari baris sekitar 90-100):**
   ```html
   <!-- DARI ini: -->
   <img src="imgs/Bika ambon.jpg" alt="Bika Ambon" />
   
   <!-- GANTI JADI ini: -->
   <img src="imgs/Bika_Ambon_Baru.jpg" alt="Bika Ambon" />
   ```

### 2. Mengubah Harga Menu

**Di index.html:**
```html
<!-- DARI ini: -->
<p class="menu-price">Harga mulai <strong>Rp1.750/pcs</strong></p>

<!-- GANTI JADI ini: -->
<p class="menu-price">Harga mulai <strong>Rp2.000/pcs</strong></p>
```

**Di menu.html:**
```html
<!-- DARI ini: -->
<p class="menu-price">Harga <strong>Rp1.750/pcs</strong></p>

<!-- GANTI JADI ini: -->
<p class="menu-price">Harga <strong>Rp2.000/pcs</strong></p>
```

### 3. Mengubah Nama Menu

**Di kedua file (index.html dan menu.html):**
```html
<!-- DARI ini: -->
<h4 class="menu-title">Bika Ambon</h4>

<!-- GANTI JADI ini: -->
<h4 class="menu-title">Bika Ambon Special</h4>
```

### 4. Mengubah Deskripsi Menu

**Di index.html (deskripsi singkat):**
```html
<!-- DARI ini: -->
<p class="menu-note">Kue basah dengan tekstur berserat dan rasa manis</p>

<!-- GANTI JADI ini: -->
<p class="menu-note">Kue tradisional Medan dengan tekstur unik dan aroma pandan</p>
```

**Di menu.html (deskripsi lebih detail):**
```html
<!-- DARI ini: -->
<p class="menu-note">Kue basah dengan tekstur berserat dan rasa manis</p>

<!-- GANTI JADI ini: -->
<p class="menu-note">Kue tradisional asal Medan dengan tekstur berlubang-lubang khas, aroma pandan yang harum, dan rasa manis yang pas. Dibuat dengan resep autentik turun temurun.</p>
```

### 5. Mengubah Kategori Menu (Khusus menu.html)

Jika ingin memindah menu dari satu kategori ke kategori lain:

```html
<!-- Dari kategori Tradisional: -->
<div class="menu-tile" data-aos="fade-up" data-aos-delay="50" data-category="tradisional">

<!-- Ke kategori Gorengan: -->
<div class="menu-tile" data-aos="fade-up" data-aos-delay="50" data-category="gorengan">

<!-- Ke kategori Minuman: -->
<div class="menu-tile" data-aos="fade-up" data-aos-delay="50" data-category="minuman">
```

**📝 Catatan:** Menu akan otomatis tersaring ketika user klik filter di menu.html

### 6. Menghapus Menu yang Tidak Diperlukan

1. **Cari menu yang ingin dihapus** di kedua file HTML
2. **Hapus seluruh blok menu-tile:**
   ```html
   <!-- HAPUS SELURUH BLOK INI: -->
   <div class="menu-tile" data-aos="fade-up" data-aos-delay="100">
     <img src="imgs/Menu_yang_dihapus.jpg" alt="Menu Lama" />
     <div class="menu-content">
       <h4 class="menu-title">Menu Lama</h4>
       <div>
         <p class="menu-price">Harga <strong>Rp1.000/pcs</strong></p>
         <p class="menu-note">Deskripsi menu lama</p>
       </div>
     </div>
   </div>
   ```
3. **Hapus juga file gambar** di folder `imgs/` kalau tidak dipakai lagi
4. **Simpan dan refresh** untuk melihat hasilnya

---

## 💡 Tips dan Trik

### ✅ Penamaan File Gambar
- **Gunakan format konsisten:** "Nama_Menu_Rp_Harga.jpg"
- **Contoh yang benar:** `Kue_Lapis_Rp_3000.jpg`, `Bakwan_Sayur_Rp_1000.jpg`
- **Hindari spasi dan karakter khusus:** jangan pakai (!@#$%^&*)
- **Gunakan underscore (_)** untuk ganti spasi
- **Huruf besar/kecil penting:** `Bakwan.jpg` ≠ `bakwan.jpg`

### ✅ Optimasi Gambar untuk Website Cepat
- **Ukuran file ideal:** 100-500KB per gambar
- **Resolusi optimal:** 400x400px untuk menu, 1920x1080px untuk hero
- **Format yang disarankan:** JPG untuk foto makanan, PNG untuk logo
- **Kompres online:** gunakan TinyPNG.com atau Compressor.io

### ✅ Struktur Folder yang Rapi
```
📁 LandingPage/
├── 📁 imgs/
│   ├── 📁 backup/          ← Simpan gambar lama
│   ├── 📁 raw/             ← Foto mentah sebelum edit
│   ├── 📸 menu-*.jpg       ← Gambar siap pakai
│   └── 📁 assets/
│       ├── 📸 Hero.jpg     ← Gambar hero
│       └── 📁 logo/
│           └── 📸 *.png    ← Logo dan favicon
```

### ✅ Tips Mengelola Banyak Menu Sekaligus
1. **Buat list di notepad** dulu:
   ```
   Menu yang akan ditambah:
   1. Kue Lumpia - Rp 2.500 - Isian kacang hijau
   2. Roti Bakar - Rp 3.000 - Dengan selai dan keju
   3. Es Cincau - Rp 1.500 - Minuman segar cincau hitam
   ```

2. **Edit gambar batch:**
   - Crop semua jadi 400x400px sekaligus
   - Rename batch dengan pattern yang sama
   - Kompres semua sebelum upload

3. **Upload dan test bertahap:**
   - Upload 2-3 menu dulu, test tampilan
   - Kalau sudah OK, baru lanjut upload sisanya
   - Jangan upload 20+ menu sekaligus tanpa test

### ✅ Format HTML Standar untuk Konsistensi

**Template untuk index.html:**
```html
<div class="menu-tile" data-aos="fade-up" data-aos-delay="100">
  <img src="imgs/Nama_Menu_Rp_Harga.jpg" alt="Nama Menu" />
  <div class="menu-content">
    <h4 class="menu-title">Nama Menu</h4>
    <div>
      <p class="menu-price">Harga mulai <strong>Rp0.000/pcs</strong></p>
      <p class="menu-note">Deskripsi singkat (max 1 baris)</p>
    </div>
  </div>
</div>
```

**Template untuk menu.html:**
```html
<div class="menu-tile" data-aos="fade-up" data-aos-delay="50" data-category="tradisional">
  <img src="imgs/Nama_Menu_Rp_Harga.jpg" alt="Nama Menu" />
  <div class="menu-content">
    <h4 class="menu-title">Nama Menu</h4>
    <div>
      <p class="menu-price">Harga <strong>Rp0.000/pcs</strong></p>
      <p class="menu-note">Deskripsi detail (boleh 2-3 baris)</p>
    </div>
  </div>
</div>
```

### ✅ Cara Cepat Edit Multiple Menu
1. **Gunakan Find & Replace** di text editor:
   - Ctrl+H di Notepad++
   - Ganti harga lama dengan harga baru sekaligus
   - Ganti nama file batch

2. **Copy-paste template:**
   - Buat 1 menu dengan benar
   - Copy struktur HTML-nya
   - Paste dan edit sesuai menu baru

### ✅ Backup dan Restore
- **Selalu backup file asli** sebelum edit besar-besaran
- **Simpan versi working** sebelum eksperimen
- **Test di browser dummy** dulu sebelum upload ke website live

### ✅ Tips Mobile-First Design
- **Gambar loading:** test di koneksi lambat
- **Touch target:** pastikan button mudah di-tap
- **Text readability:** jangan terlalu kecil di mobile
- **Hamburger menu:** test animasi smooth di berbagai device

### ✅ SEO dan Performance Tips
- **Alt text descriptive:** `alt="Kue Lumpia Tradisional"` tidak `alt="image"`
- **File naming SEO:** nama file yang descriptive membantu SEO
- **Image lazy loading:** sudah built-in di website ini
- **Favicon:** sudah otomatis terpasang untuk branding

---

## 🔧 Troubleshooting

### ❌ Masalah Gambar Menu

#### 🖼️ Gambar Tidak Muncul (Icon Rusak/Placeholder)

**Penyebab Umum:**

1. **Nama file tidak cocok dengan kode:**
   ```html
   <!-- Di kode tertulis: -->
   <img src="imgs/Kue_Lapis_Rp_2500.jpg" alt="..." />
   
   <!-- Tapi file aslinya bernama: -->
   Kue Lapis Rp 2500.JPG  ← SALAH! Ada spasi dan ekstensi besar
   ```
   **✅ Solusi:** Rename file jadi `Kue_Lapis_Rp_2500.jpg` (sesuai kode)

2. **File tidak ada di lokasi yang tepat:**
   - ✅ **Benar:** `📁 imgs/Kue_Lapis_Rp_2500.jpg`
   - ❌ **Salah:** `📁 LandingPage/Kue_Lapis_Rp_2500.jpg`
   - ❌ **Salah:** `📁 imgs/assets/Kue_Lapis_Rp_2500.jpg`
   - ❌ **Salah:** `📁 imgs/backup/Kue_Lapis_Rp_2500.jpg`

3. **Case sensitivity (huruf besar/kecil):**
   - `Bakwan.jpg` ≠ `bakwan.jpg` ≠ `BAKWAN.JPG`
   - Nama di kode harus **sama persis** dengan nama file

4. **Format file tidak didukung:**
   - ✅ **Gunakan:** `.jpg`, `.jpeg`, `.png`
   - ❌ **Hindari:** `.gif`, `.bmp`, `.webp`, `.tiff`

#### 📐 Gambar Muncul Tapi Pecah/Blur

**Penyebab:**
- Resolusi gambar terlalu kecil (misal 100x100px di-stretch jadi 400x400px)
- Kompresi berlebihan

**✅ Solusi:**
- Gunakan gambar minimal **400x400px**
- Kalau gambar asli kecil, cari foto yang lebih besar
- Hindari kompresi >90%

#### 🔲 Gambar Terpotong atau Bentuk Aneh

**Penyebab:**
- Rasio gambar tidak sesuai (terlalu panjang/lebar)
- CSS crop otomatis memotong bagian penting

**✅ Solusi:**
- Edit gambar jadi **rasio 1:1 (persegi)** sebelum upload
- Gunakan crop tool di HP/komputer
- Focus crop ke makanan, buang background yang tidak perlu

#### 🐌 Gambar Loading Lambat

**Penyebab:**
- Ukuran file terlalu besar (>2MB per gambar)
- Terlalu banyak gambar dalam 1 halaman

**✅ Solusi:**
- Kompres gambar di **TinyPNG.com** atau **Compressor.io**
- Target ukuran file: **100-500KB** per gambar
- Upload gambar secara bertahap (test 5-10 menu dulu)

### ❌ Masalah Layout dan Tampilan

#### 📱 Layout Berantakan di Mobile

**Gejala:** Menu overlap, text terpotong, layout tidak rapi

**✅ Solusi:**
1. **Test di browser mobile mode:**
   - Tekan F12 → Toggle device toolbar
   - Pilih iPhone atau Samsung untuk test
2. **Cek responsive:**
   - Pastikan gambar tidak terlalu besar
   - Text tidak terlalu panjang (max 2 baris di mobile)

#### 🍔 Hamburger Menu Tidak Berfungsi

**Gejala:** Klik hamburger menu tidak ada respon

**✅ Solusi:**
1. **Hard refresh:** Tekan Ctrl+F5 (bukan F5 biasa)
2. **Cek lebar browser:** Hamburger cuma aktif di width <768px
3. **Test di mode mobile:** F12 → toggle device mode
4. **Clear browser cache:** Ctrl+Shift+Delete

#### 🎯 Menu Filter Tidak Bekerja (menu.html)

**Gejala:** Klik "Kue Tradisional" tapi menu tidak tersaring

**✅ Solusi:**
1. **Cek data-category:**
   ```html
   <!-- Pastikan category spelling benar: -->
   <div class="menu-tile" data-category="tradisional">  ← BENAR
   <div class="menu-tile" data-category="traditional">  ← SALAH
   ```
2. **Category yang valid:**
   - `"tradisional"` untuk kue tradisional
   - `"gorengan"` untuk gorengan & snack  
   - `"minuman"` untuk minuman
   - `"all"` untuk semua menu

#### ⚡ Website Loading Lambat

**✅ Solusi:**
1. **Kompres semua gambar** sebelum upload
2. **Hapus gambar yang tidak terpakai** dari folder imgs/
3. **Gunakan format JPG** untuk foto makanan (bukan PNG)
4. **Test di koneksi lambat:** Developer Tools → Network → Slow 3G

### ❌ Masalah Kode HTML

#### 🏷️ Tag HTML Tidak Tertutup

**Gejala:** Layout berantakan, menu tidak tampil

**Penyebab:** Missing closing tag seperti `</div>`, `</p>`, `</h4>`

**✅ Cara Cek:**
1. **Hitung tag pembuka vs penutup:**
   ```html
   <!-- BENAR: -->
   <div class="menu-tile">        ← Tag pembuka
     <h4>Menu</h4>               ← Tag pembuka + penutup
   </div>                        ← Tag penutup
   
   <!-- SALAH: -->
   <div class="menu-tile">        ← Tag pembuka
     <h4>Menu</h4>               ← Tag pembuka + penutup
   <!-- Missing </div> -->        ← Tag penutup hilang!
   ```

2. **Gunakan text editor yang ada syntax highlighting**
3. **Copy struktur dari menu yang sudah benar**

#### 📝 Typo di Path File

**Gejala:** Gambar tidak muncul meski file ada

**✅ Cek yang sering salah:**
- `imgs/menu.jpg` vs `img/menu.jpg` (ada/tidak ada 's')
- `\` vs `/` (backslash vs forward slash)
- Spasi di nama file: `kue lapis.jpg` harus jadi `kue_lapis.jpg`

### ❌ Masalah Browser dan Cache

#### 🔄 Perubahan Tidak Terlihat

**✅ Solusi step-by-step:**
1. **Save file** yang sudah diedit (Ctrl+S)
2. **Hard refresh** browser (Ctrl+F5, bukan F5 biasa)
3. **Clear browser cache:** Ctrl+Shift+Delete → pilih Images and files
4. **Test di browser lain:** Coba Chrome, Firefox, atau Edge
5. **Test di incognito mode:** Ctrl+Shift+N

#### 🖥️ Tampilan Beda di Browser Lain

**✅ Solusi:**
- Website sudah dioptimasi untuk Chrome, Firefox, Safari, Edge
- Kalau ada masalah di browser lama (IE), abaikan saja
- Focus test di browser modern yang banyak dipakai

---

### 🆘 Bantuan Darurat: Reset ke Kondisi Awal

Kalau website rusak total dan tidak tahu cara fix:

1. **Backup file rusak** dengan rename jadi `.bak`
2. **Download ulang** file asli website dari source
3. **Copy gambar-gambar menu** dari folder imgs/ lama ke folder baru
4. **Mulai edit ulang** secara bertahap
5. **Test setiap perubahan** sebelum lanjut ke menu berikutnya

### 📞 Checklist Sebelum Minta Bantuan

Sebelum panic atau minta bantuan, coba dulu:

- [ ] Hard refresh browser (Ctrl+F5)
- [ ] Cek nama file sama persis dengan kode (case sensitive)
- [ ] Cek file ada di folder yang benar (imgs/ langsung)
- [ ] Test di browser incognito mode
- [ ] Cek tidak ada tag HTML yang kurang
- [ ] Test di mobile mode (F12 → device toggle)
- [ ] Cek ukuran file gambar tidak terlalu besar (>2MB)

**90% masalah bisa diselesaikan dengan checklist di atas! 🎯**

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
