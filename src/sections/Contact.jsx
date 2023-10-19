import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

import { InputData } from '../data/InputData';
import { TextareaData } from '../data/TextareaData';
import { FormInput, FormTextarea } from '../components/Inputs';
import { Loader } from '../components/Loader';
import { BsCheck2All } from 'react-icons/bs';

import { useContactFormButton } from '../hooks/useContactFormButton';
import { useContactFormInputs } from '../hooks/useContactFormInputs';

const Contact = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');

	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	const refCaptcha = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setErrorValue('');
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
						setErrorValue('Coś poszło nie tak..');
					}
				)
				.finally(() => {
					setFocused(false);
					setIsLoading(false);
				});
			return sendMsg;
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
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
						Chciałbyś dowiedzieć się <br /> jak pracuję?
						<br />
						A może.. <br /> interesuje Cię <br /> indywidualny projekt?
					</h2>
					<div className='text-left mt-5 text-white font-light text-base max-[350px]:text-left text-center mf:text-left'>
						<p className='mt-2'>Spotkajmy się w mojej pracowni!</p>
						<br />
						<p className='mb-2'>Pamiętaj tylko, aby najpierw umówić się ze mną przez formularz!</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
					<form
						onSubmit={handleSubmit}
						className='px-5 py-2 sm:w-96 w-full flex flex-col justify-start items-center blue-gradient mt-10'>
						<h2 className='p-5 text-2xl text-white text-gradient'>Napisz do mnie!</h2>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{InputData.map(input => (
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
						{TextareaData.map(text => (
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
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							className='mt-10 md:ml-0.5 ml-1.5'
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<p className='mt-5 text-[#ff91d8] text-lg font-bold'>{errorValue}</p>
						<div className='h-[1px] w-full bg-gray-400 mt-6' />
						{isLoading ? (
							<Loader />
						) : (
							<button
								type='submit'
								className='flex flex-row justify-center items-center mt-5 mb-3 bg-[#ff91d8] p-3 w-32 rounded-full cursor-pointer hover:bg-[#bf589a] transition duration-300 text-white'>
								{buttonText}
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
