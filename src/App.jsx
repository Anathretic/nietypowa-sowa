import { Route, Routes } from 'react-router-dom';
import { Navbar, Offer, Footer, Contact, PageNotFound, PrivacyPolicy, Home } from './sections';
import { CookieBaner } from './components/CookieBaner';
import { Photos } from './sections/Photos';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
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
						path='/oferta'
						element={
							<>
								<Navbar />
								<Offer />
								<Footer />
							</>
						}
					/>
					<Route
						path='/oferta/:id'
						element={
							<>
								<Navbar />
								<Photos />
								<Footer />
							</>
						}
					/>
					<Route
						path='/kontakt'
						element={
							<>
								<Navbar />
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path='/polityka-prywatnosci'
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
	);
};

export default App;
