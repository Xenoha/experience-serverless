<template>
  <div>
    <v-app-bar app clipped-left flat color="primary" dark dense prominent class="align-center">
      <div class="pl-2 d-flex align-self-center">
        <v-img class="shrink mr-2" :src="headerLogo" transition="scale-transition" width="28vw" />

        <v-tabs class="align-self-center" dark background-color="primary" slider-color="secondary">
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
        <v-text-field prepend-icon="mdi-magnify" single-line class="mx-4" />
        <v-btn fab small color="secondary" class="mx-4">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer app floating clipped width="7vw" expand-on-hover color="secondary">
      <v-list nav flat class="navigation-drawer__list">
        <v-list-item-group color="white">
          <v-list-item v-for="drawer in navigationIcons" :key="drawer.type" :to="drawer.to">
            <v-list-item-icon>
              <v-icon v-text="drawer.type"></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="mx-n6">
              <v-list-item-title class="caption" v-text="drawer.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      layout: 'div',
      headerLogo: require('@/assets/reflect/reflect_x_cloud_logo.png'),
      tabs: [
        { title: 'my experience', to: '/experience' },
        { title: 'my content ', to: '/content' },
        { title: 'my playlists', to: '/playlist' }
      ],
      navigationIcons: [
        { type: 'mdi-home-variant', name: 'home', to: '/' },
        { type: 'mdi-animation-outline', name: 'experiences', to: '/experience' },
        { type: 'mdi-animation-play', name: 'playlists', to: '/playlist' },
        { type: 'mdi-file-import-outline', name: 'import', to: '/import' },
        { type: 'mdi-folder-plus-outline', name: 'create', to: '/create' },
        { type: 'mdi-lock-outline', name: 'admin', to: '/admin' }
      ]
    }
  }
}
</script>

<style lang="scss">
.navigation-drawer__list {
  margin-top: 25vh;
}
</style>
