const {
    fetchTags,
    fetchTagsByUser,
    fetchTag,
    createTag,
    deleteTag,
}
    = require('../controllers/tag.controller');
const { isAuth } = require('../middlewares/auth.middleware');

const router = require('express').Router()


router.get('/', fetchTags);
router.get('/by-user', [isAuth], fetchTagsByUser);
router.get('/:tagId', fetchTag);
router.post('/', [isAuth], createTag);
router.delete('/:tagId', [isAuth], deleteTag);


module.exports = router;