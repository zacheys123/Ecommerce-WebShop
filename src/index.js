import React from 'react';
import ReactDOM from   'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './component/App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
     <ThemeProvider theme={theme}>
      <App/>
     </ThemeProvider>
    </BrowserRouter>
    </React.StrictMode>
)
