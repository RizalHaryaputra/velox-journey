<script setup>
const route = useRoute()
const id = route.params.id

// Import Composable
const { getPackageById } = usePackages()

// Ambil data sesuai ID dari URL
const packageDetail = computed(() => {
    return getPackageById(id)
})

// Fungsi Format Rupiah
const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID').format(num)
}

// Fungsi Booking
const bookingLink = computed(() => {
    if (!packageDetail.value) return '#'
    const text = `Halo Velox, saya tertarik booking paket: ${packageDetail.value.title}`
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`
})

// SEO Meta Dinamis
useSeoMeta({
    title: () => packageDetail.value ? packageDetail.value.title : 'Paket Tidak Ditemukan',
    ogTitle: () => packageDetail.value ? `${packageDetail.value.title} | Velox Journey` : 'Velox Journey',
    description: () => packageDetail.value ? packageDetail.value.description : 'Temukan paket wisata terbaik.',
    ogImage: () => packageDetail.value ? packageDetail.value.images[0] : '/images/logo.png',
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