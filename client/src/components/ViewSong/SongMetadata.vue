<template>
  <v-layout>
    <v-flex xs8>
      <v-toolbar
        flat
        dense
        class="cyan"
        dark
      >
        <v-toolbar-title>Song Metadata</v-toolbar-title>
      </v-toolbar>
      <v-form
        class="justify-center"
        fluid
        style="margin: 1px; padding: 50px; align: middle; width: 100%"
      >
        <div>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params: {
              songId: song.id
            }
          }"
        >
          Edit
        </v-btn>
        
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan ml-4"
          @click="setAsBookmark"
        >
          Set As Bookmark
        </v-btn>
        
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan ml-4"
          @click="unsetAsBookmark"
        >
          Unset As Bookmark
        </v-btn>
        
        <!--  <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn> -->
      </v-form>
    </v-flex>
    <v-flex
      justify-center
      xs6
      class="mr-4"
    >
      <v-toolbar
        flat
        dense
        class="cyan"
        dark
      >
        <v-toolbar-title />
      </v-toolbar>
      <v-form
        class="justify-center"
        fluid
        style="margin: 5px; padding: 20px; align: middle; width: 100%"
      >
        <img
          class="album-image"
          :src="song.albumImageUrl"
        >
        <br>
        {{ song.album }}
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: {
    song: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      await this.getBookmark()
    }
  },
  created() {
    this.getBookmark()
  },
  methods: {
    async getBookmark() {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },

    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
