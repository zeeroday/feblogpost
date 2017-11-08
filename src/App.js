import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


// Components

import Header from './assets/components/HeaderComponents/header.js';
import Footer from './assets/components/footerComponents/footer.js';
import Home from './assets/components/pages/home.js';
import Articles from './assets/components/pages/articles.js';
import About from './assets/components/pages/about.js';
import SignUp from './assets/components/pages/signup.js';

// includes
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/articles' component={Articles}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/signup' component={SignUp}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
