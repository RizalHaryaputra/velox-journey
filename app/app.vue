<script setup>
import '../assets/css/main.css'

// DEFAULT SEO META
useSeoMeta({
  title: 'Home',
  ogTitle: 'Velox Journey - Private Trip Organizer Terbaik',
  description: 'Nikmati liburan eksklusif di Indonesia tanpa gangguan. Private trip ke Jogja, Bali, Bromo, dan Labuan Bajo.',
  ogDescription: 'Nikmati liburan eksklusif di Indonesia tanpa gangguan. Private trip ke Jogja, Bali, Bromo, dan Labuan Bajo.',
  ogImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070', // Gambar thumbnail saat share link
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>