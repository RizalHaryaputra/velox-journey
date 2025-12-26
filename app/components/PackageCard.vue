<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group border border-gray-100">
        <div class="relative h-48 overflow-hidden">
            <img :src="paket.image" :alt="paket.title"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div
                class="absolute top-3 right-3 bg-white/90 backdrop-blur text-teal-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {{ paket.duration }}
            </div>
        </div>

        <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:map-pin" class="text-gray-400 text-sm" />
                <span class="text-xs text-gray-500 font-medium uppercase tracking-wider">{{ paket.location }}</span>
            </div>

            <h3 class="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-teal-600 transition">
                {{ paket.title }}
            </h3>

            <div class="flex justify-between items-end mt-4">
                <div>
                    <p class="text-xs text-gray-400 mb-1">Mulai dari</p>
                    <p class="text-teal-600 font-bold text-lg">
                        Rp {{ Number(paket.price).toLocaleString('id-ID') }}
                    </p>
                </div>

                <NuxtLink :to="`/packages/${paket.id}`" class="bg-teal-50 text-teal-600 p-2 rounded-lg
                 hover:bg-teal-600 hover:text-white transition
                 flex items-center justify-center" aria-label="Lihat detail paket">
                    <Icon name="heroicons:arrow-right" size="20" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
// Menerima data dari parent (index.vue)
defineProps({
    paket: {
        type: Object,
        required: true
    }
})
</script>