<template>
  <v-layout justify-center>
<v-form fluid style="margin: 1px; padding: 1px; align: middle; width: 100% ">
   <panel title="Songs">
     <div v-for="song in songs" :key="song.titel">
       {{song.title}} - 
       {{song.artists}} - 
       {{song.album}}
     </div>

     </panel>
  </v-form>
  </v-layout>
</template>

<script>
import SongsServices from '@/services/SongsServices.js'
import Panel from '@/components/Panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
     this.songs = await SongsServices.index()
  }
  }
</script>

<style scoped>

</style>
