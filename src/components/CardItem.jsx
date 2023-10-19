import { FiChevronsRight } from 'react-icons/fi';

export const CardItem = ({ title, webHandle, bgImg }) => {
	return (
		<div className='w-full'>
			<div className={`p-3 flex justify-end items-end flex-col rounded-xl h-60 sm:w-96 my-3 card-${bgImg}`}>
				<div className='flex justify-between items-start'>
					{webHandle && (
						<a
							className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white cursor-pointer hover:bg-[#ff91d8] transition duration-300'
							href={webHandle}
							target='_blank'
							rel='noreferrer'>
							<FiChevronsRight fontSize={24} />
						</a>
					)}
				</div>
				<div className='flex w-full h-full'>
					<p className='text-white font-light text-lg self-end'>{title}</p>
				</div>
			</div>
		</div>
	);
};
