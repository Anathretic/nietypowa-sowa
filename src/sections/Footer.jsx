import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className='w-full flex md:justify-center justify-between items-center flex-col p-4 text-white'>
			<div className='sm:w-[90%] w-full h-[1px] bg-gray-400 mt-20' />
			<div className='sm:w-[90%] w-full flex justify-between items-center my-5'>
				<div className='flex'>
					<FaRegCopyright className='mr-1 h-auto' />
					<p className='text-sm text-center mf:text-base uppercase'> {currentYear} konrad wojtyło</p>
				</div>
				<div className='flex flex-end '>
					<a
						className='cursor-pointer mr-6 sm:mr-8 p-1 hover:text-red-500 transition duration-300'
						href='https://github.com/Anathretic/portfolio-page'
						target='_blank'
						rel='noreferrer'>
						<BsGithub fontSize={22} />
					</a>
					<a
						className='cursor-pointer p-1 hover:text-red-500 transition duration-300'
						href='https://www.linkedin.com/in/konrad-wojtylo'
						target='_blank'
						rel='noreferrer'>
						<BsLinkedin fontSize={22} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
