<script setup>
// State Form
const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSent = ref(false)
const isLoading = ref(false)

// Fungsi Kirim Pesan (Simulasi)
const sendMessage = () => {
    if (!form.name || !form.email || !form.message) return

    isLoading.value = true

    // Simulasi loading kirim ke server
    setTimeout(() => {
        isLoading.value = false
        isSent.value = true

        // Reset form setelah 3 detik
        setTimeout(() => {
            isSent.value = false
            form.name = ''
            form.email = ''
            form.subject = ''
            form.message = ''
        }, 5000)
    }, 1500)
}

// Data Kontak Informasi
const contactInfo = [
    {
        icon: 'heroicons:map-pin',
        title: 'Alamat Kantor',
        desc: 'Jl. Malioboro No. 123, Yogyakarta, Indonesia',
        action: 'Lihat di Peta',
        link: 'https://maps.google.com'
    },
    {
        icon: 'logos:whatsapp-icon',
        title: 'WhatsApp (Fast Resp)',
        desc: '+62 812-3456-7890',
        action: 'Chat Sekarang',
        link: 'https://wa.me/6281234567890'
    },
    {
        icon: 'heroicons:envelope',
        title: 'Email Resmi',
        desc: 'hello@veloxjourney.com',
        action: 'Kirim Email',
        link: 'mailto:hello@veloxjourney.com'
    }
]
</script>

<template>
    <div class="bg-gray-50 min-h-screen pb-20">
        <header class="bg-teal-900 text-white pt-20 pb-20 px-6 mb-12 text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-5">
                <Icon name="heroicons:chat-bubble-left-right" class="text-[400px] absolute -right-20 -top-20" />
            </div>

            <div class="relative z-10 max-w-3xl mx-auto">
                <span class="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">kontak</span>
                <h1 class="text-3xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
                <p class="text-teal-100 text-lg leading-relaxed">
                    Ada pertanyaan tentang paket wisata atau ingin konsultasi custom trip?
                Tim kami siap membantu 24/7.
                </p>
            </div>
        </header>

        <div class="container mx-auto px-6 lg:px-16">
            <div class="grid lg:grid-cols-3 gap-8">

                <div class="lg:col-span-1 space-y-6">
                    <div v-for="(info, idx) in contactInfo" :key="idx"
                        class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition group">
                        <div
                            class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition">
                            <Icon :name="info.icon" size="24" class="text-teal-600" />
                        </div>
                        <h3 class="font-bold text-gray-800 text-lg">{{ info.title }}</h3>
                        <p class="text-gray-500 text-sm mb-4">{{ info.desc }}</p>
                        <a :href="info.link" target="_blank"
                            class="text-teal-600 font-bold text-sm hover:underline flex items-center gap-1">
                            {{ info.action }}
                            <Icon name="heroicons:arrow-right" size="14" />
                        </a>
                    </div>

                    <div class="bg-white p-2 rounded-xl shadow-md border border-gray-100 h-64 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.962040003024!2d110.36622527500516!3d-7.793836277353987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578677051381%3A0x6b7754d7e97491d0!2sMalioboro%20Yogyakarta!5e0!3m2!1sen!2sid!4v1703649553755!5m2!1sen!2sid"
                            width="100%" height="100%" style="border:0; border-radius: 0.75rem;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>

                        <div v-if="isSent"
                            class="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                            <Icon name="heroicons:check-circle" size="24" />
                            <div>
                                <p class="font-bold">Pesan Terkirim!</p>
                                <p class="text-sm">Tim kami akan membalas email Anda dalam waktu 1x24 jam.</p>
                            </div>
                        </div>

                        <form @submit.prevent="sendMessage" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                                    <input v-model="form.name" type="text" placeholder="Masukkan nama" required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Alamat Email</label>
                                    <input v-model="form.email" type="email" placeholder="contoh@email.com" required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition" />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Subjek Pesan</label>
                                <select v-model="form.subject"
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition">
                                    <option value="" disabled selected>Pilih Topik</option>
                                    <option>Tanya Paket Wisata</option>
                                    <option>Request Kerjasama</option>
                                    <option>Komplain / Saran</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Isi Pesan</label>
                                <textarea v-model="form.message" rows="5"
                                    placeholder="Tulis detail pertanyaan Anda di sini..." required
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition"></textarea>
                            </div>

                            <button type="submit" :disabled="isLoading"
                                class="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition shadow-lg shadow-teal-600/20 disabled:opacity-70 flex items-center justify-center gap-2">
                                <span v-if="isLoading">
                                    <Icon name="line-md:loading-twotone-loop" /> Mengirim...
                                </span>
                                <span v-else>Kirim Pesan Sekarang</span>
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>