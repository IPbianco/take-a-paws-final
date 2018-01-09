import React, { Component } from 'react';
import './App.css';
import DogList from './components/DogList.js'
import DogProfile from './components/DogProfile.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const DOGS = [
  { id: 1, name: 'Jackie', breed: 'German Shepherd', description: 'Best dog ever', image: 'german-shepherd.jpg' },
  { id: 2, name: 'Joey', breed: 'Spaniel', description: 'So lovable', image: 'spaniel.jpg' },
  { id: 3, name: 'Ice', breed: 'Dobermann', description: 'Loves to exercise', image: 'dobermann.jpg' }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={DogList} />
          <Route path="/dog/:dogId" component={DogProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
