const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
dotenv.config()

// api routes
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

// express middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// mongoDB Connection
main().catch((err) => console.log(err))
async function main() {
	await mongoose.connect(process.env.MONGO_URL, () => {
		console.log('DB Connected')
	})
}

app.get('/', (req, res) => {
	res.send('welcome to home page')
})

app.get('/users', (req, res) => {
	res.send('welcome to user page')
})

// api routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

// express sever
app.listen(8800, () => {
	console.log('Backend server is running on 8800')
})
