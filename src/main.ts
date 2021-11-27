import Vue from 'vue'
import App from './App.vue'
import GApi from 'vue-gapi'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

Vue.use(GApi, {
  apiKey: 'AIzaSyDPzLY6L36krINVPj-76dGFFKMX9w69au4',
  clientId: '804955345322-7vko1g67u1lmt317dqfchh24b2rn1d3d.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar',
})

Vue.use(VueToast)

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.mixin({
  mounted() {
    if (document && this.$options.pageTitle) {
      document.title = this.$options.pageTitle
    }

    if (document && this.$options.pageSubtitle) {
      document.title = `Calendar - ${this.$options.pageSubtitle}`
    }
  }
} as any)