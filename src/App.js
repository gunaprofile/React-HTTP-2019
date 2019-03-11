import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter basename="/my-app">
        <div>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
