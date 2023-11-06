import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../utils/scrollToTopUtils';

export const CookieBaner = ({ ...otherProps }) => {
	return (
		<CookieConsent
			location='bottom'
			buttonText='OK!'
			style={{
				color: '#fff',
				backgroundColor: '#bf589a',
				fontSize: '12px',
				padding: '10px',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			buttonStyle={{
				backgroundColor: '#ffdf00',
				fontSize: '14px',
				padding: '10px',
				width: '100px',
				borderRadius: '8px',
			}}
			expires={1}
			{...otherProps}>
			<p className='max-[300px]:p-3 p-1'>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z{' '}
				<Link to='/polityka-prywatnosci' onClick={scrollToTop} className='text-amber-300 underline'>
					polityki prywatności
				</Link>
				.
			</p>
		</CookieConsent>
	);
};
