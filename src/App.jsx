import { Route, Routes } from 'react-router-dom';
import { Navbar, Offer, Footer, Contact, PageNotFound, PrivacyPolicy, Home } from './sections';
import { CookieBaner } from './components/CookieBaner';
import { ScrollToTop } from './utils/ScrollToTop';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Home />
							</>
						}
					/>
					<Route
						path='/offer'
						element={
							<>
								<Offer />
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
	);
};

export default App;
