import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { inputData } from '../inputsConfig/inputData';
import { textareaData } from '../inputsConfig/textareaData';
import { FormInput, FormTextarea } from '../components/Inputs';
import { FormLoader } from '../components/FormLoader';
import { BsCheck2All } from 'react-icons/bs';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { useContactFormInputs } from '../hooks/useContactFormInputs';

const Contact = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [recaptchaErrorValue, setRecaptchaErrorValue] = useState('');

	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	const refCaptcha = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setRecaptchaErrorValue('');
		const token = await refCaptcha.current.getValue();
		refCaptcha.current.reset();

		const params = {
			...values,
			'g-recaptcha-response': token,
		};

		if (token) {
			const sendMsg = emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(
					function () {
						setValues({ username: '', email: '', subject: '', message: '' });
						setButtonText(<BsCheck2All color='#3373c6' fontSize={24} />);
					},
					function () {
						setRecaptchaErrorValue('Coś poszło nie tak..');
					}
				)
				.finally(() => {
					setFocused(false);
					setIsLoading(false);
				});
			return sendMsg;
		} else {
			setIsLoading(false);
			setRecaptchaErrorValue('Nie bądź 🤖!');
		}
	};

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<div className='flex w-full justify-center items-center pt-[80px]'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:ml-2'>
					<h2 className='text-4xl sm:text-5xl text-white text-gradient py-1 max-rsm:text-left text-center mf:text-left'>
						Chciałbyś zamówić coś <br /> dla siebie? <br />
						A może.. <br /> interesuje Cię to <br /> jak wykonuję swoją pracę?
					</h2>
					<div className='text-left mt-5 text-white font-light text-base max-[350px]:text-left text-center mf:text-left'>
						<br />
						<p className='mb-2'>Wypełnij formularz, a ja na pewno się odezwę i dogadamy wszystkie szczegóły!</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
					<form
						onSubmit={handleSubmit}
						className='px-5 py-2 sm:w-96 w-full flex flex-col justify-start items-center blue-gradient mt-10'>
						<h2 className='p-5 text-2xl text-white text-gradient text-center'>Napisz do mnie!</h2>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{inputData.map(input => (
							<FormInput
								key={input.id}
								htmlFor={input.name}
								{...input}
								value={values[input.name]}
								onChange={handleInputValue}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}
						{textareaData.map(text => (
							<FormTextarea
								key={text.id}
								htmlFor={text.name}
								{...text}
								value={values[text.name]}
								onChange={handleInputValue}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}
						<div className={`${isMobile ? 'h-48' : 'h-32'} mt-7 md:ml-0.5 ml-1.5`}>
							<ReCAPTCHA
								key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
								size={isMobile ? 'compact' : 'normal'}
								sitekey={import.meta.env.VITE_SITE_KEY}
								ref={refCaptcha}
							/>
							<div className={`${isMobile ? 'h-12' : 'h-10 mt-1'} flex items-center justify-center`}>
								<p className='text-[#ff91d8] text-lg font-bold text-center'>{recaptchaErrorValue}</p>
							</div>
						</div>
						<div className='h-[1px] w-full bg-gray-400' />
						<div className='flex justify-center items-center h-28 mt-2'>
							{isLoading ? (
								<FormLoader />
							) : (
								<button
									type='submit'
									className='flex justify-center bg-[#ff91d8] p-3 w-32 rounded-full cursor-pointer hover:bg-[#bf589a] transition duration-300 text-white'>
									{buttonText}
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
