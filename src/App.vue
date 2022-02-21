<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdfdfd;
}
</style>
