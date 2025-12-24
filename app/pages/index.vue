<script setup>
// DATA DUMMY (Nanti ini yang diganti dengan data Firebase)
const packages = [
    {
        id: 1,
        title: "Eksotisme Pasir Putih Jogja Selatan",
        location: "Gunungkidul, Yogyakarta",
        price: 2500000,
        duration: "3 Hari 2 Malam",
        image: "https://images.unsplash.com/photo-1596401057633-565652b5e260?q=80&w=1000&auto=format&fit=crop"
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
</script>

<template>
    <div>
        <section class="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">

            <div class="absolute inset-0 bg-black/50 z-10"></div>

            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                class="absolute inset-0 w-full h-full object-cover" alt="Travel Background" />

            <div class="relative z-20 px-6 max-w-4xl mx-auto">
                <span
                    class="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400 text-teal-200 text-sm font-semibold mb-4 backdrop-blur-sm">
                    #1 Private Trip Organizer in Jogja
                </span>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Temukan Surga Tersembunyi di Indonesia
                </h1>
                <p class="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                    Nikmati perjalanan eksklusif tanpa gangguan. Waktu, tujuan, dan kenangan sepenuhnya milik Anda.
                </p>
                <div class="flex flex-col md:flex-row justify-center gap-4">
                    <NuxtLink to="/packages"
                        class="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-bold transition transform hover:scale-105 shadow-lg">
                        Lihat Paket Wisata
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="px-8 py-4 bg-white text-teal-900 hover:bg-gray-100 rounded-full font-bold transition shadow-lg">
                        Konsultasi Gratis
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="mx-16 py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Destinasi Pilihan</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Paket wisata private paling diminati bulan ini. Dipilih khusus untuk pengalaman terbaik Anda.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PackageCard v-for="item in packages" :key="item.id" :paket="item" />
                </div>

                <div class="text-center mt-12">
                    <NuxtLink to="/packages"
                        class="inline-flex items-center gap-2 font-bold text-teal-600 hover:text-teal-700 transition">
                        Lihat Semua Paket
                        <Icon name="heroicons:arrow-long-right" />
                    </NuxtLink>
                </div>
            </div>
        </section>



        <section class="py-20 text-center">
            <h2 class="text-2xl font-bold text-gray-800">Mengapa Velox?</h2>
            <p class="text-gray-600 mt-2">Konten fitur akan kita buat setelah ini...</p>
        </section>


    </div>
</template>