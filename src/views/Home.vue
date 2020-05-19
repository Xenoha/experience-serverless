<template>
  <div class="white">
    <v-container fluid>
      <v-row class="primary">
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-hover v-slot:default="{ hover }">
            <v-card raised height="407" class="flex-column text-center">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out grey darken-2 v-card--reveal display-2 white--text"
                  style="height: 100%"
                >
                  <v-icon color="white" class="ma-12 display-3" x-large v-text="card.image"></v-icon>
                  <v-card-title
                    class="display-2 font-weight-bold justify-center text-uppercase"
                    v-text="card.title"
                  ></v-card-title>
                </div>
                <div v-else>
                  <v-icon color="primary" class="ma-12 display-3" x-large v-text="card.image"></v-icon>
                  <v-card-title class="display-2 justify-center text-uppercase" v-text="card.title"></v-card-title>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeLayout from '@/layouts/Home'

export default {
  name: 'Home',
  data () {
    return {
      cards: [
        { title: 'Welcome to the Reflect Experience', flex: 12 },
        { title: 'my experience', image: 'mdi-animation', flex: 4 },
        { title: 'my content', image: 'mdi-folder-plus', flex: 4 },
        { title: 'my playlists', image: 'mdi-animation-play', flex: 4 }
      ]
    }
  },
  created () {
    this.$emit('update:layout', HomeLayout)
  }

}
</script>

<style lang="scss">
.v-vard--reveal {
  opacity: 0.5;
}
</style>
