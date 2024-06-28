import { Link } from 'react-router-dom';
import { FaInstagram, FaRegCopyright, FaBalanceScale } from 'react-icons/fa';
import { scrollToTop } from '../../utils/scrollToTopUtils';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full flex md:justify-center justify-between items-center flex-col p-4 text-white'>
			<div className='sm:w-[90%] w-full h-[1px] bg-gray-400 mt-20' />
			<div className='sm:w-[90%] w-full flex justify-between items-center my-5'>
				<div className='flex'>
					<FaRegCopyright className='mx-1 h-auto' />
					<p className='text-sm text-center mf:text-base uppercase'> {currentYear} nietypowa sowa</p>
				</div>
				<div className='flex flex-end'>
					<a
						className='mr-4 sm:mr-6 cursor-pointer p-1 hover:text-[#ff91d8] transition duration-300'
						href='https://www.instagram.com/nietypowa_sowa/'
						target='_blank'
						rel='noreferrer'>
						<FaInstagram fontSize={24} />
					</a>
					<Link
						to='/polityka-prywatnosci'
						className='p-1 hover:text-[#ff91d8] transition duration-300'
						onClick={scrollToTop}>
						<FaBalanceScale fontSize={24} />
					</Link>
				</div>
			</div>
		</footer>
	);
};
