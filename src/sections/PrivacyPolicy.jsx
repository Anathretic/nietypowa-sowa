import { MailToButton } from '../components/MailToButton';

const PrivacyPolicy = () => {
	const policyBoxStyle = 'p-3 mt-5 max-[360px]:w-full w-9/12 md:w-2/3 lg:w-1/2';

	return (
		<div className='flex justify-center items-center flex-col min-h-[83vh] md:min-h-[90vh] p-5 text-white text-sm md:text-base pt-[120px]'>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>1. Administrator danych</p>
				<p className='font-light'>
					Administratorem Państwa danych jest <span className='font-bold'>Magdalena Sowa</span>, właściciel strony
					Nietypowa Sowa.
				</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>2. Kiedy zbieram Twoje dane?</p>
				<p className='font-light'>
					Dane użytkownika (takie jak adres e-mail) są gromadzone wyłącznie podczas korzystania z formularza
					kontaktowego.
				</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>3. Jak wygląda przepływ danych?</p>
				<p className='font-light'>
					Twoje dane zbierane poprzez formularz kontaktowy są przetwarzane wyłącznie w celach kontaktowych. Nikomu ich
					nie udostępniam, ani nie sprzedaję.
				</p>
				<p className='font-light mt-2'>Korzystanie z formularza kontaktowego jest dobrowolne.</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>4. Pozostałe informacje</p>
				<p className='font-light'>
					W razie jakichkolwiek pytań proszę o kontakt na mój adres mailowy:{' '}
					<MailToButton label='nietypowasowa@gmail.com' mailto='mailto:nietypowasowa@gmail.com' />
				</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>5. Projekt strony</p>
				<p className='font-light'>
					Rozplanowanie i makieta:{' '}
					<a
						className='font-bold hover:text-[#ff91d8] transition duration-300'
						href='https://www.linkedin.com/in/julia-hyz-098288274/'
						target='_blank'
						rel='noreferrer'>
						Julia Hyz
					</a>
				</p>
				<p className='font-light'>
					Kod, tekst oraz małe poprawki graficzne:{' '}
					<a
						className='font-bold hover:text-[#ff91d8] transition duration-300'
						href='https://konrad-wojtylo.com/'
						target='_blank'
						rel='noreferrer'>
						Konrad Wojtyło
					</a>
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
