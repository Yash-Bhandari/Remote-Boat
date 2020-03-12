import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

import Boat from './components/Boat';
import { store } from './redux';
import { socketMiddleware } from './redux'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Typography variant='h1' gutterBottom>
          Remote Boat
      </Typography>
        <Boat />
      </Container>
    </Provider>
  );
}

export default App;
