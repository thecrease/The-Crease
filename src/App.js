import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllRoutes from './routes/allRoutes';
import 'antd/dist/antd.css';
function App() {
  return (
    <Switch>
      <Route component={AllRoutes} />
    </Switch>
  );
}

export default App;
