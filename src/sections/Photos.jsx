import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PageNotFound from './PageNotFound';
import { scrollToTop } from '../utils/scrollToTopUtils';

export const Photos = () => {
	const [photos, id, pathsArray] = usePhotos();

	return (
		<>
			{pathsArray.includes(id) ? (
				<div className='flex w-full justify-center items-center pt-[80px]'>
					<div className='flex mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4 min-h-screen'>
						<div className='wrapper'>
							<h2 className='special-title text-5xl rsm:text-6xl mf:text-7xl text-white capitalize py-10'>{id}</h2>
							<div className='flex items-center justify-center flex-col w-full max-w-[700px] text-white'>
								{photos.map(data => (
									<div key={data.imageId} className='py-12'>
										<img src={data.image} alt={data.alt} className='rounded-2xl shadow-2xl shadow-neutral-800 w-full' />
										<div className='text-center'>
											<h3 className='pt-12 pb-8 text-2xl lg:text-3xl font-bold'>
												<span className='hidden sm:inline'>•</span> {data.title}{' '}
												<span className='hidden sm:inline'>•</span>
											</h3>
											<p className='pb-6 lg:text-lg'>{data.description}</p>
											<div className='flex items-center justify-center flex-col lg:text-lg'>
												{data.size && (
													<span className='pb-6'>
														<b>Wymiary: </b>
														{data.size}
													</span>
												)}
												<span className='font-bold'>Stworzono w {data.year} roku.</span>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='flex flex-row justify-center items-center'>
								<Link
									to='/oferta'
									onClick={scrollToTop}
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
