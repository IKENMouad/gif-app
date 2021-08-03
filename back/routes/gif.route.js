const router = require('express').Router()
const { fetchGifs, fetchGifsByUser, createGif, fetchGif, deleteGif, addCommentToGif, deleteCommentFromGif, fetchGifsByTag } = require('../controllers/gif.controller');
const { isAuth } = require('../middlewares/auth.middleware')

router.get('/', fetchGifs);
router.get('/by-user', [isAuth], fetchGifsByUser);
router.get('/by-tag', fetchGifsByTag);
router.get('/:gifId', fetchGif);
router.post('/', [isAuth], createGif);
router.delete('/:gifId', [isAuth], deleteGif);
router.post('/:gifId/comments', [isAuth], addCommentToGif);
router.delete('/:gifId/comments/:commentId', [isAuth], deleteCommentFromGif);

module.exports = router