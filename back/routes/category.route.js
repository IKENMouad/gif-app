const { fetchCategories, createCategory, updateCategory } = require("../controllers/category.controller")

const router = require("express").Router()

router.get('/', fetchCategories)
router.post('/', createCategory)
router.put('/', updateCategory)

module.exports = router