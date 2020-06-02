<template>
  <div>
    <v-app-bar app clipped-left flat color="primary" dark dense prominent class="align-center">
      <div class="pl-2 d-flex align-self-center">
        <v-img class="shrink mr-2" :src="headerLogo" transition="scale-transition" width="28vw" />

        <v-tabs
          optional
          class="align-self-center px-4"
          dark
          background-color="primary"
          slider-color="secondary"
        >
          <v-tab
            class="mx-2 white--text body-2 text-uppercase"
            v-for="tab in tabs"
            :key="tab.title"
            :to="tab.to"
          >{{ tab.title }}</v-tab>
        </v-tabs>
      </div>
      <v-spacer />

      <div class="d-flex align-self-center">
        <v-btn icon class="mx-2">
          <v-icon large>mdi-shield-lock</v-icon>
        </v-btn>
        <v-menu offset-y :close-on-click="true">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" fab small color="secondary" class="mx-4 mt-1">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-tabs vertical color="primary" optional>
            <v-tab>
              Settings
              <v-icon right>mdi-cog</v-icon>
            </v-tab>
            <v-divider />
            <v-tab>
              Profile
              <v-icon right>mdi-account</v-icon>
            </v-tab>
            <v-divider />
            <v-tab @click="signOut">
              Signout
              <v-icon right>mdi-lock</v-icon>
            </v-tab>
          </v-tabs>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer app floating clipped width="8vw" expand-on-hover color="grey darken-2">
      <v-list nav flat class="navigation-drawer__list">
        <v-list-item-group color="white">
          <v-list-item v-for="drawer in navigationIcons" :key="drawer.type" :to="drawer.to">
            <v-list-item-icon>
              <v-icon class="black--text" v-text="drawer.type"></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="mx-n6 black--text">
              <v-list-item-title
                class="body-2 text-uppercase font-weight-bold"
                v-text="drawer.row1"
              ></v-list-item-title>
              <v-list-item-title
                class="body-2 text-uppercase font-weight-bold"
                v-text="drawer.row2"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { Auth, I18n } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'header',
  data () {
    return {
      layout: 'div',
      headerLogo: require('@/assets/reflect/reflect_x_cloud_logo.png'),
      tabs: [
        { title: 'home', to: '/' },
        { title: 'my experience', to: '/experience' },
        { title: 'my content ', to: '/content' },
        { title: 'my playlists', to: '/playlist' },
        { title: 'my messages', to: '/messages' }
      ],
      navigationIcons: [
        { type: 'mdi-animation-outline', row1: 'create', row2: 'experience', to: '/experience' },
        { type: 'mdi-animation-play', row1: 'create', row2: 'playlists', to: '/playlist' },
        { type: 'mdi-file-import-outline', row1: 'add', row2: 'content', to: '/import' },
        { type: 'mdi-folder-plus-outline', row1: 'create', row2: 'content', to: '/create' }
      ],
      accountItems: [
        { title: 'Profile', onClick: '' },
        { title: 'Signout', onClick: this.signOut }
      ]
    }
  },
  methods: {
    signOut () {
      Auth.signOut()
        .then(() => {
          return AmplifyEventBus.$emit('authState', 'signedOut')
        })
        .catch(err => this.setError(err))
    },
    setError (err) {
      const error = I18n.get(err.message || err)
      console.log(error)
    }
  }
}
</script>

<style lang="scss">
.navigation-drawer__list {
  margin-top: 25vh;
}
</style>
