import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/index.less'

createApp(App).use(router).mount('#app')
