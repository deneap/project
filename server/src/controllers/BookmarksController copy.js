const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
        try {
        const {songId, userId} = req.query
        const bookmark = await Bookmark.findOne({
            where: {
                SongId: songId,
                UserId: userId
            }
        })
        res.send(bookmarks)
    }catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to fetch the bookmark'
        })
      }
    },

    async post (req, res) {
        try {
        const {songId, userId} = req.body
        const bookmark = await Bookmark.findOne({
            where: {
                SongId: songId,
                UserId: userId
            }
        })
        const newBookmark = await Bookmark.create(req.body)
        res.send(newBookmarks)
    }catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to create the bookmark'
        })
      }
    },

    async delete (req, res) {
        try {
        const {bookmarkId} = req.params
        const bookmark = await Bookmark.findById(bookmarkId)
        await bookmark.destroy()
        res.send(bookmarks)
    }catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to delete the bookmark'
        })
      }
    }       
}