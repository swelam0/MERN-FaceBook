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

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

// express sever
app.listen(8800, () => {
	console.log('Backend server is running on 8800')
})
