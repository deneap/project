<template>
 <v-flex xs12>
          <!-- <v-col> -->
          <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>YouTube</v-toolbar-title>
        </v-toolbar>   
    <youtube
      :video-id="youtubeId"
      :player-width="735"
      :player-height="350">
    </youtube>
    <!-- </v-col> -->
 </v-flex>

</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
