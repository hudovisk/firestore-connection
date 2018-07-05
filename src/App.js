import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { firebase, firestore } from "./firebase";

class App extends Component {

  componentDidMount() {
    firestore.collection("xyz").onSnapshot(snapshot => {
      console.log(snapshot);
    });
    // Create a reference to the special '.info/connected' path in
    // Realtime Database. This path returns `true` when connected
    // and `false` when disconnected.
    firebase.database().ref('.info/connected').on('value', function(snapshot) {
      // If we're not currently connected, don't do anything.
      console.log(".info/connected", snapshot.val());
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
