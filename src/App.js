import React from 'react';
import NavBar from './components/NavBar';
import Controller from './components/Controller';
import Container from '@material-ui/core/Container';
import './App.css';
import { Typography } from '@material-ui/core';



function App() {
  return (
    <Container>
      <Typography variant='h1' gutterBottom>
        Remote Boat
      </Typography>
      <Controller/>
    </Container>
  );
}

export default App;
