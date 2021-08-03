/* eslint-disable no-unused-vars */
const User = require("../models/User")
const Tag = require("../models/Tag.model");
const Gif = require("../models/Gif");

const createTag = async (req, res) => {
    const { name, description } = req.body;
    if (name) {
        const user = req.user.id
        let tagToSave = new Tag({ name, description, user })
        tagToSave = await tagToSave.save()
        return res.status(201).send({
            code: tagToSave._id ? 'success' : 'failed',
            item: tagToSave
        })
    }
}

const fetchTags = async (req, res) => {
    const gifs = await Tag.find({})
    return res.send({
        items: gifs,
        total: gifs?.length
    })
}

const fetchTagsByUser = async (req, res) => {
    let { userId } = req.query
    userId = userId || req.user.id
    let user = await User.findById(userId);
    let gifs = await Tag.find({ user })

    return res.send({ items: gifs, total: gifs.length })
}

const deleteTag = async (req, res) => {
    const { tagId } = req.params
    let fetchedTag = await Tag.findById(tagId)
    if (fetchedTag) {
        fetchedTag = await fetchedTag.remove()
        return res.send({
            code: 'success'
        })
    } else {
        return res.send({
            code: 'failed'
        })
    }
}

const fetchTag = async (req, res) => {
    const { tagId } = req.params
    let fetchedGif = await Tag.findById(tagId)
        .populate('user', '_id email name')
    return res.send({
        code: fetchedGif ? 'success' : 'failed',
        item: fetchedGif
    })
}

module.exports = {
    createTag,
    fetchTags,
    fetchTagsByUser,
    deleteTag,
    fetchTag,
}