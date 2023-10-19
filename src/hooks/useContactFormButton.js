import { useState, useEffect } from 'react';

export const useContactFormButton = () => {
	const [buttonText, setButtonText] = useState('Wyślij');

	const initialState = 'Wyślij';

	useEffect(() => {
		if (buttonText !== initialState) {
			setTimeout(() => setButtonText(initialState), 2500);
		}
		return () => clearTimeout(buttonText);
	}, [buttonText]);

	return [buttonText, setButtonText];
};
