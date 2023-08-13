const InputData = [
	{
		id: 7,
		name: 'username',
		type: 'text',
		placeholder: 'Enter your name..',
		label: 'Name',
		errorMessage: 'Max. 16 characters!',
		pattern: '^[A-Za-z]{1,16}$',
		required: true,
	},
	{
		id: 8,
		name: 'email',
		type: 'email',
		placeholder: 'Enter your e-mail..',
		label: 'E-mail',
		errorMessage: 'Enter a valid email address!',
		required: true,
	},
	{
		id: 9,
		name: 'subject',
		type: 'text',
		placeholder: 'Enter your subject..',
		label: 'Subject',
		errorMessage: 'Should be 6-35 characters!',
		pattern: '^[A-Za-z ]{6,35}$',
		required: true,
	},
]

export default InputData
