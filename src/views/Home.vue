<template>
  <div class="white">
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.id" :cols="card.flex">
          <v-hover v-slot:default="{ hover }">
            <v-card outlined height="407" class="flex-column text-center">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out black v-card--reveal display-2 white--text"
                  style="height: 100%"
                >
                  <v-icon color="secondary" class="ma-12 display-3" v-text="card.image"></v-icon>
                  <v-card-title
                    :class="card.class"
                    class="display-2 font-weight-bold justify-center text-uppercase"
                    v-text="card.title"
                  ></v-card-title>
                </div>
                <div v-else>
                  <v-icon color="primary" class="ma-12 display-3" v-text="card.image"></v-icon>
                  <v-card-title
                    :class="card.class"
                    class="justify-center text-uppercase"
                    v-text="card.title"
                  ></v-card-title>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      cards: [
        { id: 1, class: 'display-1', title: 'Welcome User', flex: 12 },
        { id: 2, class: 'display-2', title: 'my experience', image: 'mdi-animation', flex: 3 },
        { id: 3, class: 'display-2', title: 'my content', image: 'mdi-folder-plus', flex: 3 },
        { id: 4, class: 'display-2', title: 'my playlists', image: 'mdi-animation-play', flex: 3 },
        { id: 5, class: 'display-2', title: 'my messages', image: 'mdi-message-reply-text', flex: 3 }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  },
  created () {
    this.$emit('update:layout', HomeLayout)
  }

}
</script>

<style lang="scss" scoped>
.v-vard--reveal {
  opacity: 0.5;
}

.theme--light.v-card.v-card--outlined {
  border: solid rgb(0, 0, 0) !important;
}
</style>
