/* eslint-disable no-unused-vars */
const Category = require("../models/Category.model");
const Gif = require("../models/Gif")
const User = require("../models/User")

const createGif = async (req, res) => {
    let {
      file,
      body: { title, description },
    } = req; 
    console.log("file", file.mimetype.includes("png"));
   return res.send({ originalname: file.originalname, title, description }); 


    // let { title, description, tags, categoryId, } = req.body;
    // if (title) {
    //     let category = await Category.findById(categoryId)
    //     if (!category) {
    //         category = await Category.findOne({ name: 'divers' })
    //     }
    //     const user = req.user.id
    //     let gifToSave = new Gif({ title, description, user, tags, category })
    //     gifToSave = await gifToSave.save()
    //     return res.status(201).send({
    //         code: gifToSave._id ? 'success' : 'failed',
    //         item: gifToSave
    //     })
    // }
}

const fetchGifs = async (req, res) => {
    const gifs = await Gif.find({})
    return res.send({
        items: gifs,
        total: gifs?.length
    })
}

const fetchGifsByUser = async (req, res) => {
    let { userId } = req.query
    userId = userId || req.user.id
    let user = await User.findById(userId);
    let gifs = await Gif.find({ user })

    return res.send({ items: gifs, total: gifs.length })
}

const fetchGifsByCategory = async (req, res) => {
    let { categoryId } = req.query
    categoryId = categoryId || req.user.id
    let category = await Category.findById(categoryId);
    let gifs = await Gif.find({ category })
    return res.send({ items: gifs, total: gifs.length })
}

const fetchGifsByTag = async (req, res) => {
    let { tagId } = req.query
    let gifs = null
    if (tagId) {
        gifs = await Gif.find({ tags: { "$in": [tagId] } })
            // .select('title description user tags createdAt')
            .populate('user', 'name email')
    }
    return res.send({ items: gifs, total: gifs?.length })
}

const deleteGif = async (req, res) => {
    const { gifId } = req.params
    let fetchedGif = await Gif.findById(gifId)
    if (fetchedGif && fetchedGif.user == req.user.id) {
        fetchedGif = await fetchedGif.remove()
        return res.send({
            code: 'success'
        })
    } else {
        return res.send({
            code: 'failed'
        })
    }
}

const fetchGif = async (req, res) => {
    const { gifId } = req.params
    let fetchedGif = await Gif.findById(gifId)
        .populate('user', '_id email name')
        .populate('category', '_id name displayName')
        .populate('tags', '_id name')

    return res.send({
        code: fetchedGif ? 'success' : "failed",
        item: fetchedGif
    })
}

const addCommentToGif = async (req, res) => {
    const { description } = req.body
    const { gifId } = req.params
    if (description && gifId) {
        let userId = req.user.id;
        if (userId) {
            let user = await User.findById(userId)
            let gif = await Gif.findById(gifId)
            gif.comments.push({ description, user });
            await gif.save()
            return res.send({ items: gif.comments })
        }
    }
}

const deleteCommentFromGif = async (req, res) => {
    const { gifId, commentId } = req.params
    if (gifId && commentId) {
        let gif = await Gif.findById(gifId)
        let comment = gif.comments.find(el => el._id == commentId)
        const indexToRemove = gif.comments.indexOf(comment)
        gif.comments.splice(indexToRemove, 1)
        await gif.save()
        return res.send({ items: gif.comments, code: 'success' })
    }
}

module.exports = {
    createGif,
    fetchGifs,
    fetchGifsByUser,
    deleteGif,
    fetchGif,
    addCommentToGif,
    deleteCommentFromGif,
    fetchGifsByCategory,
    fetchGifsByTag
}