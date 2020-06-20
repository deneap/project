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
            label="Title" required :rules="[required]" v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist" required :rules="[required]" v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Genre" required :rules="[required]" v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album" required :rules="[required]" v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Album Image Url" required :rules="[required]" v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="YouTube ID" required :rules="[required]" v-model="song.youtubeId"
          ></v-text-field>
        </v-col>
      </v-flex>

        <v-flex xs8>

       <v-col cols="12" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Song Structure</v-toolbar-title>
        </v-toolbar>
           <v-textarea label="Lyrics" required :rules="[required]" v-model="song.lyrics">
            </v-textarea>
           <v-textarea label="Tab" required :rules="[required]" v-model="song.tab">
            </v-textarea>
     <div class="danger-alert" v-if="error">
        {{error}}
      </div>
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
  }
},
methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
            try {
        await SongsServices.post(this.song)
        this.$router.push({                 //dupa ce are loc inregistrarea cantecului te arunga pe pagina 'songs'
            name: 'songs'
        })
    } catch (err) {
        console.log(err)
    }
    }
}
}
</script>

<style scoped>

</style>
