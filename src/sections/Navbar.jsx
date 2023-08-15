import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import NavbarItem from '../components/NavbarItem'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleLogo = () => {
		window.location.href = '/'
	}

	return (
		<nav className={`absolute top-0 w-full h-[80px] flex md:justify-center justify-between items-center p-4 z-10 transition duration-300`}>
			<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
				<div className='flex'>
					<img src='/favicon.svg' alt='Logo that refreshes the page' className='mr-1' />
					<p className='cursor-pointer text-white uppercase' onClick={handleLogo}>
						nietypowa sowa
					</p>
				</div>
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				<NavbarItem title='home' section='/' />
				<NavbarItem title='oferta' section='/offer' />
				<NavbarItem title='kontakt' section='/contact' />
				<NavbarItem title='prywatność' section='/privacy-policy' />
			</ul>
			<div className='flex relative'>
				{toggleMenu ? (
					<AiOutlineClose
						fontSize={32}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<HiMenuAlt4
						fontSize={32}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-black animate-slide-in'>
						<li className='text-xl self-start my-2 cursor-pointer'>
							<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
						</li>
						<NavbarItem
							title='home'
							section='/'
							classProps={'mb-5'}
							onClick={() => {
								setToggleMenu(false)
							}}
						/>
						<NavbarItem
							title='oferta'
							section='/offer'
							classProps={'mb-5'}
							onClick={() => {
								setToggleMenu(false)
							}}
						/>
						<NavbarItem
							title='kontakt'
							section='/contact'
							classProps={'mb-5'}
							onClick={() => {
								setToggleMenu(false)
							}}
						/>
						<NavbarItem
							title='prywatność'
							section='/privacy-policy'
							classProps={'mb-5'}
							onClick={() => {
								setToggleMenu(false)
							}}
						/>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
