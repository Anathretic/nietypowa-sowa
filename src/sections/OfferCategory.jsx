import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';
import { DataHandler } from '../helpers/getDataHelper';
import PageNotFound from './PageNotFound';
import { ContentLoader } from '../components/ContentLoader';

const createdCategories = ['zakładki', 'buty', 'obrazy'];

const OfferCategory = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		let loadingTimeout;
		DataHandler()
			.then(res => {
				res.offer.find(data => {
					data.path === id && setData(data);
				});
			})
			.finally(() => {
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			});
		return clearTimeout(loadingTimeout);
	}, []);

	return (
		<>
			{createdCategories.includes(id) ? (
				<div className='flex w-full justify-center items-center pt-[80px]'>
					<div className='flex mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4 min-h-screen'>
						<div className='wrapper'>
							{loading ? (
								<ContentLoader />
							) : (
								<>
									<h2 className='title-font text-center text-5xl rsm:text-6xl mf:text-7xl text-white capitalize pt-10'>
										{id}
									</h2>
									<div className='flex items-center justify-center flex-col w-full max-w-[700px] text-white text-center mt-12 py-10 px-5 mb-12 white-gradient'>
										{data.specialText.map(string => (
											<p key={string} className='p-4'>
												{string}
											</p>
										))}
									</div>
									<div className='flex items-center justify-center flex-col w-full max-w-[700px] text-white'>
										{data.photoArray.map(data => (
											<div key={data.imageId} className='py-12 w-full'>
												<img
													src={data.image}
													alt={data.alt}
													className='rounded-2xl shadow-2xl shadow-neutral-800 w-full'
												/>
												<div className='text-center mt-12 py-10 px-5 white-gradient'>
													<h3 className='pb-8 text-2xl font-bold'>
														<span className='hidden sm:inline'>•</span> {data.title}{' '}
														<span className='hidden sm:inline'>•</span>
													</h3>
													<p className='pb-6'>{data.description}</p>
													<div className='flex items-center justify-center flex-col'>
														{data.size && (
															<span className='pb-6'>
																<b>Wymiary: </b>
																{data.size}
															</span>
														)}
														{data.year && <span className='font-bold'>Stworzono w {data.year} roku.</span>}
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
								</>
							)}
						</div>
					</div>
				</div>
			) : (
				<PageNotFound />
			)}
		</>
	);
};

export default OfferCategory;
