<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-800">
    
    <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all border-b border-gray-100">
      <div class="container mx-auto px-16 h-20 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-teal-700 flex items-center gap-2">
          <span>✈️ Velox Journey</span>
        </NuxtLink>

        <nav class="hidden md:flex gap-8 font-medium text-gray-600">
          <NuxtLink to="/" class="hover:text-teal-600 transition">Home</NuxtLink>
          <NuxtLink to="/packages" class="hover:text-teal-600 transition">Paket Wisata</NuxtLink>
          <NuxtLink to="/about" class="hover:text-teal-600 transition">Tentang Kami</NuxtLink>
        </nav>

        <NuxtLink to="/contact" class="hidden md:block px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/20 font-semibold text-sm">
          Hubungi Kami
        </NuxtLink>
      </div>
    </header>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="bg-slate-900 text-white py-8 mt-auto">
      <div class="container mx-auto px-6 text-center">
        <p class="mb-2 text-gray-400">© {{ new Date().getFullYear() }} Velox Journey. Private Trip Specialist.</p>
        <div class="flex justify-center gap-4 text-sm text-gray-500">
          <span class="cursor-pointer hover:text-white">Instagram</span>
          <span class="cursor-pointer hover:text-white">WhatsApp</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* Agar link yang aktif otomatis berwarna hijau */
.router-link-active {
  color: #0d9488; /* teal-600 */
}
</style>