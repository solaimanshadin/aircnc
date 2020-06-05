import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search-result">
            <SearchResult/>
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
