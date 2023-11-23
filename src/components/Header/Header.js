/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Container,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Modal,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	UncontrolledCollapse,
	UncontrolledDropdown
} from 'reactstrap';
import '../../App.css';
import userPhoto from '../../images/auth/man.png';
import Logo from '../../images/icon.svg';


const Header = () => {
	
	return (
		<Navbar className="sticky-top bg-danger" expand="lg">
			<Container>
				<div className="navbar-translate">
					<Link to="/">
						<NavbarBrand onClick={(e) => e.preventDefault()}>
							<div className="row align-items-center">
								<img src={Logo} alt="MyFellow" /> <span className="lead mx-1">MyFellow</span>
							</div>
						</NavbarBrand>
					</Link>
					<button className="navbar-toggler" id="navbar-danger" type="button">
						<i className="text-white now-ui-icons arrows-1_minimal-down" />
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
						<span className="navbar-toggler-bar bar4" />
						<span className="navbar-toggler-bar bar5" />
					</button>
				</div>
				<UncontrolledCollapse navbar toggler="#navbar-danger">
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link to="/">
								<NavLink>
									<i className="now-ui-icons shopping_shop" />
									<p className="nav-name">Home</p>
								</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/services">
								<NavLink>
									<i className="now-ui-icons loader_gear spin" />
									<p className="nav-name">Services</p>
								</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							{/*
							<Link to="/cart-and-shipment">
								<NavLink>
									<i className="now-ui-icons shopping_bag-16" />
									<p className="nav-name">
										Bag
										totalQuantity ? <span className="badge ml-1">totalQuantity</span> : <span />
									</p>
								</NavLink>
							</Link>
	*/}
						</NavItem>
						<NavItem>
							<Link to="/dashboard">
								<NavLink>
									<i className="now-ui-icons objects_spaceship" />
									<p className="nav-name">Dashboard</p>
								</NavLink>
							</Link>
						</NavItem>
						<NavItem>
								<UncontrolledDropdown nav>
									<DropdownToggle
										aria-haspopup={true}
										caret
										color="default"
										data-toggle="dropdown"
										id="navbarDropdownMenuLink"
										nav
										onClick={(e) => e.preventDefault()}
									>
									
										<img
											className="ml-3"
											src={userPhoto}
											width="35px"
											alt="user"
										/>
									</DropdownToggle>
									<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
										<DropdownItem >My Profile</DropdownItem>
										<DropdownItem
											
										>
											Sign Out
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							
								<Link to="/login">
									<NavLink>
										<i className="now-ui-icons users_single-02" />
										<p className="nav-name">Login</p>
									</NavLink>
								</Link>
						
						</NavItem>
					</Nav>
				</UncontrolledCollapse>

				<Modal >
					<div className="modal-header">
						<h5 className="modal-title text-danger" id="exampleModalLiveLabel">
							Email Verification
						</h5>
						<button aria-label="Close" className="close" type="button" >
							<span aria-hidden={true}>×</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Verify your email for MyFellow Laundry Web App</p>
					</div>
					<div className="modal-footer">
						<Button color="danger" type="button" >
							Close
						</Button>
						<a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
							<Button color="success" type="button" >
								Go to Email Inbox
							</Button>
						</a>
					</div>
				</Modal>
			</Container>
		</Navbar>
	);
};

export default Header;
