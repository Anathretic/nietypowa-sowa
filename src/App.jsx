import { Route, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Contact, PageNotFound, PrivacyPolicy, HeroImg } from './sections'
import CookieBaner from './components/CookieBaner'

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Navbar />
								<HeroImg />
							</>
						}
					/>
					<Route
						path='/offer'
						element={
							<>
								<Navbar />
								<Welcome />
								<Footer />
							</>
						}
					/>
					<Route
						path='/contact'
						element={
							<>
								<Navbar />
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path='/privacy-policy'
						element={
							<>
								<Navbar />
								<PrivacyPolicy />
								<Footer />
							</>
						}
					/>
					<Route
						path='*'
						element={
							<>
								<Navbar />
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
