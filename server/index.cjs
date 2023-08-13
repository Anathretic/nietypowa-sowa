// DEV ONLY - LOCAL DEBUG CAPTCHA

const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const port = process.env.VITE_PORT || 2001
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

router.post('/post', async (req, res) => {
	const { token } = req.body

	try {
		const response = await axios.post(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_SECRET_KEY}&response=${token}`
		)

		if (response.data.success) {
			res.send('Human 👨 👩')
		} else {
			res.send('Robot 🤖')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('Error verifying reCAPTCHA')
	}
})

app.listen(port, () => {
	console.log(`server is running on ${port}`)
})
