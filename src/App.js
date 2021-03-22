import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Table from './DetailsTable';
import View from './ViewPage';
import Images from './Images';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Route path="/" exact>
    <Images/>
    <Table/>
    </Route>
    <Route path="/view" exact>
    <Images/>
    <View />
    </Route>
    </Router>
    
     
    </>
  );
}

export default App;
