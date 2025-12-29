<script setup>
// --- STATE MANAGEMENT ---
const currentStep = ref(1)
const totalSteps = 3

// Data Form (Disimpan reaktif)
const form = reactive({
    destination: '',
    date: '',
    duration: '',
    pax: 2,
    interests: [], // Array untuk checkbox
    budget: 'Standard',
    name: '',
    whatsapp: '',
    notes: ''
})

// Opsi Data
const destinations = ['Yogyakarta', 'Bali', 'Labuan Bajo', 'Bromo/Malang', 'Lombok', 'Lainnya']
const interestOptions = [
    { id: 'nature', label: 'Alam & Pemandangan', icon: 'heroicons:photo' },
    { id: 'culture', label: 'Budaya & Sejarah', icon: 'heroicons:academic-cap' },
    { id: 'culinary', label: 'Kuliner Lokal', icon: 'heroicons:cake' },
    { id: 'adventure', label: 'Petualangan (Trekking)', icon: 'heroicons:fire' },
    { id: 'shopping', label: 'Belanja Oleh-oleh', icon: 'heroicons:shopping-bag' },
    { id: 'relax', label: 'Santai / Staycation', icon: 'heroicons:sparkles' },
]

// --- LOGIC NAVIGASI ---
const nextStep = () => {
    if (currentStep.value < totalSteps) currentStep.value++
}

const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--
}

// Validasi Sederhana (Button Next disabled jika belum isi)
const isStep1Valid = computed(() => form.destination && form.date && form.duration)
const isStep2Valid = computed(() => form.interests.length > 0)

