import { useState, useEffect } from 'react';

const initialState = 'Wyślij';

export const useContactFormButton = () => {
	const [buttonText, setButtonText] = useState(initialState);

	useEffect(() => {
		let buttonTimeout;
		if (buttonText !== initialState) {
			buttonTimeout = setTimeout(() => setButtonText(initialState), 2500);
		}
		return () => clearTimeout(buttonTimeout);
	}, [buttonText]);

	return [buttonText, setButtonText];
};
