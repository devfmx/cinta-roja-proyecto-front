import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Users from './components/user/Users';
import Comments from './components/comments/Comments';
import Navbar from './components/home/navbar/Navbar'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/comment/:idPost" component={Comments}/>
            <Route exact path="/user" component={Users}/>
          </main>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
