import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PageNotFound from './PageNotFound';

export const Photos = () => {
	const [photos, id, pathsArray] = usePhotos();

	return (
		<>
			{pathsArray.includes(id) ? (
				<div className='flex w-full justify-center items-center pt-[80px]'>
					<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 min-h-screen'>
						<div className='wrapper'>
							<h2>{id}</h2>
							{photos.map(data => (
								<div key={data.imageId}>
									<img src={data.image} alt='' />
								</div>
							))}
                            <Link to='/oferta'>Wróć</Link>
						</div>
					</div>
				</div>
			) : (
				<PageNotFound />
			)}
		</>
	);
};
