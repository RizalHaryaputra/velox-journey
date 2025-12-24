import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'
// import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
    const config = {
        apiKey: "AIzaSyD6YQH4smzpLo-Yc0D8MBN5JWISarKdL0I",
        authDomain: "velox-jouorney.firebaseapp.com",
        projectId: "velox-jouorney",
        storageBucket: "velox-jouorney.firebasestorage.app",
        messagingSenderId: "107010067376",
        appId: "1:107010067376:web:aec4edb4385e6d24886475",
        measurementId: "G-GNMG7J5JDJ"
    }

    // 1. Init App
    const app = initializeApp(config)

    // 2. Init Services
    const db = getFirestore(app)
    // const storage = getStorage(app)
    // const auth = getAuth(app)

    // 3. Provide ke Nuxt App
    return {
        provide: {
            db,
            // storage,
            // auth
        }
    }
})