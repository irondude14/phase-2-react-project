import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import MovieList from './MovieList';
import About from './About';

export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/movielist'>
          <MovieList />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}
