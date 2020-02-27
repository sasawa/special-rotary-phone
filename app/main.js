import React from 'react';
import {
    Scene,
    Router,
    Stack,
  } from 'react-native-router-flux';
import Admin from './Admin';


const Main = () => (
    <Router>
      <Stack key="root">
        <Scene key="Admin" component={Admin} hideNavBar/>
      </Stack>
    </Router>
);

export default Main;