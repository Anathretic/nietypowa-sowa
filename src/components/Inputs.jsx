const inputStyles =
	'my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-gradient'

const FormInput = props => {
	const { label, onChange, errorMessage, id, ...inputProps } = props

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label className='text-white mt-5'>{label}:</label>
			<input className={`${inputStyles}`} {...inputProps} onChange={onChange} />
			<span className="text-center">{errorMessage}</span>
		</div>
	)
}

const TextInput = props => {
	const { label, onChange, errorMessage, id, ...textProps } = props

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label className='text-white mt-5'>{label}:</label>
			<textarea
				className={`min-h-[96px] max-h-[256px] ${inputStyles}`}
				{...textProps}
				onChange={onChange}
				minLength={50}
				maxLength={1000}
			/>
			<span className="text-center">{errorMessage}</span>
		</div>
	)
}

export { FormInput, TextInput }
