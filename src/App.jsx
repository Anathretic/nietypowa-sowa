import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar, Offer, Footer, Contact, PageNotFound, PrivacyPolicy, Home, OfferCategory, Prices } from './sections';
import { CookieBaner } from './components/CookieBaner';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Routes>
					<Route
						element={
							<>
								<Outlet />
								<CookieBaner />
							</>
						}>
						<Route path='/' element={<Home />} />
						<Route
							element={
								<>
									<Navbar />
									<Outlet />
									<Footer />
								</>
							}>
							<Route path='/oferta' element={<Offer />} />
							<Route path='/oferta/:id' element={<OfferCategory />} />
							<Route path='/cennik' element={<Prices />} />
							<Route path='/kontakt' element={<Contact />} />
							<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
							<Route path='*' element={<PageNotFound />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
