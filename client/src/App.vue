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
