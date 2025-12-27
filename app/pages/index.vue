<script setup>
// --- 1. DATA PAKET WISATA (Mockup) ---
const packages = [
    {
        id: 1,
        title: "Eksotisme Pasir Putih Jogja Selatan",
        location: "Gunungkidul, Yogyakarta",
        price: 2500000,
        duration: "3 Hari 2 Malam",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Sunrise Adventure Bromo Tengger",
        location: "Malang, Jawa Timur",
        price: 3200000,
        duration: "2 Hari 1 Malam",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Hidden Paradise Labuan Bajo",
        location: "Nusa Tenggara Timur",
        price: 5500000,
        duration: "4 Hari 3 Malam",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop"
    }
]

// --- 2. DATA FEATURES (Kenapa Kami) ---
const features = [
    {
        icon: "heroicons:user-group",
        title: "100% Private & Eksklusif",
        desc: "Tidak digabung dengan rombongan lain. Itinerary bebas Anda atur sesuai mood dan keinginan."
    },
    {
        icon: "heroicons:camera",
        title: "Dokumentasi Profesional",
        desc: "Setiap trip sudah termasuk fotografer/videografer handal. Pulang bawa kenangan estetik."
    },
    {
        icon: "heroicons:shield-check",
        title: "Jaminan Harga Transparan",
        desc: "Tidak ada biaya tersembunyi (hidden fees). Semua tiket, makan, dan tips sudah tercover."
    },
    {
        icon: "heroicons:sparkles",
        title: "Akses Hidden Gems",
        desc: "Kami mengajak Anda ke spot rahasia yang jarang diketahui turis reguler."
    }
]

// --- 3. DATA TESTIMONI ---
const testimonials = [
    {
        name: "Sarah Wijaya",
        role: "Entrepreneur, Jakarta",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        text: "Trip ke Jogja rasa Eropa! Service Velox benar-benar juara. Driver ramah, spot fotonya gila bagus banget. Puas!",
        stars: 5
    },
    {
        name: "Michael Tan",
        role: "Tech Lead, Yogyakarta",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        text: "Private trip paling seamless yang pernah saya coba. Admin fast response, hotelnya juga sesuai request. Highly recommended.",
        stars: 5
    }
]

// --- 4. DATA FAQ ---
const faqs = [
    {
        question: "Apakah itinerary bisa diubah (custom)?",
        answer: "Tentu saja! Konsep kami adalah Private Trip, jadi Anda bebas menambah atau mengurangi destinasi sesuai keinginan."
    },
    {
        question: "Apa saja yang termasuk dalam harga paket?",
        answer: "Harga sudah termasuk Transportasi (Mobil Privat + BBM + Driver), Hotel, Tiket Masuk Wisata, Dokumentasi, dan Makan sesuai program."
    },
    {
        question: "Bagaimana cara pembayarannya?",
        answer: "DP minimal 30% untuk booking tanggal, pelunasan maksimal H-3 keberangkatan via Transfer Bank."
    }
]
</script>

<template>
    <div>
        <section class="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-black/50 z-10"></div>
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                class="absolute inset-0 w-full h-full object-cover" alt="Travel Background" />
            <div class="relative z-20 px-6 max-w-4xl mx-auto">
                <span
                    class="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400 text-teal-200 text-sm font-semibold mb-4 backdrop-blur-sm">#1
                    Private Trip Organizer in Jogja</span>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">Temukan Surga Tersembunyi
                    di Indonesia</h1>
                <p class="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow-md">Nikmati perjalanan
                    eksklusif tanpa gangguan. Waktu, tujuan, dan kenangan sepenuhnya milik Anda.</p>
                <div class="flex flex-col md:flex-row justify-center gap-4">
                    <NuxtLink to="/packages"
                        class="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-bold transition transform hover:scale-105 shadow-lg">
                        Lihat Paket Wisata</NuxtLink>
                    <NuxtLink to="/contact"
                        class="px-8 py-4 bg-white text-teal-900 hover:bg-gray-100 rounded-full font-bold transition shadow-lg">
                        Konsultasi Gratis</NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white mx-2 md:mx-12">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-teal-700 mb-4">Kenapa Memilih Velox?</h2>
                    <p class="text-gray-600">Lebih dari sekadar jalan-jalan, kami menciptakan pengalaman.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(item, index) in features" :key="index"
                        class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-gray-200 text-center group">
                        <div
                            class="w-14 h-14 mx-auto bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                            <Icon :name="item.icon" size="28" />
                        </div>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">{{ item.title }}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-50 mx-2 md:mx-12">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-teal-700 mb-2">Destinasi Favorit</h2>
                    <p class="text-gray-600">Pilihan terbaik minggu ini.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PackageCard v-for="item in packages" :key="item.id" :paket="item" />
                </div>
                <div class="mt-12 flex items-center justify-center text-center">
                    <NuxtLink to="/packages"
                        class="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-xl font-bold transition shadow-lg shadow-teal-500/30">
                        Lihat Semua Destinasi
                        <Icon name="heroicons:arrow-long-right" />
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white overflow-hidden mx-2 md:mx-12">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center text-teal-700 mb-12">Kata Mereka Tentang Kami</h2>
                <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div v-for="(testi, index) in testimonials" :key="index"
                        class="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition relative">
                        <Icon name="heroicons:chat-bubble-bottom-center-text"
                            class="text-teal-100 text-6xl absolute top-4 right-4" />

                        <div class="flex gap-1 text-yellow-400 mb-4">
                            <Icon v-for="n in testi.stars" :key="n" name="heroicons:star-solid" />
                        </div>
                        <p class="text-gray-600 italic mb-6 relative z-10">"{{ testi.text }}"</p>
                        <div class="flex items-center gap-4">
                            <img :src="testi.avatar" class="w-12 h-12 rounded-full border-2 border-teal-100"
                                alt="User Avatar">
                            <div>
                                <h4 class="font-bold text-gray-800">{{ testi.name }}</h4>
                                <p class="text-xs text-gray-500">{{ testi.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-teal-900 text-white overflow-hidden px-2 md:px-12">
            <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

                <div>
                    <span class="text-teal-400 font-bold tracking-wider uppercase text-sm">Ada Pertanyaan?</span>
                    <h2 class="text-3xl font-bold mb-8 mt-2">Frequently Asked Questions</h2>

                    <div class="space-y-4">
                        <details v-for="(faq, index) in faqs" :key="index"
                            class="group bg-teal-800/50 rounded-xl overflow-hidden cursor-pointer transition border border-teal-700">
                            <summary
                                class="flex justify-between items-center p-5 font-medium hover:bg-teal-800 transition list-none">
                                <span>{{ faq.question }}</span>
                                <Icon name="heroicons:chevron-down"
                                    class="group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div
                                class="px-5 pb-5 text-teal-100 text-sm leading-relaxed border-t border-teal-700/50 pt-3">
                                {{ faq.answer }}
                            </div>
                        </details>
                    </div>
                </div>

                <div class="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold mb-4">Siap Merencanakan Liburan?</h3>
                        <p class="text-gray-600 mb-8">Konsultasikan rencana perjalanan impian Anda bersama tim expert
                            kami secara gratis.</p>

                        <a href="https://wa.me/6281234567890" target="_blank"
                            class="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition shadow-lg shadow-green-500/30">
                            <Icon name="logos:whatsapp-icon" class="text-xl" />
                            Chat via WhatsApp
                        </a>

                        <div class="mt-6 text-center text-sm text-gray-400">
                            Atau email kami di <span class="text-teal-600 font-medium">hello@veloxjourney.com</span>
                        </div>
                    </div>

                    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50">
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>