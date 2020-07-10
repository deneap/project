const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
        try {
        const {songId, userId} = req.query
        const bookmarks = await Bookmark.findOne({
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
    }    
}