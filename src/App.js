import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


// Components

import Header from './Assets/components/HeaderComponents/header.js';
import Footer from './Assets/components/footerComponents/footer.js';
import Home from './Assets/components/pages/home.js';
import Articles from './Assets/components/pages/articles.js';
import About from './Assets/components/pages/about.js';

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/articles' component={Articles}/>
          <Route exact path='/about' component={About}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
