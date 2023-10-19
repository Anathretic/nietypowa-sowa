// DEV ONLY - LOCAL DEBUG CAPTCHA
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const port = process.env.VITE_PORT || 2001;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

router.post('/post', async (req, res) => {
	const { token } = req.body;

	try {
		const response = await axios.post(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_SECRET_KEY}&response=${token}`
		);

		if (response.data.success) {
			res.send('Human 👨 👩');
		} else {
			res.send('Robot 🤖');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send('Error verifying reCAPTCHA');
	}
});

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});

// PASTE CODE BELOW TO: sections -> Contact.jsx -> handleSubmit

// import axios from 'axios'

// await axios
// 	.post(`http://localhost:${import.meta.env.VITE_PORT}/post`, { token })
// 	.then(res => {
// 		console.log(res)
// 		if (res.data === 'Human 👨 👩') {
// 			// DEV
// 			//emailjs requires your IDs and keys !!!!!!!

// 			emailjs
// 				.sendForm(
// 					`${import.meta.env.VITE_SERVICE_ID}`,
// 					`${import.meta.env.VITE_TEMPLATE_ID}`,
// 					e.target,
// 					`${import.meta.env.VITE_PUBLIC_KEY}`
// 				)
// 				.then(res => {
// 					if (res.status === 200) {
// 						setValues({ username: '', email: '', subject: '' }), setTextValue({ message: '' })
// 						setFocused(false)
// 						setIsLoading(false)
// 						setErrorValue('')
// 						changeText()
// 					}
// 				})
// 				.catch(error => {
// 					console.log(error.text)
// 				})
// 		} else if (res.data === 'Robot 🤖') {
// 			setIsLoading(false)
// 			setErrorValue("Don't be a 🤖!")
// 		}
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})
