import { MDBContainer, MDBNotification } from 'mdbreact';
import React from 'react';
//import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import './Signin.css';

const Registration = () => {
	

	
	const containerStyle = {
		backgroundColor: '#F4FDFB',
		height: '100vh'
	};

	return (
		<div style={containerStyle}>
			<Row>
				<Col md={2}>
					<Sidebar />
				</Col>
				<Col md={5}>
					<div className="sign">
						<div className="container">
							<div className="text-center mt-4">
								<Link to="/admin/registration" class="text-info nav-link">
									<h2>Smart Dhopa Admin Registration</h2>
								</Link>
							</div>

							<form  className="py-2 px-5">
							 <p className="text-danger"></p>

								<div className="form-group my-4">
									<input
										name="name"
										className="form-control"
										placeholder="Name"
									/>
									<span className="error"></span>
								</div>

								<div className="form-group my-4">
									<input
										name="email"
										className="form-control"
										
										placeholder="Email"
									/>
									<span className="error"></span>
								</div>

								<div className="form-group my-4">
									<input
										type="password"
										name="password"
										className="form-control"
										
										placeholder="Password"
									/>
									<span className="error"></span>
								</div>

								<div className="form-group my-4">
									<input
										type="password"
										name="confirm_password"
										className="form-control"
										
										placeholder="Confirm Password"
									/>
									<span className="error">Passwords don't match.</span>
								</div>

								<div class="form-group">
									<select class="form-control">
										<option>Moderator</option>
										<option>Editor</option>
										<option>Manager</option>
										<option>Admin</option>
									</select>
								</div>

								<div className="form-group my-4 ">
									<button className="btn btn-primary btn-block w-25" type="submit">
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</Col>
				<Col md={5}>
					<MDBContainer className="mt-5">
						<MDBNotification
							show
							fade
							icon="envelope"
							iconClassName="green-text"
							title="New Message"
							message="Hello, user! You have a new message."
							text="just now"
						/>
						<MDBNotification
							show
							fade
							iconClassName="text-info"
							title="Smart Dhopa"
							message="See? Just like this."
							text="just now"
						/>
						<MDBNotification
							show
							fade
							iconClassName="text-info"
							title="Smart Dhopa"
							message="Heads up, toasts will stack automatically"
							text="2 seconds ago"
						/>
					</MDBContainer>
				</Col>
			</Row>
		</div>
	);
};

export default Registration;
