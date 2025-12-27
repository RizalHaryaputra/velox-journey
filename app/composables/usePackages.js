export const usePackages = () => {
    const packages = [
        {
            id: 1,
            title: "Eksotisme Pasir Putih Jogja Selatan",
            location: "Gunungkidul, Yogyakarta",
            category: "Nature",
            price: 2500000,
            duration: "3 Hari 2 Malam",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
            description: "Rasakan pengalaman liburan tak terlupakan di deretan pantai pasir putih Gunungkidul. Paket ini dirancang khusus untuk Anda yang ingin menikmati laut lepas, sunset romantis, dan kuliner seafood segar tanpa repot mengurus transportasi dan tiket.",
            images: [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
                "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?q=80&w=1170",
                "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1170"
            ],
            facilities: ["Private Transport (Innova)", "Hotel Bintang 3 (2 Malam)", "Makan 7x (Seafood Jimbaran)", "Tiket Masuk", "Dokumentasi Drone", "P3K"],
            itinerary: [
                { day: 1, title: "Arrival & Beach Hopping", activities: ["08:00 - Jemput Bandara YIA", "12:00 - Makan Siang", "14:00 - Pantai Indrayanti", "17:00 - Sunset Heha Ocean View"] },
                { day: 2, title: "Cave Tubing & Cliff", activities: ["08:00 - Cave Tubing Pindul", "13:00 - Pantai Drini", "16:00 - Tebing Breksi", "19:00 - Dinner Bukit Bintang"] },
                { day: 3, title: "City Tour & Out", activities: ["09:00 - Oleh-oleh Khas Jogja", "11:00 - Keraton Yogyakarta", "13:00 - Drop Bandara"] }
            ]
        },
        {
            id: 2,
            title: "Sunrise Adventure Bromo Tengger",
            location: "Malang, Jawa Timur",
            category: "Adventure",
            price: 3200000,
            duration: "2 Hari 1 Malam",
            image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000",
            description: "Saksikan keajaiban matahari terbit dari salah satu spot terbaik di dunia. Petualangan menggunakan Jeep 4WD menembus lautan pasir, mendaki kawah Bromo, dan menikmati sejuknya udara pegunungan Tengger.",
            images: [
                "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000",
                "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=1000",
                "https://images.unsplash.com/photo-1696884422016-16693dc4f18d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb21vfGVufDB8fDB8fHww"
            ],
            facilities: ["Transport PP Malang-Bromo", "Jeep Hardtop 4WD", "Homestay Bromo (1 Malam)", "Tiket TNBTS", "Dokumentasi Foto", "Snack & Coffee"],
            itinerary: [
                { day: 1, title: "Malang City Tour", activities: ["10:00 - Jemput Stasiun Malang", "13:00 - Kampung Warna Warni", "15:00 - Check-in Homestay", "19:00 - Free Time"] },
                { day: 2, title: "The Golden Sunrise", activities: ["02:00 - Persiapan Jeep", "04:00 - Sunrise Point Penanjakan", "06:00 - Kawah Bromo & Pasir Berbisik", "11:00 - Kembali ke Malang"] }
            ]
        },
        {
            id: 3,
            title: "Hidden Paradise Labuan Bajo",
            location: "Nusa Tenggara Timur",
            category: "Nature",
            price: 5500000,
            duration: "4 Hari 3 Malam",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000",
            description: "Jelajahi keajaiban dunia di habitat asli Komodo. Berlayar dengan kapal Phinisi mewah, berenang di Pink Beach, dan hiking ke puncak Padar Island untuk pemandangan ikonik yang menakjubkan.",
            images: [
                "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000",
                "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFidWFuJTIwYmFqb3xlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1643044034131-001b53336bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhYnVhbiUyMGJham98ZW58MHx8MHx8fDA%3D"
            ],
            facilities: ["Living on Board (Phinisi AC)", "Antar Jemput Bandara", "Makan Selama Trip", "Alat Snorkeling", "Guide Lokal", "Tiket TN Komodo"],
            itinerary: [
                { day: 1, title: "Arrival & Sunset", activities: ["14:00 - Jemput Bandara Komodo", "16:00 - Bukit Sylvia", "18:00 - Check-in Hotel Labuan Bajo"] },
                { day: 2, title: "Sailing Komodo Part 1", activities: ["08:00 - Start Sailing", "10:00 - Pulau Kelor", "13:00 - Pulau Rinca (Komodo)", "17:00 - Sunset di Kalong"] },
                { day: 3, title: "Sailing Komodo Part 2", activities: ["05:00 - Sunrise Padar Island", "09:00 - Pink Beach", "13:00 - Manta Point", "16:00 - Kembali ke Pelabuhan"] },
                { day: 4, title: "Departure", activities: ["09:00 - Toko Souvenir", "11:00 - Drop Bandara"] }
            ]
        },
        {
            id: 4,
            title: "Cultural Trip Ubud & Kintamani",
            location: "Bali",
            category: "Culture",
            price: 4100000,
            duration: "3 Hari 2 Malam",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
            description: "Menikmati sisi tenang Bali dengan nuansa budaya yang kental. Mengunjungi Monkey Forest, Tegalalang Rice Terrace, hingga menikmati pemandangan Gunung Batur dari Kintamani.",
            images: [
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
                "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1000",
                "https://images.unsplash.com/photo-1573593196537-1fa671fb0005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx1YnVkfGVufDB8fDB8fHww"
            ],
            facilities: ["Private Car (Avanza/Xpander)", "Resort di Ubud", "Tiket Tari Kecak", "Makan Siang Kintamani", "Guide Bali"],
            itinerary: [
                { day: 1, title: "Ubud Essence", activities: ["10:00 - Jemput Ngurah Rai", "13:00 - Monkey Forest", "16:00 - Tegalalang Rice Terrace", "19:00 - Check-in Resort"] },
                { day: 2, title: "Highland & Temple", activities: ["09:00 - Pura Tirta Empul", "12:00 - Lunch View Batur Kintamani", "15:00 - Desa Penglipuran", "19:00 - Dinner Jimbaran"] },
                { day: 3, title: "Art & Leave", activities: ["09:00 - Pasar Seni Sukawati", "12:00 - Drop Bandara"] }
            ]
        },
        {
            id: 5,
            title: "Hiking Rinjani Summit",
            location: "Lombok, NTB",
            category: "Adventure",
            price: 4800000,
            duration: "4 Hari 3 Malam",
            image: "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?q=80&w=1229",
            description: "Tantang diri Anda menaklukkan atap Lombok! Pendakian eksklusif dengan porter dan peralatan lengkap. Nikmati pemandangan Danau Segara Anak yang magis dari ketinggian.",
            images: [
                "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?q=80&w=1229",
                "https://images.unsplash.com/photo-1654862048364-72d809f46a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJpbmphbml8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000"
            ],
            facilities: ["Porter & Guide Profesional", "Tenda & Sleeping Bag", "Makan Selama Pendakian", "Transport Basecamp", "Simaksi Rinjani"],
            itinerary: [
                { day: 1, title: "Basecamp", activities: ["Jemput Bandara Lombok", "Transfer ke Sembalun", "Briefing & Cek Alat", "Istirahat di Homestay"] },
                { day: 2, title: "Start Trekking", activities: ["07:00 - Start Pendakian", "12:00 - Makan Siang Pos 2", "17:00 - Camp di Plawangan Sembalun"] },
                { day: 3, title: "The Summit", activities: ["02:00 - Summit Attack", "06:00 - Sunrise Puncak Rinjani", "09:00 - Turun ke Segara Anak (Opsional)", "16:00 - Camp"] },
                { day: 4, title: "Finish", activities: ["07:00 - Turun ke Basecamp", "15:00 - Drop Bandara/Kota"] }
            ]
        },
        {
            id: 6,
            title: "Honeymoon Suite Nusa Penida",
            location: "Bali",
            category: "Honeymoon",
            price: 6500000,
            duration: "3 Hari 2 Malam",
            image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1000",
            description: "Paket romantis khusus pasangan. Menginap di Villa private pool Nusa Penida, mengunjungi Pantai Kelingking yang ikonik, dan menikmati Candle Light Dinner di tepi pantai.",
            images: [
                "https://images.unsplash.com/photo-1644027622521-d0ca669c40d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fE51c2ElMjBQZW5pZGF8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1711786120067-fcadce6c481f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fE51c2ElMjBQZW5pZGF8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1679306383833-e184b4b81eda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fE51c2ElMjBQZW5pZGF8ZW58MHx8MHx8fDA%3D"
            ],
            facilities: ["Fastboat PP Sanur", "Private Villa with Pool", "Mobil + Driver Private", "Dekorasi Honeymoon", "Candle Light Dinner", "Fotografer"],
            itinerary: [
                { day: 1, title: "West Penida", activities: ["08:00 - Nyebrang dari Sanur", "10:00 - Kelingking Beach", "13:00 - Broken Beach & Angel Billabong", "17:00 - Crystal Bay Sunset"] },
                { day: 2, title: "East Penida", activities: ["09:00 - Diamond Beach", "11:00 - Atuh Beach", "13:00 - Rumah Pohon Molenteng", "19:00 - Romantic Dinner"] },
                { day: 3, title: "Relax & Back", activities: ["09:00 - Floating Breakfast", "11:00 - Check-out", "14:00 - Kembali ke Bali"] }
            ]
        },
        {
            id: 7,
            title: "Borobudur & Heritage Tour",
            location: "Magelang, Jawa Tengah",
            category: "Culture",
            price: 2100000,
            duration: "2 Hari 1 Malam",
            image: "https://images.unsplash.com/photo-1620549146260-938c38c31c13?q=80&w=1171",
            description: "Wisata edukasi dan sejarah mengunjungi candi Buddha terbesar di dunia. Dilengkapi dengan kunjungan ke sentra kerajinan perak Kotagede dan melihat matahari terbit dari Punthuk Setumbu.",
            images: [
                "https://images.unsplash.com/photo-1620549146260-938c38c31c13?q=80&w=1171",
                "https://images.unsplash.com/photo-1734489264516-b8f5461f3353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvcm9idWR1cnxlbnwwfHwwfHx8MA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1691031429398-1048ee03bff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJvcm9idWR1cnxlbnwwfHwwfHx8MA%3D%3D"
            ],
            facilities: ["Transport Private", "Hotel Magelang (1 Malam)", "Tiket VIP Borobudur (Naik Candi)", "Guide Sejarah", "VW Safari Tour"],
            itinerary: [
                { day: 1, title: "Temple Run", activities: ["08:00 - Jemput Jogja", "10:00 - Candi Prambanan", "14:00 - Candi Ratu Boko", "19:00 - Check-in Hotel Magelang"] },
                { day: 2, title: "Sunrise & Stupa", activities: ["04:00 - Sunrise Punthuk Setumbu", "07:00 - Gereja Ayam", "09:00 - Candi Borobudur", "14:00 - Tour Desa Wisata dengan VW"] }
            ]
        },
        {
            id: 8,
            title: "Derawan Island Hopping",
            location: "Kalimantan Timur",
            category: "Nature",
            price: 5200000,
            duration: "4 Hari 3 Malam",
            image: "http://images.unsplash.com/photo-1580576234025-6cf2622785b7?q=80&w=722",
            description: "Surga tropis di ujung Kalimantan. Berenang bersama ubur-ubur tidak menyengat di Kakaban, melihat penyu bertelur di Sangalaki, dan menikmati jernihnya air di Maratua.",
            images: [
                "http://images.unsplash.com/photo-1580576234025-6cf2622785b7?q=80&w=722",
                "https://images.unsplash.com/photo-1727402528721-9b3715d4ce1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVyYXdhbnxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1601649722729-3301fb3b27f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVyYXdhbnxlbnwwfHwwfHx8MA%3D%3D"
            ],
            facilities: ["Speedboat Private", "Water Cottage Derawan", "Alat Snorkeling", "Makan 9x", "Tiket Masuk Pulau", "Antar Jemput Berau"],
            itinerary: [
                { day: 1, title: "Arrival", activities: ["12:00 - Jemput Bandara Kalimarau", "14:00 - Perjalanan ke Pelabuhan", "16:00 - Menyeberang ke Derawan", "19:00 - Dinner"] },
                { day: 2, title: "3 Island Tour", activities: ["08:00 - Maratua Paradise", "11:00 - Gua Halo Tabung", "13:00 - Danau Kakaban (Ubur-ubur)", "16:00 - Sangalaki (Manta & Penyu)"] },
                { day: 3, title: "Whaleshark", activities: ["05:00 - Spot Hiu Paus Talisayan", "10:00 - Manimbora (Spongebob Island)", "14:00 - Gusung Pasir", "19:00 - BBQ Dinner"] },
                { day: 4, title: "Back Home", activities: ["07:00 - Check-out", "10:00 - Drop Bandara"] }
            ]
        }
    ]

    // Fungsi untuk mengambil semua data
    const getAllPackages = () => {
        return packages
    }

    // Fungsi untuk mengambil 1 data berdasarkan ID
    const getPackageById = (id) => {
        return packages.find(p => p.id === Number(id))
    }

    return {
        packages,
        getAllPackages,
        getPackageById
    }
}