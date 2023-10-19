import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardData } from '../data/CardData';

export const usePhotos = () => {
	const [photos, setPhotos] = useState([]);
	const { id } = useParams();
	const pathsArray = CardData.map(data => data.path).join(', ');

	useEffect(() => {
		CardData.find(data => {
			if (data.path === id) {
				setPhotos(data.photoArray);
			}
		});
	}, []);

	return [photos, id, pathsArray];
};
