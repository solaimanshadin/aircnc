import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import HomeDetails from './pages/HomeDetails';
import Header2 from './componets/Header/Header2';
import Booking from './pages/Booking';

function App() {
  let page = typeof window !== 'undefined' && window.location.pathname;
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search-result">
            <SearchResult/>
          </Route>
          <Route path="/home/:key">
            <HomeDetails/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

      </Switch>

    </Router>
  );
}

export default App;
