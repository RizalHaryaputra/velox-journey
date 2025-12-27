<script setup>
// 1. DATA DUMMY YANG LEBIH BANYAK (Untuk simulasi pagination)
const allPackages = ref([
    {
        id: 1,
        title: "Eksotisme Pasir Putih Jogja Selatan",
        location: "Gunungkidul, Yogyakarta",
        category: "Nature",
        price: 2500000,
        duration: "3 Hari 2 Malam",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Sunrise Adventure Bromo Tengger",
        location: "Malang, Jawa Timur",
        category: "Adventure",
        price: 3200000,
        duration: "2 Hari 1 Malam",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000"
    },
    {
        id: 3,
        title: "Hidden Paradise Labuan Bajo",
        location: "Nusa Tenggara Timur",
        category: "Nature",
        price: 5500000,
        duration: "4 Hari 3 Malam",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000"
    },
    {
        id: 4,
        title: "Cultural Trip Ubud & Kintamani",
        location: "Bali",
        category: "Culture",
        price: 4100000,
        duration: "3 Hari 2 Malam",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000"
    },
    {
        id: 5,
        title: "Hiking Rinjani Summit",
        location: "Lombok, NTB",
        category: "Adventure",
        price: 4800000,
        duration: "4 Hari 3 Malam",
        image: "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        title: "Honeymoon Suite Nusa Penida",
        location: "Bali",
        category: "Honeymoon",
        price: 6500000,
        duration: "3 Hari 2 Malam",
        image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1000"
    },
    {
        id: 7,
        title: "Borobudur & Heritage Tour",
        location: "Magelang, Jawa Tengah",
        category: "Culture",
        price: 2100000,
        duration: "2 Hari 1 Malam",
        image: "https://images.unsplash.com/photo-1620549146260-938c38c31c13?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        title: "Derawan Island Hopping",
        location: "Kalimantan Timur",
        category: "Nature",
        price: 5200000,
        duration: "4 Hari 3 Malam",
        image: "http://images.unsplash.com/photo-1580576234025-6cf2622785b7?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
])

// 2. STATE (Variable untuk Search & Filter)
const searchQuery = ref('')
const selectedCategory = ref('All')
const categories = ['All', 'Nature', 'Adventure', 'Culture', 'Honeymoon']

// 3. PAGINATION STATE
const currentPage = ref(1)
const itemsPerPage = 6 // Menampilkan 6 item per halaman

// 4. COMPUTED: Filter & Search Logic
const filteredPackages = computed(() => {
    // Reset halaman ke 1 setiap kali user search/filter
    // Note: Kita pakai watcher nanti, tapi logic utamanya di sini

    return allPackages.value.filter(pkg => {
        // Filter Category
        const matchCategory = selectedCategory.value === 'All' || pkg.category === selectedCategory.value

        // Filter Search (Case Insensitive)
        const query = searchQuery.value.toLowerCase()
        const matchSearch = pkg.title.toLowerCase().includes(query) || pkg.location.toLowerCase().includes(query)

        return matchCategory && matchSearch
    })
})

// 5. COMPUTED: Pagination Slice
// Mengambil data yang sudah difilter, lalu potong sesuai halaman
const paginatedPackages = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredPackages.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(filteredPackages.value.length / itemsPerPage)
})

// Watcher: Jika filter berubah, kembalikan ke halaman 1
watch([searchQuery, selectedCategory], () => {
    currentPage.value = 1
})

// Fungsi Scroll ke atas saat ganti halaman
const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
</script>

<template>
    <div class="bg-gray-50 min-h-screen pb-20">

        <header class="bg-teal-900 text-white pt-20 pb-20 px-6 text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-5">
                <Icon name="heroicons:globe-americas" class="text-[400px] absolute -right-20 -top-20" />
            </div>

            <div class="relative z-10 max-w-3xl mx-auto">
                <span class="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">Paket Wisata</span>
                <h1 class="text-3xl md:text-5xl font-bold mb-6">Jelajahi Paket Wisata yang Anda Impikan</h1>
                <p class="text-teal-100 text-lg leading-relaxed">
                    Temukan destinasi impian Anda dari pegunungan hingga dasar laut.
                </p>
            </div>
        </header>

        <div class="container mx-auto px-6 lg:px-16 mt-8">

            <div
                class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col lg:flex-row gap-6 items-center justify-between">

                <div class="w-full lg:w-7/12">
                    <div
                        class="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 transition">
                        <Icon name="heroicons:magnifying-glass" class="text-gray-400 text-xl flex-shrink-0" />

                        <input v-model="searchQuery" type="text" placeholder="Cari destinasi..."
                            class="flex-grow bg-transparent border-none outline-none focus:ring-0 text-sm ml-3 text-gray-700 placeholder-gray-400 w-full min-w-0" />
                    </div>
                </div>

                <div class="w-full lg:w-auto">
                    <div class="flex flex-wrap justify-center lg:justify-end gap-2">
                        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" :class="[
                            'px-5 py-2 rounded-full text-sm font-medium transition border',
                            selectedCategory === cat
                                ? 'bg-teal-600 text-white border-teal-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        ]">
                            {{ cat }}
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div class="container mx-auto px-6 lg:px-16 py-12">

            <div v-if="filteredPackages.length === 0" class="text-center py-20">
                <Icon name="heroicons:face-frown" class="text-6xl text-gray-300 mb-4" />
                <h3 class="text-xl font-bold text-gray-600">Yah, tidak ditemukan</h3>
                <p class="text-gray-400">Coba ganti kata kunci atau kategori lain.</p>
                <button @click="[searchQuery = '', selectedCategory = 'All']"
                    class="mt-4 text-teal-600 font-bold hover:underline">
                    Reset Filter
                </button>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <PackageCard v-for="item in paginatedPackages" :key="item.id" :paket="item" />
            </div>

            <div v-if="totalPages > 1" class="flex justify-center gap-2">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                    class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition">
                    <Icon name="heroicons:chevron-left" />
                </button>

                <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="[
                    'w-10 h-10 flex items-center justify-center rounded-lg border font-bold transition',
                    currentPage === page
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                ]">
                    {{ page }}
                </button>

                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition">
                    <Icon name="heroicons:chevron-right" />
                </button>
            </div>

            <div v-if="filteredPackages.length > 0" class="text-center text-gray-400 text-sm mt-6">
                Menampilkan halaman {{ currentPage }} dari {{ totalPages }}
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Utility class buat menyembunyikan scrollbar di filter mobile */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>