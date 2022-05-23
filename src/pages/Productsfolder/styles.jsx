import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		padding: '1rem',
		marginBottom: '7rem',
		[theme.breakpoints.down('md', 'sm')]: {
			width: '94%',
			zIndex: '1',
			marginLeft: '.9rem',
			background: 'linear-gradient(white,wheat)',
		},
		[theme.breakpoints.only('mxl')]: {
			width: '94%',
			zIndex: '1',
			marginLeft: '1.9rem',
			background: 'linear-gradient(white,wheat)',
		},
	},
	prodpage: {
		background: 'rgb(220, 245, 231) !important',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		maxWidth: '83%!important',
		marginLeft: '19.4rem !important',
		marginRight: '-9rem',
		minHeight: '100%',
		boxShadow: 'var(--box-shadow)',
		[theme.breakpoints.down('md', 'sm')]: {
			marginLeft: '0rem !important',
			maxWidth: '97.8% !important',
			transition: 'all .3s  ease-in-out',
			marginTop: '4.6rem',
		},
		[theme.breakpoints.only('xs')]: {
			marginTop: '.6rem',
			marginLeft: '1rem !important',
			maxWidth: '89.6%!important',
		},
		[theme.breakpoints.only('md', 'mxl')]: {
			marginLeft: '18rem',
			maxWidth: '70.7% !important',
			backgroundColor: 'rgba(243,343,21) !important',
		},
		[theme.breakpoints.up('mxl')]: {
			maxWidth: '72.7%',
		},
	},

	toolbar: {
		height: '5.2rem',
	},
	[theme.breakpoints.down('md')]: {
		height: '5.2rem',
	},
	sidebar: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
			position: 'absolute',
		},
	},
	mobilenavbar: {
		position: 'absolute',
		marginLeft: '1rem',
		marginTop: '9rem',
		position: 'fixed',
		[theme.breakpoints.only('xs')]: {
			width: '4rem',
			marginLeft: '-.1rem',
			marginTop: '1.6rem',
			zIndex: '1 !important',
			opacity: '.90',
			background: 'black',
		},
		[theme.breakpoints.down('md', 'sm')]: {
			zIndex: '1 !important',
		},
	},
}));
