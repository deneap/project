<template>
  <v-layout>
  <!-- <v-form fluid style="margin: 1px; padding: 1px; align: middle; width: 100%"> -->
       <!-- <v-container>  -->
           <v-flex xs3>
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Song Metadate</v-toolbar-title>
        </v-toolbar>
<div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs3>
                <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Album</v-toolbar-title>
        </v-toolbar>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
          


        <v-flex xs6 class="ml-2">
       <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Tabs</v-toolbar-title>
        </v-toolbar>
        <div class="song-title">
        {{song.tab}}
       </div> 
        </v-flex>
    <!-- </v-container> -->
    
        <!-- </v-form> -->

          
  </v-layout>
</template>

<script>
// import {mapState} from 'vuex'
// import Lyrics from './Lyrics'
// import Tab from './Tab'
// import SongMetadata from './SongMetadata.vue'
// import YouTube from './YouTube'
import SongsServices from '@/services/SongsServices.js'
// import SongHistoryService from '@/services/SongHistoryService'

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
  // computed: {
  //   ...mapState([
  //     'isUserLoggedIn',
  //     'user',
  //     'route'
  //   ])
  // },
  // async mounted () {
  //   const songId = this.route.params.songId
  //   this.song = (await SongsService.show(songId)).data

  //   if (this.isUserLoggedIn) {
  //     SongHistoryService.post({
  //       songId: songId
  //     })
  //   }
  // },
  // components: {
  //   SongMetadata
  //   // YouTube,
  //   // Lyrics,
  //   // Tab
  // }
}
</script>

<style scoped>
</style>
