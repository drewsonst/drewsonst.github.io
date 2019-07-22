import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import News from './pages/News'
import Test from './pages/Test'
import Navbar from './pages/CustomNavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/test" component={Test} />
        </div>
      </Router >
    );
  }
}

export default App;