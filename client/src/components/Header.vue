<template>
 <v-app-bar
      app class="cyan" dark>
        <v-toolbar-title class="mr-4">
         <span class="home" @click="navigateTo({name: 'root'})">
        Clockify
         </span>
    </v-toolbar-title>
        
      <v-btn class="cyan">
        Browse
      </v-btn>



<v-spacer></v-spacer>
      <v-btn class="cyan" :to="{
          name: 'register'
        }">
        Sing Up
      </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    methods: {
        navigateTo (router) {
            this.$router.push(router)
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
