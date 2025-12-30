# 🏔️ Velox Journey - Private Trip Specialist

> **Website Travel Agent Modern berbasis Nuxt 4.**
>
> Project ini adalah platform pemesanan paket wisata private trip yang menawarkan pengalaman pengguna (UX) yang mulus, desain responsif, dan interaksi yang menarik.

![Nuxt 4](https://img.shields.io/badge/Nuxt_4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Fitur Utama

Project ini dilengkapi dengan berbagai fitur modern:

* **🎨 Modern UI/UX:** Desain bersih dengan Tailwind CSS dan animasi interaktif (AOS).
* **📱 Fully Responsive:** Tampilan optimal di Desktop, Tablet, dan Mobile (dilengkapi Mobile Drawer Menu).
* **🔍 Smart Catalog:** Fitur pencarian (Search), filter kategori, dan pagination client-side.
* **📄 Dynamic Pages:** Halaman detail paket wisata yang dinamis menggunakan Dynamic Routing `[id].vue`.
* **✨ Custom Trip Wizard:** Formulir pemesanan bertahap (Multi-step Form) dengan progress bar interaktif.
* **🚀 SEO Optimized:** Menggunakan `useSeoMeta` untuk Meta Tags dinamis di setiap halaman.
* **⚡ State Management:** Pengelolaan data terpusat menggunakan `Composables`.

## 🛠️ Teknologi yang Digunakan

* **Framework:** [Nuxt 4](https://nuxt.com/) (Vue.js 3)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) (Iconify)
* **Animation:** [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)
* **Deployment:** Vercel

## 📂 Struktur Project

Project ini menggunakan struktur folder Nuxt 3 terbaru dengan direktori `app/`:

```bash
velox-journey/
├── app/
│   ├── assets/       # File CSS global
│   ├── components/   # Komponen Vue reusable (Card, Navbar, etc)
│   ├── composables/  # Logic & Data terpusat (usePackages.js)
│   ├── layouts/      # Layout utama website
│   ├── pages/        # Halaman routing otomatis
│   └── plugins/      # Plugin pihak ketiga (AOS)
├── public/           # Aset statis (Gambar, Logo)
└── nuxt.config.ts    # Konfigurasi utama Nuxt
```
---

## 🚀 Cara Menjalankan (Local)

Pastikan **Node.js** sudah terinstall di komputer Anda.

### 1️⃣ Clone Repository
```bash
git clone https://github.com/RizalHaryaputra/velox-journey.git
cd velox-journey
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Jalankan Development Server
```bash
npm run dev
```

### 4️⃣ Buka di Browser
Buka alamat berikut di browser Anda:
```bash
http://localhost:3000
```

## 👤 Author
* Rizal Haryaputra
* GitHub: @RizalHaryaputra
* Email: rzlhryptr@gmail.com
