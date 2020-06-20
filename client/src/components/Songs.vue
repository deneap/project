<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
<!-- <v-form fluid style="margin: 1px; padding: 1px; align: middle; width: 100% "> -->
   <panel title="Songsw">
     <div slot="hello">
       <h3> YO YO YO</h3>
         <p>hi hihih</p>
     <div class="test" v-for="song in songs" :key="song.id">
       {{song.title}} - 
       {{song.artists}} - 
       {{song.album}} 
     </div>
     </div>
     </panel>
  <!-- </v-form> -->
    </v-flex>
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
      songs: null,
    }
  },
  async created () {
    this.songs = (await SongsServices.listSongs()).data;
  }
}
</script>

<style scoped>

</style>
