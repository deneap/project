<template>
  <v-layout>

        <v-flex xs8>
          <v-col>
          <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Song Metadata</v-toolbar-title>
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
        </v-col>
      </v-flex>
        <v-flex xs6>
          <v-col>
                    <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Album</v-toolbar-title>
        </v-toolbar>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
        </v-col>
      </v-flex>

        <v-flex xs8 class="ml-2">
         <v-col>
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Tab</v-toolbar-title>
        </v-toolbar>
    <textarea
      readonly
      v-model="song.tab"
    ></textarea>
           </v-col>
        </v-flex>
  </v-layout>
</template>

<script>
// import Panel from '@/components/Panel.vue'
export default {
  props: [
    'song'
 ]
//  components: {
//    Panel
//  }
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
