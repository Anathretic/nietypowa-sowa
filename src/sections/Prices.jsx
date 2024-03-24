import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

const pricesArrayHead = [{ title: 'Usługa' }, { title: 'Cena' }];

const pricesArrayBody = [
	{ service: 'Zakładka', price: '20' },
	{ service: 'Buty*', price: '200+' },
	{ service: 'Obraz*', price: '150+' },
	{ service: 'Brelok', price: '20' },
];

const Prices = () => {
	return (
		<div className='pt-[80px] 2xl:pt-[120px] flex justify-center items-center flex-col min-h-[85vh]'>
			<div className='flex justify-center items-center flex-col max-w-[500px] md:max-w-[600px] text-white md:p-20 py-12 px-4'>
				<table className='flex items-center flex-col  text-center blue-gradient w-full'>
					<thead className='flex justify-between w-full'>
						{pricesArrayHead.map(data => (
							<tr className='md:px-4' key={data.title}>
								<th className='px-5 pt-10 pb-6 md:text-xl text-lg'>{data.title}</th>
							</tr>
						))}
					</thead>
					<hr className='w-[95%] md:w-[90%]' />
					<tbody className='flex flex-col w-full items-center pb-4'>
						{pricesArrayBody.map(data => (
							<tr className='flex w-full justify-between md:text-base md:px-4 py-2' key={data.service + data.price}>
								<td className='p-4 px-5 text-left'>{data.service}</td>
								<td className='p-4 px-5 text-right'>{data.price} zł</td>
							</tr>
						))}
					</tbody>
				</table>
				<span className='p-4 py-12 text-white text-center text-sm'>
					*Podane ceny są umowne ze względu na to, że każdy klient ma własne preferencje co do produktu, jaki chciałby
					otrzymać. Dodatkowo w skład ceny wchodzi np. rozmiar obrazu - przekłada się to na zużycie materiałów
					potrzebnych do jego wykonania oraz zasobów czasu.
				</span>
				<Link
					to='/kontakt'
					className='mt-8 text-lg flex justify-center bg-[#ff91d8] p-3 w-56 md:w-64 lg:w-72 rounded-full cursor-pointer hover:bg-[#bf589a] transition duration-300 text-white'
					onClick={() => {
						scrollToTop();
					}}>
					Zamów
				</Link>
				<p className='p-4 pt-12 text-white text-center text-md lg:text-lg'>
					Kliknij powyższy przycisk, aby złożyć u mnie swoje zamówienie poprzez formularz! Pamiętaj by w wiadomości
					podać chociaż uproszczoną wizję tego, co dokładnie byś chciał.
				</p>
			</div>
		</div>
	);
};

export default Prices;
