import Api from '@/services/Api'

export default {
  listSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
