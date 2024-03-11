import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../data/cardData';

export const usePhotos = () => {
	const [photos, setPhotos] = useState([]);
	const [specialText, setSpecialText] = useState([]);
	const { id } = useParams();
	const pathsArray = cardData.map(data => data.path).join(', ');

	useEffect(() => {
		cardData.find(data => {
			if (data.path === id) {
				setPhotos(data.photoArray);
				setSpecialText(data.specialText);
			}
		});
	}, []);

	return [photos, specialText, id, pathsArray];
};
