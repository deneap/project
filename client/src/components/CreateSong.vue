<template>
  <v-layout>
  <!-- <v-form fluid style="margin: 1px; padding: 1px; align: middle; width: 100%"> -->
       <!-- <v-container>  -->
           <v-flex xs4>

       <v-col>
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Song Metadate</v-toolbar-title>
        </v-toolbar>

          <v-text-field
            label="Title" v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist" v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Genre" v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album" v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Album Image Url" v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="YouTube ID" v-model="song.youtubeId"
          ></v-text-field>
        </v-col>
      </v-flex>

        <v-flex xs8>

       <v-col cols="12" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Song Metadate</v-toolbar-title>
        </v-toolbar>
           <v-textarea label="Lyrics" v-model="song.lyrics">
            </v-textarea>
           <v-textarea label="Tab" v-model="song.tab">
            </v-textarea>

<v-btn class="cyan" @click="create" dark>Create Song</v-btn>
          

        </v-col>    
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
        song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
      }
  }
},
methods: {
    async create () {
            try {
        await SongsServices.post(this.song)
    } catch (err) {
        console.log(err)
    }
    }
}
}
</script>

<style scoped>

</style>
