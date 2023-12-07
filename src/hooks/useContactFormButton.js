import { useState, useEffect } from 'react';

const initialState = 'Wyślij';

export const useContactFormButton = () => {
	const [buttonText, setButtonText] = useState(initialState);

	useEffect(() => {
		if (buttonText !== initialState) {
			setTimeout(() => setButtonText(initialState), 2500);
		}
		return () => clearTimeout(buttonText);
	}, [buttonText]);

	return [buttonText, setButtonText];
};
