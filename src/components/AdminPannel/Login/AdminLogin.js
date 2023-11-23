import React from 'react';
//import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './Signin.css';

const AdminLogin = () => {

	return (
			<div className="sign-up">
				<div className="container">
					<div className="text-center py-4">
						<Link to="/admin" class="text-info nav-link">
							<h2>Smart Dhopa Admin Pannel</h2>
						</Link>
					</div>

					<form  className="py-3">
						<h1 className="lead text-center py-3">Welcome back!</h1>
						<p className="text-danger"> </p>

						<div className="form-group my-4">
							<input
								name="email"
								className="form-control"
								value="smart.dhopa@gmail.com"
								ref=''
								placeholder="Email"
							/>
							<span className="error">Email is required</span>
						</div>

						<div className="form-group my-4">
							<input
								type="password"
								name="password"
								value="Smart@123"
								className="form-control"
								ref=""
								placeholder="Password"
							/>
						<span className="error">Password is required</span>
						</div>
						<p className="forget-text" >Forgot your password?</p>

						<div className="form-group text-center">
							<button className="btn btn-primary w-25" type="submit">
								Log In
							</button>
						</div>
					</form>
				</div>
			</div>
	);
};

export default AdminLogin;




