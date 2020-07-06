<template>
 <v-app-bar
      app class="cyan" dark>
        <v-toolbar-title class="mr-4">
         <router-link class="home" tag="span" :to="{name: 'songs'}"> 
           Clockify
         </router-link>
    </v-toolbar-title>
        
      <v-btn
      class="cyan" :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
            <v-btn
      class="cyan" :to="{
          name: 'songs-create'
        }">
        Create Songs
      </v-btn>

<v-spacer></v-spacer>

      <v-btn v-if="!$store.state.isUserLoggedIn"
      class="cyan" :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn"
       class="cyan" :to="{
          name: 'register'
        }">
        Sing Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
       class="cyan"  @click="logout">
        Log Out
      </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    methods: {
      logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
    }
  }
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: blue
}
</style>
