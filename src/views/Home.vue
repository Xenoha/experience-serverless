<template>
  <div class="white">
    <v-container fluid>
      <v-row class="primary">
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card raised height="407" class="flex-column text-center">
            <v-icon color="primary" class="ma-12 display-3" x-large v-text="card.image"></v-icon>
            <v-card-title class="display-2 justify-center text-uppercase" v-text="card.title"></v-card-title>
          </v-card>
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

<style>
</style>
