import { Route, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Contact, PageNotFound, PrivacyPolicy, HeroImg } from './sections'
import CookieBaner from './components/CookieBaner'

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<HeroImg />
							</>
						}
					/>
					<Route
						path='/offer'
						element={
							<>
								<Welcome />
								<Footer />
							</>
						}
					/>
					<Route
						path='/contact'
						element={
							<>
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path='/privacy-policy'
						element={
							<>
								<PrivacyPolicy />
								<Footer />
							</>
						}
					/>
					<Route
						path='*'
						element={
							<>
								<PageNotFound />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
			<CookieBaner />
		</div>
	)
}

export default App
