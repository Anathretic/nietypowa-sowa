import { Outlet, Route, Routes } from 'react-router-dom';
import { Home, Blog, Offer, Shop, Quote, Contact, PrivacyPolicy, PageNotFound } from './pages';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { OfferCategory } from './components/sections/OfferCategory';
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
							<Route path='/blog' element={<Blog />} />
							<Route path='/oferta' element={<Offer />} />
							<Route path='/oferta/:id' element={<OfferCategory />} />
							<Route path='/sklep' element={<Shop />} />
							<Route path='/wycena' element={<Quote />} />
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
