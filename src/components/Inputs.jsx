const inputStyles =
	'my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-gradient';

export const FormInput = ({ label, htmlFor, onChange, errorMessage, ...inputProps }) => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<input className={`${inputStyles}`} onChange={onChange} autoComplete='off' {...inputProps} />
			<span className='text-center h-8 rrsm:h-4 text-[#ff91d8]'>{errorMessage}</span>
		</div>
	);
};

export const FormTextarea = ({ label, htmlFor, onChange, errorMessage, ...textareaProps }) => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<textarea
				className={`min-h-[96px] max-h-[256px] ${inputStyles}`}
				onChange={onChange}
				minLength={50}
				maxLength={1500}
				autoComplete='off'
				{...textareaProps}
			/>
			<span className='text-center h-8 rrsm:h-4 text-[#ff91d8]'>{errorMessage}</span>
		</div>
	);
};
