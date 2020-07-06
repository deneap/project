<template>
  <v-layout justify-center>
  <v-form class="justify-center" fluid style="margin: 1px; padding: 1px; align: middle; width: 40%">
    <v-container> 
      <v-row>
       <v-col cols="12" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Login</v-toolbar-title>
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
import AuthenticationService from '@/services/AuthenticationService'
export default {
data () {
  return {
    email: '',
    password: '',
    error: null
  }
},
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
         this.$router.push({name: 'songs'})
      } catch (error) {
        this.error = error.response.data.error
      }
      } 
    }
  }
</script>

<style scoped>

</style>
