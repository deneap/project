<template>
  <v-col>
    <panel title="Search">
      <!-- <div slot="hello"> -->
      <v-text-field
        v-model="search"
        label="Search by song title, artist, album, or genre"
      />
      <!-- </div> -->
    </panel>
  </v-col>
</template>

<script>
export default {
    data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (value !== '') {
        route.query = {
          search: value
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
            immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}

// import _ from 'lodash'

// export default {
//   data () {
//     return {
//       search: ''
//     }
//   },
//   watch: {
//     search: _.debounce(async function (value) {


      
//     }, 700),
    

//     }
//   }
// }
</script>

<style>

</style>
