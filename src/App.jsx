import { Route, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Extras, Contact, PageNotFound, PrivacyPolicy, HeroImg } from './sections'
import CookieBaner from './components/CookieBaner'

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Navbar />
				<HeroImg />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<Contact />
								<Extras />
							</>
						}
					/>
					<Route
						path='/privacy-policy'
						element={
							<>
								<PrivacyPolicy />
							</>
						}
					/>
					<Route
						path='*'
						element={
							<>
								<PageNotFound />
							</>
						}
					/>
				</Routes>
				<Footer />
			</div>
			<CookieBaner />
		</div>
	)
}

export default App
