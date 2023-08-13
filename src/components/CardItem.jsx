const CardItem = ({ title, webHandle, bgImg }) => {

	return (
		<div className='w-full'>
			<div
				className={`p-3 flex justify-end items-start flex-col rounded-xl h-60 sm:w-96 my-3 ${
					webHandle ? `card-${bgImg}` : 'card animate-pulse'
				}`}>
				<div className='flex w-full h-full'>
					<p className='text-white font-light text-lg self-end'>{title}</p>
				</div>
			</div>
		</div>
	)
}

export default CardItem
