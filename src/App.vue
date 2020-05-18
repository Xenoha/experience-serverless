<template>
  <v-app>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      layout: 'div'
    }
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
</style>
