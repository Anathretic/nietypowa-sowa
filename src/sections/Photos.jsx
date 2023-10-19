import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PageNotFound from './PageNotFound';

export const Photos = () => {
	const [photos, id, pathsArray] = usePhotos();

	return (
		<>
			{pathsArray.includes(id) ? (
				<div className='flex w-full justify-center items-center pt-[80px]'>
					<div className='flex mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4 min-h-screen'>
						<div className='wrapper'>
							<h2 className='special-title text-5xl rsm:text-6xl mf:text-7xl text-white capitalize py-10'>{id}</h2>
							{photos.map(data => (
								<div key={data.imageId} className='py-12'>
									<img src={data.image} alt={data.alt} className='rounded-2xl shadow-2xl shadow-neutral-800 w-full' />
								</div>
							))}
							<div className='flex flex-row justify-center items-center'>
								<Link
									to='/oferta'
									className='flex justify-center items-center mt-10 bg-[#ff91d8] p-3 w-32 sm:w-56 md:w-96 md:text-lg rounded-full cursor-pointer hover:bg-[#bf589a] transition duration-300 text-white'>
									Cofnij
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<PageNotFound />
			)}
		</>
	);
};
