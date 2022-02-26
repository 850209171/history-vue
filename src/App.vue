<template>
  <div>
    <HomeHead></HomeHead>
    <router-view/>
  </div>
</template>

<script>
import HomeHead from '@/components/header'

export default {
  name: 'App',
  components: {
    HomeHead
  }
}
</script>

<style>
</style>
