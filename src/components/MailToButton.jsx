import { Link } from 'react-router-dom';

export const MailToButton = ({ mailto, label, classProps, ...otherProps }) => {
	const handleMailto = e => {
		e.preventDefault();
		window.location.href = mailto;
	};

	return (
		<Link
			to='#'
			className={`font-bold hover:text-[#ff91d8] transition duration-300 ${classProps}`}
			onClick={handleMailto}
			{...otherProps}>
			{label}
		</Link>
	);
};
