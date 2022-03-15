// import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

