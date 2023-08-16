const PrivacyPolicy = () => {
	const policyBoxStyle = 'p-3 mt-5 max-[360px]:w-full w-9/12 md:w-2/3 lg:w-1/2'

	return (
		<div className='flex justify-center items-center flex-col min-h-[83vh] md:min-h-[90vh] p-5 text-white text-sm md:text-base pt-[120px]'>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>Administrator danych</p>
				<p className='font-light'>
					Administratorem Państwa danych jest <span className='font-bold'>Magdalena Sowa</span>, właściciel strony
					Nietypowa Sowa.
				</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>Kiedy zbieram Twoje dane?</p>
				<p className='font-light'>
					Dane użytkownika (takie jak adres e-mail) są gromadzone wyłącznie podczas korzystania z formularza
					kontaktowego.
				</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>Jak wygląda przepływ danych?</p>
				<p className='font-light'>
					Twoje dane zbierane poprzez formularz kontaktowy są przetwarzane wyłącznie w celach kontaktowych. Nikomu ich
					nie udostępniam, ani nie sprzedaję.
				</p>
				<p className='font-light mt-2'>Korzystanie z formularza kontaktowego jest dobrowolne.</p>
			</div>
			<div className={policyBoxStyle}>
				<p className='mb-3 font-bold'>Pozostałe informacje</p>
				<p className='font-light'>
					W razie jakichkolwiek pytań proszę o kontakt na mój adres mailowy:{' '}
					<span className='font-bold'>nietypowasowa@gmail.com</span>
				</p>
			</div>
		</div>
	)
}

export default PrivacyPolicy
