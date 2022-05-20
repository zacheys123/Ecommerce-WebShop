import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		padding: '1rem',
		marginBottom: '7rem',
		[theme.breakpoints.down('md', 'sm')]: {
			width: '96%',
			zIndex: '1',
			marginLeft: '.5rem',
			background: 'linear-gradient(white,wheat)',
		},
	},
	prodpage: {
		marginTop: '5.8rem',
		maxWidth: '91.4%',
		[theme.breakpoints.down('md', 'sm')]: {
			marginLeft: '-20rem',
			maxWidth: '110%',
			marginTop: '5.9rem',
		},
		[theme.breakpoints.only('xs')]: {
			marginLeft: '-19rem',
			zIndex: '1',
			maxWidth: '100%',
		},
	},
	root: {
		flexGrow: 1,
		marginBottom: '-1rem',
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
	},
}));
