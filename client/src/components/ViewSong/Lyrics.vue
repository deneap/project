<template>
 <v-flex xs12>
          <v-col>
          <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Lyrics</v-toolbar-title>
        </v-toolbar>   
<textarea
      readonly
      v-model="song.lyrics"
    ></textarea>
    </v-col>
 </v-flex>

</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
