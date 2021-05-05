import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { darkTheme } from './theme';

let dark = false;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {dark ? darkTheme : theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

