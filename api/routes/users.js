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

module.exports = router
