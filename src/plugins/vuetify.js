import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000000',
        secondary: '#FF9100',
        accent: '#E0E0E0',
        error: 'red',
        info: 'green',
        success: 'lightblue',
        warning: 'yellow'
      }
    }
  }
})
