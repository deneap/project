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
import SongsServices from '@/services/SongsServices.js'
 export default {
 data () {
    return {
      song: null
    }
  },
    async created () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsServices.show(songId)).data
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
