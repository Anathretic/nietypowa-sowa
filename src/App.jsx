import { Route, Routes } from 'react-router-dom';
import { Navbar, Offer, Footer, Contact, PageNotFound, PrivacyPolicy, Home } from './sections';
import { CookieBaner } from './components/CookieBaner';
import { Photos } from './sections/Photos';

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
								<Home />
							</>
						}
					/>
					<Route
						path='/oferta'
						element={
							<>
								<Offer />
								<Footer />
							</>
						}
					/>
					<Route
						path='/oferta/:id'
						element={
							<>
								<Photos />
								<Footer />
							</>
						}
					/>
					<Route
						path='/kontakt'
						element={
							<>
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path='/polityka-prywatnosci'
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
