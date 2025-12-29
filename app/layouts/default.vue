<script setup>
const route = useRoute()

// State untuk menu mobile (Buka/Tutup)
const isMenuOpen = ref(false)

// Fungsi toggle
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Otomatis tutup menu saat pindah halaman (UX yang baik)
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-800">

    <header
      class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all border-b border-gray-100">
      <div class="container mx-auto px-6 lg:px-16 h-20 flex justify-between items-center">

        <NuxtLink to="/" class="text-velox text-2xl font-bold text-teal-700 flex items-center gap-2 z-50 relative">
          <img src="/images/logo.png" onerror="this.style.display='none'" alt="Velox"
            class="w-12 h-12 object-contain rounded-full" />
          <span>Velox Journey</span>
        </NuxtLink>

        <nav class="hidden lg:flex gap-8 font-medium text-gray-600">
          <NuxtLink to="/" class="hover:text-teal-600 transition">Home</NuxtLink>
          <NuxtLink to="/packages" class="hover:text-teal-600 transition">Paket Wisata</NuxtLink>
          <NuxtLink to="/about" class="hover:text-teal-600 transition">Tentang Kami</NuxtLink>
          <NuxtLink to="/custom-trip" class="hover:text-teal-600 transition">Custom Trip</NuxtLink>
        </nav>

        <div class="hidden lg:block">
          <NuxtLink to="/contact"
            class="contact-btn px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/20 font-semibold text-sm">
            Hubungi Kami
          </NuxtLink>
        </div>

        <button @click="toggleMenu" class="lg:hidden z-50 relative p-2 text-gray-600 focus:outline-none">
          <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" size="28" />
        </button>
      </div>

      <div
        class="absolute top-0 left-0 w-full bg-white shadow-xl border-b border-gray-100 lg:hidden transition-all duration-300 ease-in-out origin-top"
        :class="isMenuOpen ? 'translate-y-20 opacity-100 visible' : '-translate-y-full opacity-0 invisible'">
        <nav class="flex flex-col p-6 gap-4 font-medium text-gray-600 text-center">
          <NuxtLink to="/" class="py-2 hover:text-teal-600 border-b border-gray-50">Home</NuxtLink>
          <NuxtLink to="/packages" class="py-2 hover:text-teal-600 border-b border-gray-50">Paket Wisata</NuxtLink>
          <NuxtLink to="/about" class="py-2 hover:text-teal-600 border-b border-gray-50">Tentang Kami</NuxtLink>
          <NuxtLink to="/custom-trip" class="py-2 hover:text-teal-600 border-b border-gray-50">Custom Trip</NuxtLink>

          <NuxtLink to="/contact"
            class="mt-2 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 font-bold shadow-lg shadow-teal-600/20">
            Hubungi Kami
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-grow pt-20">
      <div v-if="isMenuOpen" @click="isMenuOpen = false"
        class="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"></div>

      <slot />
    </main>

    <footer class="bg-slate-900 text-white py-8 mt-auto">
      <div class="container mx-auto px-6 text-center">
        <p class="mb-2 text-gray-400">© {{ new Date().getFullYear() }} Velox Journey. Private Trip Specialist.</p>
        <div class="flex justify-center gap-4 text-sm text-gray-500">
          <a href="https://www.instagram.com/rzalhrya_" target="_blank" class="hover:text-white">
            Instagram
          </a>
          <a href="https://wa.me/87855038324" target="_blank" class="hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* Active link styling */
.router-link-active {
  color: #0d9488;
  /* teal-600 */
}

/* Khusus Mobile Menu agar tombol CTA tidak kena style active text biasa */
nav .router-link-active.bg-teal-600 {
  color: white !important;
}

div .router-link-active.contact-btn {
  color: white !important;
}

.router-link-active.text-velox {
  color: #0f766e;
}
</style>