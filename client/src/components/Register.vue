<template>
  <v-form>
    <v-container>
      <v-row>
       <v-col cols="12" class="text-center">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <v-text-field
            label="Email" v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password" type="password" v-model="password" autocomplete="new-password"
          ></v-text-field>
          <div class="error" v-html="error" /><br />
          <v-btn class="cyan" @click="register" dark>Register</v-btn>
        </v-col>

        

      </v-row>
    </v-container>
  </v-form>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      } 
    }
  }
</script>

<style scoped>

</style>
