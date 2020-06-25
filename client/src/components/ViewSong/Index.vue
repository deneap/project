<template>
  <v-layout>
           <v-flex xs8>
            <song-metadata :song="song" />
        
      </v-flex>

      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" />
        </v-flex>
    <!-- </v-container> -->
    
        <!-- </v-form> -->

          
  </v-layout>
</template>

<script>
import YouTube from './YouTube.vue'
import SongMetadata from './SongMetadata.vue'
import SongsServices from '@/services/SongsServices.js'
// import Panel from '@/components/Panel.vue'

 export default {
   components: {
      // Panel,
      'song-metadata': SongMetadata,
      YouTube
    },
 data () {
    return {
      song: null
    }
  },
    async created () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsServices.show(songId)).data
    },
    
}
</script>

<style scoped>
</style>
