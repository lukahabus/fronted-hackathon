import logo from './logo.svg';
import './App.css';
import StackBuild from './Stack.js';
import * as React from 'react';
import Grid from '@mui/material/Grid';



function App() {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={3}>
        <StackBuild/>
      </Grid>    
    </Grid>
  );
}

export default App;
