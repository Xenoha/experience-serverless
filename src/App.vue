<template>
  <v-app>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </v-app>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      layout: 'div'
    }
  },
  methods: {
    ...mapActions({
      signInUser: 'user/USER_SIGNED_IN'
    })
  },
  beforeCreate () {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        Auth.currentAuthenticatedUser()
          .then(user => {
            this.signInUser({ user })
            this.signedIn = true
          })
        // eslint-disable-next-line no-return-assign
          .catch(() => this.signedIn = false)
        this.$router.push('/')
      }
      if (info === 'signedOut') {
        this.$router.push('/auth')
        this.signedIn = false
      }
    })
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
</style>
