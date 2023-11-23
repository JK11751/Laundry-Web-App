import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import '../Services/Services.css';
import './Cart.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	dividerFullWidth: {
		margin: `10px 0 0 ${theme.spacing(0)}px`,
		fontSize: theme.typography.pxToRem(16)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}));

const Cart = (props) => {
	const classes = useStyles();
	
	return (
		<div className="cartClass">
			<h4 className="text-danger d-flex justify-content-center m-2">Your Bag</h4>
			<p className="d-flex justify-content-center m-1">Total Item: </p>

			<List className={classes.root}>
			
					<div >
						<Divider />
						<ListItem>
							<Typography
								className={classes.dividerFullWidth}
								color="textSecondary"
								display="block"
								variant="caption"
							>
							
							</Typography>
							<ListItemText primary="" />
							<div className="quantity-button">
							
									<button
										
										className="btnQ"
									>
										-
									</button>
							
									<button className="btnQ" >
										-
									</button>
							
								<span className="quantity"> </span>
								<button
									className="btnQ"
								
								>
									+
								</button>
							</div>
						</ListItem>
						<ListItem>
							<ListItemText primary='' />
							<ListItemText primary="" />
							<Typography className={classes.secondaryHeading}>
								<span className="price">Ksh. </span>
							</Typography>
						</ListItem>
					</div>
		

				<Divider />
				<ListItem>
					<ListItemText primary="Sub Total" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">Ksh. </span>
					</Typography>
				</ListItem>
				<ListItem>
					<ListItemText primary="Delivery Charge" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">Ksh. </span>
					</Typography>
				</ListItem>
				<ListItem>
					<ListItemText primary="Grand Total" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">Ksh.  </span>
					</Typography>
				</ListItem>
			</List>

		
				<div className="">
					<div className="d-flex justify-content-center">
						<FormGroup check>
							<Label check>
								<Input type="checkbox" defaultChecked />
								<span className="form-check-sign" />
								Agree with Terms and Conditions
							</Label>
						</FormGroup>
					</div>
					<div className="d-flex justify-content-center">
						<Link to="/dashboard">
							<Button className="nav-name my-4" color="danger" >
								<i className="now-ui-icons arrows-1_share-66" />
								<span className="ml-2">Place Your Order</span>
							</Button>
						</Link>
					</div>
				</div>
	
				<div className="d-flex justify-content-center">
					<Link to="/cart-and-shipment">
						<Button className="nav-name my-4" color="danger">
							<i className="now-ui-icons shopping_bag-16" />
							<span className="ml-2">Check Out Your Order</span>
						</Button>
					</Link>
				</div>
		
				<div />
		
		</div>
	);
};

export default Cart;
