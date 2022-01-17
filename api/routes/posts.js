const router = require('express').Router()
const { model } = require('mongoose')
const Post = require('../models/Post')
const User = require('../models/User')

// create a post
router.post('/', async (req, res) => {
	const newPost = new Post(req.body)

	try {
		if (req.body.userId) {
			const savedPost = await newPost.save()
			res.status(200).json(savedPost)
		} else {
			res.status(403).json('User not found')
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// update a post
router.put('/:id', async (req, res) => {
	const post = await Post.findById(req.params.id)

	try {
		if (post.userId === req.body.userId) {
			await post.updateOne({ $set: req.body })
			res.status(200).json('the post has been updated')
		} else {
			res.status(403).json('you can only update your posts')
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// delete a post
// like a post
//  get a post
//  get timeline posts

module.exports = router
