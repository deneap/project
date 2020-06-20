<template>
  <v-layout justify-center>
  <v-form class="justify-center" fluid style="margin: 1px; padding: 1px; align: middle; width: 100%">
    <v-container> 
      <v-row>
       <v-col cols="8" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
        </v-toolbar>
        
        <div class="pl-4 pr-4 pt-2 bp-2">
        <slot name="hello">
          No slot conect defined.
        </slot>
             <slot name="bye">

        </slot>
        </div>
        </v-col>

        

      </v-row>
    </v-container>
  </v-form>
  </v-layout>
</template>

<script>
export default {
props: [
  'title'
]
  }
</script>

<style scoped>

</style>
