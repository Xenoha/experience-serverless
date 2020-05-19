<template>
  <section>
    <Header />

    <v-content>
      <v-toolbar height="80vh" color="accent" flat>
        <v-icon
          x-large
          color="secondary"
          class="pl-2 pb-2 align-self-end display-3"
        >mdi-animation-outline</v-icon>
        <v-toolbar-title class="align-self-end">
          <div class="px-5 primary--text display-2 text-uppercase font-weight-bold">my experiences</div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon text class="mr-1 mb-1 align-self-end">
          <v-icon @click="currentView = 'gridView'" large :color="viewColor">mdi-view-grid</v-icon>
        </v-btn>

        <v-btn icon text class="mr-5 mb-1 align-self-end">
          <v-icon @click="currentView = 'listView'" large :color="menuColor">mdi-menu</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
  </section>
</template>

<script>
import Header from '@/components/layouts/Header'

export default {
  name: 'DashboardLayout',
  components: {
    Header
  },
  data () {
    return {
      currentView: 'gridView'
    }
  },
  computed: {
    viewColor () {
      if (this.currentView === 'gridView') {
        return 'primary'
      } else return 'grey lighten-1'
    },
    menuColor () {
      if (this.currentView === 'listView') {
        return 'primary'
      } else return 'grey lighten-1'
    }
  }

}
</script>

<style lang="scss">
</style>