// --- GENERATE WA LINK ---
const submitToWhatsapp = () => {
    const message = `
Halo Velox Journey! Saya ingin request Custom Trip.
Berikut detailnya:

📍 *Tujuan:* ${form.destination}
📅 *Tanggal:* ${form.date} (${form.duration} Hari)
👥 *Peserta:* ${form.pax} Orang
💰 *Budget:* ${form.budget}

✨ *Minat:* ${form.interests.join(', ')}

👤 *Nama:* ${form.name}
📱 *Kontak:* ${form.whatsapp}
📝 *Catatan:* ${form.notes || '-'}

Mohon bantuannya untuk dibuatkan itinerary. Terima kasih!
  `.trim()

    const url = `https://wa.me/6287855038324?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
}

// Toggle Interest Selection
const toggleInterest = (label) => {
    if (form.interests.includes(label)) {
        form.interests = form.interests.filter(i => i !== label)
    } else {
        form.interests.push(label)
    }
}
</script>

<template>
    <div class="bg-gray-50 min-h-screen pb-12">

        <header class="bg-teal-900 text-white pt-20 pb-20 px-6 mb-12 text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-5">
                <Icon name="heroicons:globe-europe-africa" class="text-[400px] absolute -right-20 -top-20"
                    data-aos="zoom-in" data-aos-duration="2000" />
            </div>

            <div class="relative z-10 max-w-3xl mx-auto">
                <span data-aos="fade-down" class="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">
                    custom trip
                </span>
                <h1 data-aos="fade-up" data-aos-delay="100" class="text-3xl md:text-5xl font-bold mb-6">
                    Rancang Liburan dan Wujudkan Impianmu
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" class="text-teal-100 text-lg leading-relaxed">
                    Isi formulir di bawah, kami yang akan urus sisanya.
                </p>
            </div>
        </header>

        <div class="container mx-auto px-6 lg:px-16 max-w-2xl">

            <div class="flex justify-between items-center mb-8 relative"  data-aos="zoom-in" data-aos-duration="2000">
                <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>
                <div class="absolute top-1/2 left-0 h-1 bg-teal-500 -z-10 transition-all duration-500"
                    :style="{ width: ((currentStep - 1) / (totalSteps - 1)) * 100 + '%' }"></div>

                <div v-for="step in totalSteps" :key="step" class="flex flex-col items-center bg-gray-50 px-2">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-2"
                        :class="step <= currentStep ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-400 border-gray-300'">
                        {{ step }}
                    </div>
                    <span class="text-xs mt-2 font-medium"
                        :class="step <= currentStep ? 'text-teal-700' : 'text-gray-400'">
                        {{ step === 1 ? 'Detail' : step === 2 ? 'Minat' : 'Kontak' }}
                    </span>
                </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                data-aos="fade-up" data-aos-delay="400">

                <div v-if="currentStep === 1" class="animate-fade-in">
                    <h2 class="text-xl font-bold text-gray-800 mb-6">Mau liburan ke mana?</h2>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Destinasi Utama</label>
                            <select v-model="form.destination"
                                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none">
                                <option value="" disabled>Pilih Tujuan</option>
                                <option v-for="dest in destinations" :key="dest" :value="dest">{{ dest }}</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Rencana Tanggal</label>
                                <input v-model="form.date" type="date"
                                    class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Durasi (Hari)</label>
                                <input v-model="form.duration" type="number" placeholder="Contoh: 3"
                                    class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Peserta</label>
                            <div class="flex items-center gap-4">
                                <button @click="form.pax > 1 ? form.pax-- : null"
                                    class="w-10 h-10 rounded-full bg-gray-100 text-xl font-bold hover:bg-gray-200 border border-gray-300">-</button>
                                <span class="text-xl font-bold w-8 text-center">{{ form.pax }}</span>
                                <button @click="form.pax++"
                                    class="w-10 h-10 rounded-full bg-teal-100 text-teal-700 text-xl font-bold hover:bg-teal-200 border border-teal-300">+</button>
                                <span class="text-sm text-gray-500 ml-2">Orang</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="currentStep === 2" class="animate-fade-in">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Apa minat liburanmu?</h2>
                    <p class="text-sm text-gray-500 mb-6">Pilih minimal satu agar kami bisa sesuaikan spot wisatanya.
                    </p>

                    <div class="grid grid-cols-2 gap-3 mb-6">
                        <div v-for="opt in interestOptions" :key="opt.id" @click="toggleInterest(opt.label)"
                            class="p-4 rounded-xl border cursor-pointer transition flex flex-col items-center text-center gap-2 hover:bg-teal-50"
                            :class="form.interests.includes(opt.label) ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500' : 'border-gray-200 text-gray-500'">
                            <Icon :name="opt.icon" size="24" />
                            <span class="text-sm font-medium">{{ opt.label }}</span>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Estimasi Budget per Orang</label>
                        <div class="flex gap-2">
                            <button v-for="b in ['Hemat', 'Standard', 'Luxury']" :key="b" @click="form.budget = b"
                                class="flex-1 py-2 px-3 rounded-lg text-sm border transition"
                                :class="form.budget === b ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'">
                                {{ b }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="animate-fade-in">
                    <h2 class="text-xl font-bold text-gray-800 mb-6">Terakhir, data pemesan</h2>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                            <input v-model="form.name" type="text" placeholder="Nama Anda"
                                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                            <input v-model="form.whatsapp" type="tel" placeholder="0812..."
                                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Catatan Tambahan
                                (Opsional)</label>
                            <textarea v-model="form.notes" rows="3"
                                placeholder="Misal: Saya alergi seafood, atau request hotel bintang 5..."
                                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between mt-8 pt-6 border-t border-gray-100">
                    <button v-if="currentStep > 1" @click="prevStep"
                        class="text-gray-500 font-medium hover:text-gray-800 px-4 py-2">
                        Kembali
                    </button>
                    <div v-else></div>

                    <button v-if="currentStep < totalSteps" @click="nextStep"
                        :disabled="(currentStep === 1 && !isStep1Valid) || (currentStep === 2 && !isStep2Valid)"
                        class="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        Lanjut
                    </button>

                    <button v-else @click="submitToWhatsapp" :disabled="!form.name || !form.whatsapp"
                        class="bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-lg shadow-green-500/30 flex items-center gap-2 disabled:opacity-50">
                        <Icon name="logos:whatsapp-icon" />
                        Kirim Request
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Animasi Fade In sederhana saat ganti step */
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>