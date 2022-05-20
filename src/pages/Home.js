import React, {
	useState,
	useEffect,
	useContext,
	useRef,
} from 'react';
import { HomeWrapper, ProductsPage } from '../styled/HomeWrapper';
import Overview from '../component/Overview';
import { Grid, IconButton, Typography } from '@mui/material';
import { userContext } from '../component/userContext';
import useStyles from './Productsfolder/styles';
import Product from './Productsfolder/product/Product';
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import {
	EmailRounded,
	PersonAddAltRounded,
	GroupRounded,
	HomeTwoTone,
	Login,
	Logout,
	AttachEmail,
	ProductionQuantityLimits,
} from '@mui/icons-material';
export default function Home(props) {
	const [prod, setProd] = useState([]);
	const [ismobile, setmobile] = useState(true);
	const productpage = useRef(null);

	const { products, loading } = useContext(userContext);
	useEffect(() => {
		setProd(products);
	}, [products]);
	props.callbackfunc(() => setmobile);
	const classes = useStyles();
	if (!ismobile) {
		productpage.current.style.marginLeft = '';
	}

	return (
		<>
			<div style={{ marginTop: '.4rem' }}></div>
			<HomeWrapper>
				{!ismobile && (
					<div className={classes.mobilenavbar}>
						<Typography gutterBottom>
							<IconButton
								sx={{
									color: 'lightblue',
									marginTop: '1rem',
								}}
							>
								<HomeTwoTone sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									marginTop: '3rem',
								}}
							>
								<GroupRounded sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									marginTop: '3rem',
								}}
							>
								<EmailRounded sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									fontSize: '1.6rem',
									marginTop: '3rem',
								}}
							>
								<PersonAddAltRounded sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									fontSize: '1.6rem',
									marginTop: '3rem',
								}}
							>
								<AttachEmail sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									fontSize: '1.6rem',
									marginTop: '3rem',
								}}
							>
								<ProductionQuantityLimits
									sx={{ fontSize: '1.6rem' }}
								/>
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									fontSize: '1.6rem',
									marginTop: '3rem',
								}}
							>
								<Login sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
						<Typography>
							<IconButton
								sx={{
									color: 'lightblue',
									marginTop: '3rem',
								}}
							>
								<Logout sx={{ fontSize: '1.6rem' }} />
							</IconButton>
						</Typography>
					</div>
				)}
				<div className={classes.sidebar}>
					<Sidebar />
				</div>
				<div ref={productpage} className={classes.prodpage}>
					<ProductsPage>
						<div
							style={{
								borderBottom: '1px solid light grey',
								padding: '1rem',
							}}
						>
							<Overview />
						</div>
						<main className={classes.content}>
							<Grid
								container
								justify="center"
								className={classes.root}
								spacing={3}
							>
								{prod &&
									prod.map((product) => {
										return (
											<Grid
												item
												xs={12}
												sm={6}
												md={4.8}
												lg={3.75}
												xl={1.86}
												key={product.id}
											>
												<Product {...product} />
											</Grid>
										);
									})}
							</Grid>
						</main>
					</ProductsPage>
				</div>
			</HomeWrapper>
		</>
	);
}
