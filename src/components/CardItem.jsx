import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import { scrollToTop } from '../utils/scrollToTopUtils';

export const CardItem = ({ id, path, title }) => {
	return (
		<div className='w-full'>
			<div className={`p-3 flex justify-end items-end flex-col rounded-xl h-60 sm:w-96 my-3 card-${id}`}>
				<div className='flex justify-between items-start'>
					<Link
						className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white cursor-pointer hover:bg-[#ff91d8] transition duration-300'
						to={`${path}`}
						onClick={scrollToTop}>
						<FiChevronsRight fontSize={24} />
					</Link>
				</div>
				<div className='flex w-full h-full'>
					<p className='text-white font-light text-lg self-end'>{title}</p>
				</div>
			</div>
		</div>
	);
};
