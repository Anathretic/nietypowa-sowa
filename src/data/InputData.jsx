const InputData = [
	{
		id: 7,
		name: 'username',
		type: 'text',
		placeholder: 'Wprowadź swoje imię..',
		label: 'Imię',
		errorMessage: 'Maks. 16 liter!',
		pattern: '^[A-Za-z]{1,16}$',
		required: true,
	},
	{
		id: 8,
		name: 'email',
		type: 'email',
		placeholder: 'Wprowadź swój e-mail..',
		label: 'E-mail',
		errorMessage: 'Wprowadź poprawny adres e-mail!',
		required: true,
	},
	{
		id: 9,
		name: 'subject',
		type: 'text',
		placeholder: 'Wprowadź temat wiadomości..',
		label: 'Temat',
		errorMessage: 'Od 6 do 35 znaków!',
		pattern: '^[A-Za-z ]{6,35}$',
		required: true,
	},
]

export default InputData
