import { createApp } from 'vue'
import { Quasar } from 'quasar'
// import './style.css'
import { router } from './routes/router.js'
import App from './App.vue'
// import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {},
})

myApp.use(router)

myApp.mount('#app')

// createApp(App).mount('#app')
