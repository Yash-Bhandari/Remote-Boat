import React from 'react';
import Container from '@material-ui/core/Container';
import Boat from './components/Boat';
import './App.css';
import { Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux';
import { socketMiddleware } from './redux'

const socketURL = 'http://localhost:5001/clients';

const store = configureStore({
  reducer: rootReducer,
  middleware: [socketMiddleware(socketURL)]
})

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
