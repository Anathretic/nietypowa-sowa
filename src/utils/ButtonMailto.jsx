import { Link } from 'react-router-dom'

export const ButtonMailto = ({ mailto, label, classProps, ...otherProps }) => {
	return (
		<Link
			to='#'
			onClick={e => {
				e.preventDefault()
				window.location.href = mailto
			}}
			{...otherProps}
			className={`font-bold hover:text-[#ff91d8] transition duration-300 ${classProps}`}>
			{label}
		</Link>
	)
}
