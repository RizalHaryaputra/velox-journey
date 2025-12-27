<script setup>
// DATA DUMMY TIM
const teamMembers = [
    {
        name: "Rizal Haryaputra",
        role: "Founder & CEO",
        image: "http://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
        quote: "Traveling bukan sekadar jalan-jalan, tapi tentang menemukan diri sendiri."
    },
    {
        name: "Raihan Pratama",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        quote: "Detail adalah kunci kepuasan pelanggan. Kami pastikan trip Anda sempurna."
    },
    {
        name: "Budi Santoso",
        role: "Senior Trip Planner",
        image: "https://images.unsplash.com/photo-1652695904100-87e2797371f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
        quote: "Saya akan merancang itinerary yang paling sesuai dengan kepribadian Anda."
    }
]

// DATA DUMMY STATISTIK
const stats = [
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "1.2k+", label: "Trip Terlaksana" },
    { value: "98%", label: "Tingkat Kepuasan" },
    { value: "50+", label: "Destinasi Eksotis" },
]
</script>

<template>
    <div class="bg-white pb-20">

        <header class="bg-teal-900 text-white pt-20 pb-20 px-6 text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-5">
                <Icon name="heroicons:globe-asia-australia" class="text-[400px] absolute -right-20 -top-20" />
            </div>

            <div class="relative z-10 max-w-3xl mx-auto">
                <span class="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">Tentang Velox
                    Journey</span>
                <h1 class="text-3xl md:text-5xl font-bold mb-6">Mewujudkan Perjalanan Impian Menjadi Kenyataan</h1>
                <p class="text-teal-100 text-lg leading-relaxed">
                    Kami percaya bahwa setiap perjalanan haruslah unik, personal, dan tak terlupakan.
                    Velox hadir untuk menghapus kerumitan dalam merencanakan liburan.
                </p>
            </div>
        </header>

        <section class="container mx-auto px-6 lg:px-16 py-20">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="w-full md:w-1/2 relative">
                    <div class="absolute -top-4 -left-4 w-20 h-20 bg-teal-100 rounded-full -z-10"></div>
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Our Team Working" class="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
                    <div
                        class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
                        <p class="text-gray-600 italic text-sm">"We build trust, one trip at a time."</p>
                    </div>
                </div>

                <div class="w-full md:w-1/2">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Berawal dari Ransel Sederhana</h2>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        Velox Journey didirikan pada tahun 2020 oleh sekelompok mahasiswa pecinta alam yang frustrasi
                        dengan layanan tour konvensional yang kaku dan membosankan.
                    </p>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Kami memulai dengan trip kecil di sekitar Yogyakarta, fokus pada tempat-tempat tersembunyi
                        (Hidden Gems). Kini, kami telah berkembang melayani ribuan traveler yang mencari pengalaman
                        <strong>Private & Exclusive</strong> di seluruh Indonesia.
                    </p>

                    <div class="flex gap-4">
                        <div class="pl-4 border-l-4 border-teal-500">
                            <h4 class="font-bold text-gray-800">Visi Kami</h4>
                            <p class="text-sm text-gray-500">Menjadi partner perjalanan private #1 di Indonesia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-teal-50 py-16 border-y border-teal-100">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div v-for="(stat, idx) in stats" :key="idx">
                        <h3 class="text-4xl font-bold text-teal-600 mb-1">{{ stat.value }}</h3>
                        <p class="text-gray-600 font-medium">{{ stat.label }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto px-6 lg:px-16 py-20">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Tim di Balik Layar</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Orang-orang berdedikasi yang memastikan setiap detail perjalanan Anda terencana dengan sempurna.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="member in teamMembers" :key="member.name"
                    class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group border border-gray-100">
                    <div class="h-64 overflow-hidden">
                        <img :src="member.image" :alt="member.name"
                            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    </div>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-bold text-gray-800">{{ member.name }}</h3>
                        <p class="text-teal-600 font-medium text-sm mb-4">{{ member.role }}</p>
                        <hr class="border-gray-100 mb-4">
                        <p class="text-gray-500 text-sm italic">"{{ member.quote }}"</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto px-6 lg:px-16">
            <div class="bg-teal-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full -mr-20 -mt-20 opacity-50"></div>
                <div class="absolute bottom-0 left-0 w-40 h-40 bg-teal-800 rounded-full -ml-10 -mb-10 opacity-50"></div>

                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Siap Menjelajah Bersama Kami?</h2>
                    <p class="text-teal-100 mb-8 max-w-xl mx-auto">Jangan ragu untuk menyapa. Tim kami siap membantu
                        merancang itinerary impian Anda, gratis konsultasi!</p>
                    <NuxtLink to="https://wa.me/6281234567890" target="_blank"
                        class="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                        <Icon name="logos:whatsapp-icon" />
                        Chat Tim Kami
                    </NuxtLink>
                </div>
            </div>
        </section>

    </div>
</template>