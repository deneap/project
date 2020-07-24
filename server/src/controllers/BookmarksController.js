const {
  Bookmark,
  Song,
  User
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body.params
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'Deja ai acest bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    }catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  },

  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findByPk(bookmarkId)
      if (!bookmark) {
        return res.status(400).send({
          error: 'Nu exista acest bookmark'
        })
      }
      await Bookmark.destroy({
        where: {
          id: bookmarkId
        }
      })
      res.send(bookmark)
    }catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  }       
}