import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

Vue.use(VueYouTubeEmbed, { global: false })

Vue.config.productionTip = false

sync(store, router)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
