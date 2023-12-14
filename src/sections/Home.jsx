import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Logo from '/nietypowa-logo.png';

const Home = () => {
	const isLogoVisible = useMediaQuery({ query: '(min-height: 400px)' });

	return (
		<div className='h-screen w-100 bg-hero-img bg-center bg-cover'>
			<div className='flex justify-center items-center flex-col h-full'>
				{isLogoVisible && <img src={Logo} alt='Logo' className='mb-8' />}
				<h1 className='title-font text-center text-5xl rsm:text-6xl mf:text-7xl xl:text-8xl text-white'>
					Nietypowa Sowa
				</h1>
				<Link
					to='/oferta'
					className='flex justify-center items-center mt-12 bg-[#ff91d8] p-3 w-40 sm:w-56 mf:w-96 md:text-lg rounded-full cursor-pointer hover:bg-[#bf589a] transition duration-300 text-white'>
					Rozpocznij
				</Link>
			</div>
		</div>
	);
};

export default Home;
