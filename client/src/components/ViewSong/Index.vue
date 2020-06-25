<template>
  <v-layout>
           <v-flex>
            <song-metadata :song="song" />
        <!-- <v-toolbar flat dense class="cyan" dark>
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
        </v-btn> -->
      </v-flex>

      <v-flex xs3>
                <!-- <v-toolbar flat dense class="cyan" dark>
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
       </div>  -->
        </v-flex>
    <!-- </v-container> -->
    
        <!-- </v-form> -->

          
  </v-layout>
</template>

<script>
import SongMetadata from './SongMetadata.vue'
import SongsServices from '@/services/SongsServices.js'
// import Panel from '@/components/Panel.vue'

 export default {
   components: {
      // Panel,
      'song-metadata': SongMetadata
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
