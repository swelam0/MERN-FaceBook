const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
dotenv.config()

// mongoDB Connection
main().catch((err) => console.log(err))
async function main() {
	await mongoose.connect(process.env.MONGO_URL, () => {
		console.log('DB Connected')
	})
}

// express middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// express sever
app.listen(8800, () => {
	console.log('Backend server is running on 8800')
})
