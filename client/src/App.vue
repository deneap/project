<template>
<div id="app">
  <v-app>
    <page-header />
    <main>
    <v-content fluent>
<router-view></router-view>
    </v-content>
    </main>
  </v-app>
</div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert {
  color: red;
  font: bolder;
}
</style>