import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.hook('page:finish', () => {
            // Init AOS saat halaman selesai dimuat
            AOS.init({
                duration: 800, // Durasi animasi (ms)
                easing: 'ease-out-cubic', // Gaya gerakan
                once: true, // Animasi hanya sekali (biar gak pusing pas scroll naik turun)
                offset: 50, // Mulai animasi sedikit lebih awal
            })
        })
    }
})