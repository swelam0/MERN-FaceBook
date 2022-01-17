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
router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)

		if (post.userId === req.body.userId) {
			await post.deleteOne()
			res.status(200).json('post has been deleted')
		} else {
			res.status(403).json('you can only delete you posts')
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// like a post
router.put('/:id/like', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)
		if (post) {
			if (!post.likes.includes(req.body.userId)) {
				await post.updateOne({ $push: { likes: req.body.userId } })

				res.status(200).json('this post has been liked')
			} else {
				await post.updateOne({ $pull: { likes: req.body.userId } })

				res.status(200).json('this post has been disliked')
			}
		} else {
			res.status(404).json('post not found')
		}
	} catch (err) {
		res.status(500).json(err)
	}
})
//  get a post
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)
		if (post) {
			res.status(200).json(post)
		} else {
			res.status(403).json('post not found')
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

//  get timeline posts

module.exports = router