import React, { Component } from 'react';

import Persons from './containers/Persons';
import Auth from './containers/Auth/Auth';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
