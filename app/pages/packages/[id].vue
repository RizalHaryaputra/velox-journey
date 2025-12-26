<script setup>
const route = useRoute()
const id = route.params.id

// --- DATA DUMMY DETAIL (Simulasi Database) ---
// Nanti kita ganti ini dengan fetch data dari Firebase berdasarkan ID
const packageDetail = ref({
    id: id,
    title: "Eksotisme Pasir Putih Jogja Selatan",
    location: "Gunungkidul, Yogyakarta",
    price: 2500000,
    duration: "3 Hari 2 Malam",
    description: "Rasakan pengalaman liburan tak terlupakan di deretan pantai pasir putih Gunungkidul. Paket ini dirancang khusus untuk Anda yang ingin menikmati laut lepas, sunset romantis, dan kuliner seafood segar tanpa repot mengurus transportasi dan tiket.",
    images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    facilities: [
        "Private Transport (Innova/Hiace)",
        "Hotel Bintang 3/4 (2 Malam)",
        "Makan 7x (Termasuk Seafood Jimbaran)",
        "Tiket Masuk Wisata",
        "Dokumentasi Foto & Video Drone",
        "P3K Standar"
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival & Beach Hopping",
            activities: [
                "08:00 - Penjemputan di Bandara/Stasiun YIA",
                "10:00 - Perjalanan ke Gunungkidul",
                "12:00 - Makan Siang Lokal (Sego Abang)",
                "14:00 - Explore Pantai Indrayanti & Drini",
                "17:00 - Sunset di Heha Ocean View",
                "19:00 - Check-in Hotel & Free Time"
            ]
        },
        {
            day: 2,
            title: "Cave Tubing & Cliff View",
            activities: [
                "07:00 - Breakfast di Hotel",
                "09:00 - Cave Tubing Pindul / Kalisuci",
                "12:00 - Makan Siang",
                "14:00 - Tebing Breksi & Candi Ijo",
                "19:00 - Dinner Romantic di Bukit Bintang"
            ]
        },
        {
            day: 3,
            title: "City Tour & Departure",
            activities: [
                "08:00 - Check-out Hotel",
                "09:00 - Belanja Oleh-oleh Khas Jogja",
                "11:00 - Wisata Keraton / Tamansari",
                "13:00 - Drop off Bandara/Stasiun"
            ]
        }
    ]
})

// Fungsi Format Rupiah
const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID').format(num)
}

// Fungsi Booking (Link ke WA)
const bookingLink = computed(() => {
    const text = `Halo Velox, saya tertarik booking paket: ${packageDetail.value.title}`
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`
})
</script>

<template>
    <div class="bg-gray-50 pb-20">

        <header class="relative h-[50vh] min-h-[400px]">
            <img :src="packageDetail.images[0]" class="w-full h-full object-cover" alt="Cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full py-16 text-white container px-8 md:px-16">
                <span
                    class="bg-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-wide">
                    Private Trip
                </span>
                <h1 class="text-3xl md:text-5xl font-bold mb-2">{{ packageDetail.title }}</h1>
                <div class="flex items-center gap-4 text-gray-200 text-sm md:text-base">
                    <span class="flex items-center gap-1">
                        <Icon name="heroicons:map-pin" /> {{ packageDetail.location }}
                    </span>
                    <span class="flex items-center gap-1">
                        <Icon name="heroicons:clock" /> {{ packageDetail.duration }}
                    </span>
                </div>
            </div>
        </header>

        <div class="container mx-auto px-8 md:px-16 -mt-10 relative z-10">
            <div class="grid lg:grid-cols-3 gap-8">

                <div class="lg:col-span-2 space-y-8">

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Tentang Paket Ini</h2>
                        <p class="text-gray-600 leading-relaxed">{{ packageDetail.description }}</p>

                        <h3 class="font-bold text-gray-800 mt-6 mb-3">Fasilitas Termasuk:</h3>
                        <div class="grid sm:grid-cols-2 gap-3">
                            <div v-for="item in packageDetail.facilities" :key="item"
                                class="flex items-center gap-2 text-gray-600 text-sm">
                                <Icon name="heroicons:check-circle" class="text-teal-500 flex-shrink-0" />
                                {{ item }}
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6">Galeri Destinasi</h2>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <img v-for="(img, idx) in packageDetail.images" :key="idx" :src="img"
                                class="w-full h-40 object-cover rounded-lg hover:opacity-90 transition cursor-pointer"
                                alt="Gallery">
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6">Rencana Perjalanan</h2>

                        <div class="space-y-8 pl-4 border-l-2 border-teal-100 ml-2">
                            <div v-for="day in packageDetail.itinerary" :key="day.day" class="relative">
                                <div
                                    class="absolute -left-[25px] top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-md flex items-center justify-center text-xs text-white font-bold">
                                    {{ day.day }}
                                </div>

                                <h3 class="text-lg font-bold text-gray-800 mb-3 ml-4">Hari ke-{{ day.day }}: {{
                                    day.title }}</h3>
                                <ul class="space-y-3 ml-4">
                                    <li v-for="(act, i) in day.activities" :key="i"
                                        class="flex gap-3 text-gray-600 text-sm">
                                        <span class="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></span>
                                        {{ act }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="lg:col-span-1">
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-teal-100 sticky top-24">
                        <p class="text-gray-500 text-sm mb-1">Harga Mulai Dari</p>
                        <div class="flex items-end gap-1 mb-6">
                            <span class="text-3xl font-bold text-teal-600">Rp {{ formatRupiah(packageDetail.price)
                                }}</span>
                            <span class="text-gray-400 text-sm mb-1">/ pax</span>
                        </div>

                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between text-sm py-2 border-b border-gray-50">
                                <span class="text-gray-500">Durasi</span>
                                <span class="font-medium text-gray-800">{{ packageDetail.duration }}</span>
                            </div>
                            <div class="flex justify-between text-sm py-2 border-b border-gray-50">
                                <span class="text-gray-500">Tipe Trip</span>
                                <span class="font-medium text-gray-800">Private</span>
                            </div>
                            <div class="flex justify-between text-sm py-2 border-b border-gray-50">
                                <span class="text-gray-500">Lokasi</span>
                                <span class="font-medium text-gray-800">{{ packageDetail.location }}</span>
                            </div>
                        </div>

                        <a :href="bookingLink" target="_blank"
                            class="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center font-bold py-3 rounded-xl transition shadow-lg shadow-teal-500/30 mb-3">
                            Booking via WhatsApp
                        </a>

                        <button
                            class="block w-full border border-teal-200 text-teal-700 hover:bg-teal-50 font-bold py-3 rounded-xl transition">
                            Download Itinerary PDF
                        </button>

                        <p class="text-xs text-center text-gray-400 mt-4">
                            *Harga dapat berubah tergantung musim liburan
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>