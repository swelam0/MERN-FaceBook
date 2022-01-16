const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// update user
router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id || req.User.isAdmin) {
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(10)

				req.body.password = await bcrypt.hash(req.body.password, salt)
			} catch (err) {
				res.status(500).json(err)
			}
		}

		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			})
			res.status(200).json('Account has been updated')
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		return res.status(403).json('you can update only your account')
	}
})

// delete user account
router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		try {
			const user = await User.findByIdAndDelete(req.params.id)
			res.status(200).json('Account has been deleted')
		} catch (err) {
			res.status(404).json(err)
		}
	} else {
		res.status(500).json('you only can delete your account')
	}
})

// get a user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { isAdmin, password, updatedAt, ...other } = user._doc

		res.status(200).json(other)
	} catch (err) {
		res.status(500).json(err)
	}
})

// follow a user
router.post('/:id/follow', async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id)
			const currentUser = await User.findById(req.body.userId)

			if (!user.followres.includes(req.params.id)) {
				await user.updateOne({ $push: { followres: req.params.id } })
				await currentUser.updateOne({ $push: { followings: req.body.userId } })

				res.status(200).json('user has been followed')
			} else {
				res.status(403).json('you allready follow this user')
			}
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(403).json("You can't follow your self")
	}
})

module.exports = router
