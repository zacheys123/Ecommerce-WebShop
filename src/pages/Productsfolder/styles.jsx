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
			marginLeft: '-19rem !important',
			maxWidth: '100%!important',
		},
		[theme.breakpoints.up('md')]: {
			marginLeft: '18rem',
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
			zIndex: '1 !important',
			opacity: '.90',
			background: 'black',
		},
		[theme.breakpoints.down('md', 'sm')]: {
			zIndex: '1 !important',
		},
	},
}));
