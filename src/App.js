import React from 'react';
import Controller from './components/Controller';
import Container from '@material-ui/core/Container';
import Status from './components/Status';
import './App.css';
import { Typography } from '@material-ui/core';



function App() {
  return (
    <Container>
      <Typography variant='h1' gutterBottom>
        Remote Boat
      </Typography>
      <Status/>
      <Controller/>
    </Container>
  );
}

export default App;
