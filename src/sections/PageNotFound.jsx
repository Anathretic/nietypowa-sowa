const PageNotFound = () => {
	return (
		<div className='flex w-full justify-center items-center min-h-[600px] h-screen p-5'>
			<div className='flex flex-col items-center justify-between md:p-20 py-16 px-4'>
				<img src='/notfound-img.svg' alt='Error-404 image' className='w-[600px]' />
				<p className='text-white text-xs'>
					Error 404 image by{' '}
					<a
						className='text-white text-xs underline hover:text-red-500 transition duration-300'
						href='https://storyset.com/web'
						target='_blank'
						rel='noreferrer'>
						Storyset
					</a>
				</p>
			</div>
		</div>
	)
}

export default PageNotFound
