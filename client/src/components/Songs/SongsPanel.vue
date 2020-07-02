<template>
  <!-- <v-flex xs6> -->
  <!-- <v-form fluid style="margin: 1px; padding: 1px; align: middle; width: 100% "> -->
  <panel title="Songs">
    <router-link
      slot="action"
      :to="{name: 'songs-create'}"
    >
      <v-btn
        fab
        absolute
        right
        small
        class="cyan accent-3"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>

    <div
      v-for="song in songs"
      :key="song.id"
      class="song"
    >
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
          >
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img
            class="album-image"
            :src="song.albumImageUrl"
          >
        </v-flex>
      </v-layout>
    </div>
  </panel>
  <!-- </v-form> -->
  <!-- </v-flex> -->
</template>

<script>
import SongsService from '@/services/SongsServices.js'
export default {
  data () {
    return {
      songs: null,
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  // },
  // async created () {
  //   this.songs = (await SongsServices.listSongs()).data;
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
