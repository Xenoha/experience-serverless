<template>
  <section>
    <Header />

    <v-content>
      <slot />
    </v-content>
  </section>
</template>

<script>
import Header from '@/components/layouts/Header'

export default {
  name: 'HomeLayout',
  components: {
    Header
  }

}
</script>

<style lang="scss">
</style>
