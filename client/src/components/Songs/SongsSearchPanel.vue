<template>

          <v-col>
          <panel title="Search">
            <!-- <div slot="hello"> -->
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
    ></v-text-field>
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
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      console.log(value)
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
