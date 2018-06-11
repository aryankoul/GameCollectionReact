import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink} from 'react-router-dom';
import  GamesPage from './GamesPage';
import GameFormPage from './GameFormPage';

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui three item menu">
              <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
              <NavLink className="item" activeClassName="active" exact to="/games">Games</NavLink>
              <NavLink className="item" activeClassName="active" exact to="/games/new">Add New Game</NavLink>
          </div>
          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/games/new" component={GameFormPage} />
          <Route exact path="/game/:_id" component={GameFormPage} />
      </div>
    );
  }
}

export default App;
