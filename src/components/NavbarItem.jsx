import { NavLink } from 'react-router-dom';

export const NavbarItem = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li
			className={`mx-2 mf:mx-4 cursor-pointer hover:text-[#ff91d8] transition duration-300 ${classProps} uppercase z-10`}>
			<NavLink to={section} className='p-2' onClick={onClick} {...linkProps}>
				{title}
			</NavLink>
		</li>
	);
};
