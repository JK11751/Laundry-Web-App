/* eslint-disable jsx-a11y/alt-text */
import { faEnvelope, faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
import facebook from '../../images/auth/facebook.svg';
import google from '../../images/auth/google.svg';
import loginPic from '../../images/auth/log.svg';
import registerPic from '../../images/auth/register.svg';
import './Login.css';
//import { resetPassword, useAuth } from './useAuth';

const Login = () => {
	const [ toggled, setToggled ] = useState(false);
	const buttonClass = toggled ? 'containerz sign-up-mode' : 'containerz';

	
	

	return (
		<section id="Amazing-Login-Page">
			<div className={buttonClass}>
				<div className="forms-containerz">
					<div className="signin-signup">
						<form  className="sign-in-form">
							<h2 className="title">Sign in</h2>
							 <p className="text-danger"></p>

							<div className="input-field">
								<FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
								<input 
									name="email" 
								
									placeholder="Email" 
								/>
							</div>
						<span className="error">Email is required</span>

							<div className="input-field">
								<FontAwesomeIcon icon={faLock} className="input-fieldi" />
								<input
									type="password"
									name="password"
									
									placeholder="Password"
								/>
							</div>
						<span className="error">Password is required</span>

							<button className="btnz"  type="submit">
								Sign In
							</button>

							<p className="forget-text" >Forgot your password?</p>

							<p className="social-text">Or Sign in with social platforms</p>
							<div className="social-media">
								<button className="social-icon" >
									<img src={google} width="25px" />
									<span className="mx-2">Sign in with Google</span>
								</button>
								<button className="social-icon" >
									<img src={facebook} width="27px" />
									<span className="mx-2">Sign in with Facebook </span>
								</button>
							</div>
						</form>

						<form  className="sign-up-form">
							<h2 className="title">Sign up</h2>
							<p className="text-danger"></p>

							<div className="input-field">
								<FontAwesomeIcon icon={faUser} className="input-fieldi" />
								<input
                                    name="name"
                                   
                                    placeholder="Name"
                                />
							</div>
							<span className="error">
                                  
                             </span>

							<div className="input-field">
								<FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
								<input
                                    name="email"
                                  
                                    placeholder="Email"
                                />
							</div>
							<span className="error">
                                  
                            </span>

							<div className="input-field">
								<FontAwesomeIcon icon={faLock} className="input-fieldi" />
								<input
                                    type="password"
                                    name="password"
                                   
                                    placeholder="Password"
                                />
							</div>
							<span className="error">
                                   
                            </span>

							<div className="input-field">
								<FontAwesomeIcon icon={faLockOpen} className="input-fieldi" />
								<input
                                    type="password"
                                    name="confirm_password"
                                   
                                    placeholder="Confirm Password"
                                />
							</div>
								
                                 
                                

							<button className="btnz" type="submit">
								Sign Up
							</button>
						</form>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>New here ?</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
							</p>
							<button className="btnz transparent" onClick={() => setToggled(!toggled)} id="sign-up-btn">
								Sign up
							</button>
						</div>
						<img src={loginPic} className="image" alt="" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
							</p>
							<button className="btnz transparent" onClick={() => setToggled(!toggled)} id="sign-in-btn">
								Sign in
							</button>
						</div>
						<img src={registerPic} className="image" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
