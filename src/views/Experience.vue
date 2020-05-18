<template>
  <section class="experience">
    <h1>Experience View</h1>
  </section>
</template>

<script>
import DashboardLayout from '@/layouts/Dashboard'

export default {
  name: 'experienceView',
  created () {
    this.$emit('update:layout', DashboardLayout)
  }

}
</script>

<style lang="scss">
</style>>
