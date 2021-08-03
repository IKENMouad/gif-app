const Category = require("../models/Category.model")

const createCategory = async (req, res) => {
    const { name, displayName, description } = req.body
    if (name) {
        let category = await Category.findOne({ name })
        console.log('category', category)
        if (category) {
            return res.send({ code: 'failed', error: 'category exists with this name before ' })
        }
        category = new Category({ name, displayName, description })
        category = await category.save()

        return res.status(201).send({ code: category._id ? 'success' : 'failed', item: category })
    }
}

const fetchCategories = async (req, res) => {
    const categories = await Category.find()
    return res.status(201).send({ items: categories, total: categories?.length })
}

const updateCategory = async (req, res) => {
    const { name, description } = req.body
    const { categoryId } = req.params
    if (name) {
        let category = await Category.findOneAndUpdate({ categoryId }, {
            name, description
        })
        return res.status(201).send({ item: category })
    }
}

module.exports = {
    createCategory,
    fetchCategories,
    updateCategory
}