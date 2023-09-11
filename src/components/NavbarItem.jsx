import { NavLink } from 'react-router-dom'

export const NavbarItem = ({ title, section, classProps, onClick, ...otherProps }) => {
	return (
		<li
			className={`mx-2 mf:mx-4 cursor-pointer hover:text-[#ff91d8] transition duration-300 ${classProps} uppercase z-10`}>
			<NavLink className='p-2' to={section} onClick={onClick} {...otherProps}>
				{title}
			</NavLink>
		</li>
	)
}
