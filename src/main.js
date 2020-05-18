import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsExports from './aws-exports'
import vuetify from './plugins/vuetify'
Amplify.configure(awsExports)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
