import { useEffect, useState } from 'react';
import { CardItem } from '../components/CardItem';
import { DataHandler } from '../helpers/getDataHelper';
import { ContentLoader } from '../components/ContentLoader';

const Offer = () => {
	const [offerData, setOfferData] = useState([]);
	const [cardLoading, setCardLoading] = useState(true);

	useEffect(() => {
		let cardLoadingTimeout;
		DataHandler().then(res => {
			setOfferData(res.offer);
			cardLoadingTimeout = setTimeout(() => {
				setCardLoading(false);
			}, 1000);
		});
		return clearTimeout(cardLoadingTimeout);
	}, []);

	return (
		<div className='flex w-full justify-center items-center pt-[80px]'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 min-h-screen'>
				{cardLoading ? (
					<ContentLoader />
				) : (
					<>
						<div className='flex flex-1 justify-center flex-col mf:mr-20'>
							<h2 className='text-4xl sm:text-5xl text-white text-gradient py-1 max-rsm:text-left text-center mf:text-left'>
								Sztuka nie ma <br /> wyglądać ładnie, <br /> ma sprawić, <br /> że coś poczujesz!
							</h2>
							<div className='mt-5 text-white font-light text-base max-rsm:text-left text-center mf:text-left'>
								<p className='my-2 text-gradient italic'>~ Rainbow Rowell</p>
							</div>
						</div>

						<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
							{offerData.map(data => (
								<CardItem key={data.id + data.title} id={data.id} path={data.path} title={data.title} />
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Offer;
