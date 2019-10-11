import React from 'react';
import Container from '@material-ui/core/Container';
import Boat from './components/Boat';
import './App.css';
import { Typography } from '@material-ui/core';



function App() {
  return (
    <Container>
      <Typography variant='h1' gutterBottom>
        Remote Boat
      </Typography>
      <Boat />
    </Container>
  );
}

export default App;
