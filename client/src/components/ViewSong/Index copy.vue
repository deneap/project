<template>

  <v-layout>
    <song-metadata :song="song" />
           <v-flex xs3>

      </v-flex>

      <v-flex xs3>          
  </v-layout>
</template>



<script>
import SongMetadata from './SongMetadata.vue'
import SongsServices from '@/services/SongsServices.js'
import Panel from '@/components/Panel.vue'

 export default {
 data () {
    return {
      song: null
    }
  },
    async created () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsServices.show(songId)).data
    },
    componets: {
    Panel,
    SongMetadata
    }
}
</script>

<style scoped>
</style>
