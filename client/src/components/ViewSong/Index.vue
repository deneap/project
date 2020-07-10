<template>
  <div v-if="song">
    <v-layout>
      <v-flex
        align-content-center
        xs6
        class="ml-2 mt-2"
      >
        <song-metadata :song="song" />
      </v-flex>

      <v-flex
        xs6
        class="ml-2 mt-2 mr-2"
      >
        <you-tube :youtube-id="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex
        xs6
        class="ml-2 mt-2"
      >
        <tab :song="song" />
      </v-flex>


      <v-flex
        xs6
        class="mt-2 mr-2"
      >
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Lyrics from './Lyrics.vue'
import YouTube from './YouTube.vue'
import SongMetadata from './SongMetadata.vue'
import SongsServices from '@/services/SongsServices.js'

export default {
  components: {
    'song-metadata': SongMetadata,
    YouTube,
    Lyrics,
    Tab
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
