import Vue from 'vue'
import App from './App.vue'
import GApi from 'vue-gapi'

Vue.config.productionTip = false

declare global {
  const gapi: any;
}

Vue.use(GApi, {
  apiKey: 'AIzaSyDPzLY6L36krINVPj-76dGFFKMX9w69au4',
  clientId: '804955345322-7vko1g67u1lmt317dqfchh24b2rn1d3d.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
