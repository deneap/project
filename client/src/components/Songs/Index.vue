<template>
  <v-layout column>
    <v-flex
      align-content-center
      class="ml-2 mt-2"
    >
      <songs-bookmarks />
      <recently-viewed-songs />
    </v-flex>

    <v-flex
       
      class="ml-2 mt-2 mr-2"
    >
      <SongsSearchPanel />
    </v-flex>
    <v-flex
      xs6
      class="ml-2 mt-2"
    >
      <songs-panel />
    </v-flex>

    <v-flex
       
      class="ml-2 mt-2 mr-2"
    >
      <SongsSearchPanel />
    </v-flex>
    <v-flex
      xs6
      class="ml-2 mt-2"
    >
      <songs-panel />
    </v-flex>

    <v-flex
      xs6
      class="mt-2 mr-2"
    >
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel.vue'
import SongsBookmarks from './SongsBookmarks.vue'
import RecentlyViewedSongs from './RecentlyViewedSongs.vue'
import SongsServices from '@/services/SongsServices.js'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null,
    }
  },
  async created () {
    this.songs = (await SongsServices.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
