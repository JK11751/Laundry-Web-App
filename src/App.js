/* eslint-disable no-undef */
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './components/AdminPannel/Customer/Customers';
import AdminDashboard from './components/AdminPannel/Dashboard/AdminDashboard';
import AdminLogin from './components/AdminPannel/Login/AdminLogin';
import Registration from './components/AdminPannel/Login/Registration';
import Orders from './components/AdminPannel/Orders/Orders';
import Product from './components/AdminPannel/Products/Products';
import Support from './components/AdminPannel/Support/Support';
import Login from './components/Authentication/Login';
//import { AuthProvider, PrivateRoute } from './components/Authentication/useAuth';
import Bag from './components/CartAndShipment/Bag';
import Header from './components/Header/Header';
import About from './components/Home/About';
import ChooseUs from './components/Home/ChooseUs';
import ContactUs from './components/Home/ContactUs';
import Footer from './components/Home/Footer';
import Hero from './components/Home/Hero';
import Review from './components/Home/Review';
import Services from './components/Home/Services';
import Works from './components/Home/Works';
//import Preloader from './components/Preloader/Preloader';
import DryCleaning from './components/Services/DryCleaning';
import EmergencyService from './components/Services/EmergencyService';
import IronAndFold from './components/Services/IronAndFold';
import SubscriptionBased from './components/Services/SubscriptionBased';
import WashAndFold from './components/Services/WashAndFold';
import WashAndIron from './components/Services/WashAndIron';
import Dashboard from './components/UserDashboard/Dashboard';
//import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from './utilities/databaseManager';
export const DataContext = createContext();

function App() {
	

	return (
		<div>
						<Router>
							<Switch>
								<Route exact path="/">
									<Header/>
									<Hero />
									<About />
									<Services />
									<Works />
									<ChooseUs />
									<Review />
									<ContactUs />
									<Footer />
								</Route>

								<Route exact path="/services">
									<Header  />
									<Services />
									<Review />
									<Footer />
								</Route>

								<Route exact path="/wash-and-iron">
									<Header  />
									<WashAndIron
										
									/>
									<Footer />
								</Route>

								<Route exact path="/wash-and-fold">
									<Header  />
									<WashAndFold
										
									/>
									<Footer />
								</Route>

								<Route exact path="/iron-and-fold">
									<Header  />
									<IronAndFold
										
									/>
									<Footer />
								</Route>

								<Route exact path="/dry-cleaning">
									<Header/>
									<DryCleaning
										
									/>
									<Footer />
								</Route>

								<Route exact path="/subscription-based">
									<Header />
									<SubscriptionBased
										
									/>
									<Footer />
								</Route>

								<Route exact path="/emergency-service">
									<Header />
									<EmergencyService
										
									/>
									<Footer />
								</Route>

								<Route exact path="/cart-and-shipment">
									<Header  />
									<Bag/>
									<Footer />
								</Route>

								<Route exact path="/dashboard">
									<Header  />
									<Dashboard />
									<Footer />
								</Route>

								<Route exact path="/admin/dashboard">
									<AdminDashboard />
								</Route>

								<Route exact path="/admin/allOrders">
									<Orders />
								</Route>

								<Route exact path="/admin/products">
									<Product />
								</Route>

								<Route exact path="/admin/customers">
									<Customers />
								</Route>

								<Route exact path="/admin/registration">
									<Registration />
								</Route>

								<Route exact path="/admin/support">
									<Support />
								</Route>

								<Route exact path="/login">
									<Login />
								</Route>

								<Route exact path="/admin">
									<AdminLogin />
								</Route>
							</Switch>
						</Router>
				
			
		</div>
	);
}

export default App;
