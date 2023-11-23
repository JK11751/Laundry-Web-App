import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useEffect} from 'react';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import Cart from './Cart';
import './Cart.css';

const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
		marginBottom: theme.spacing(3),
		marginTop: theme.spacing(3)
	}
}));

const Bag = (props) => {

	//const auth = useAuth();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	const classes = useStyles();


	return (
		<section>
			<Container>
				<Row>
					<Col md={7}>
						<h4 className="text-danger">Edit Pickup & Delivery Details</h4>
						<hr />
					
						<div className="address-details px-2 mb-3">
							<form  className="py-2">
								<div>
									<h5 className="text-danger">
										<i className="now-ui-icons shopping_delivery-fast mr-2" />Schedule
									</h5>
									<span className="from-text">
										Expert will arrive at your given address within 30 minuets
									</span>
								</div>

								<TextField
									name="getDate"
									id="date"
									label="Pickup Date"
									type="date"
									
									
									className={classes.textField}
									InputLabelProps={{
										shrink: true
									}}
								/>

								<TextField
									name="getTime"
									id="time"
									label="Pickup Time"
									type="time"
								
								
									className={classes.textField}
									InputLabelProps={{
										shrink: true
									}}
									inputProps={{
										step: 300 // 5 min
									}}
								/>

								<div>
									<h5 className="text-danger">
										<i className="now-ui-icons business_badge mr-2" />Contact Person
									</h5>
									<span className="from-text">Expert will arrive at the address given below</span>
								</div>

								<FormGroup>
									<input
										name="fullName"
										className="form-control my-3"
										
										placeholder="Full Name"
									/>
									
								</FormGroup>

								<FormGroup>
									<input
										name="email"
										className="form-control my-3"
										
										placeholder="Email"
									/>
								
								</FormGroup>

								<FormGroup>
									<input
										name="mobileNumber"
										className="form-control my-3"
										
										placeholder="Mobile Number"
									/>
									
								</FormGroup>

								<div className="mt-4">
									<h5 className="text-danger">
										<i className="now-ui-icons location_pin mr-2" />Address
									</h5>
									<span className="from-text">Expert will arrive at the address given below</span>
								</div>

								<FormGroup>
									<input
										name="toDoor"
										className="form-control my-3"
										
										
										placeholder="Delivery To Door"
									/>
								
								</FormGroup>

								<FormGroup>
									<input
										name="road"
										className="form-control my-3"
										
										placeholder="Road Name"
									/>
									
								</FormGroup>

								<FormGroup>
									<input
										name="flat"
										className="form-control my-3"
										
										placeholder="Flat Name, Room Number or Floor"
									/>
									
								</FormGroup>

								<FormGroup>
									<textarea
										name="address"
										
										placeholder="Address"
										className="form-control my-3"
										cols="30"
										rows="2"
									/>
									
								</FormGroup>

								<div className="mt-4 mb-3">
									<h5 className="text-danger">
										<i className="now-ui-icons business_money-coins mr-2" />Payment Method
									</h5>
									<span className="from-text">Expert will collect your payment after delivery your order</span>
								</div>

								<FormGroup check className="form-check-radio" inline>
									<Label check>
										<Input
											defaultChecked
											defaultValue="option1"
											id="inlineRadio1"
											name="inlineRadioOptions"
											type="radio"
										/>
										Cash on delivery <span className="form-check-sign" />
									</Label>
								</FormGroup>

								<div className="form-group d-flex justify-content-center mt-4">
									<button className="btn btn-danger " type="submit">
										<i className="now-ui-icons ui-1_check" />
										<span className="ml-2">Save & Continue</span>
									</button>
								</div>
							</form>
						</div>
					</Col>
					<Col md={5} className="mb-5">
						<Cart
							
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Bag;
