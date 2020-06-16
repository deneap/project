<template>
  <v-layout justify-center>
  <v-form class="justify-center" fluid style="margin: 1px; padding: 1px; align: middle; width: 100%">
    <v-container> 
      <v-row>
       <v-col cols="12" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
          <v-text-field
            label="Email" v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password" type="password" v-model="password"
          ></v-text-field>
          <div class="error" v-html="error" /><br />
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </v-col>

        

      </v-row>
    </v-container>
  </v-form>
  </v-layout>
</template>

<script>
export default {
  }
</script>

<style scoped>

</style>
