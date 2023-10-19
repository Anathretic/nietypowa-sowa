import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItem } from '../components/NavbarItem';

const navbarItems = [
	{
		title: 'home',
		section: '/',
	},
	{
		title: 'oferta',
		section: '/oferta',
	},
	{
		title: 'kontakt',
		section: '/kontakt',
	},
	{
		title: 'prywatność',
		section: '/polityka-prywatnosci',
	},
];

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleLogo = () => {
		window.location.href = '/';
	};

	return (
		<nav className='absolute top-0 w-screen h-[80px] flex md:justify-center justify-between items-center p-4 mf:p-2 z-10 transition duration-300'>
			<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
				<div className='flex items-center mf:mx-2'>
					<img
						src='/nietypowa-logo.png'
						alt='Logo odświeżające stronę'
						className='cursor-pointer sm:p-2 mf:p-0'
						onClick={handleLogo}
					/>
				</div>
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				{navbarItems.map(({ title, section }) => (
					<NavbarItem key={title} title={title} section={section} />
				))}
			</ul>
			<div className='flex relative'>
				{toggleMenu || (
					<HiMenuAlt4
						fontSize={32}
						className='text-white md:hidden cursor-pointer mx-2 sm:mx-4'
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-black animate-slide-in'>
						<li className='text-xl self-start my-2 cursor-pointer'>
							<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
						</li>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem
								key={title}
								title={title}
								section={section}
								classProps={'mb-5'}
								onClick={() => {
									setToggleMenu(false);
								}}
							/>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
