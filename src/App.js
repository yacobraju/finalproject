import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/login';
import Registration from './components/registration';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home1 from './components/home1';
import Payment from './components/payment';

class App extends Component {
  state = { isloggedIn: false };
  setLogin = status => {
    this.setState({ isloggedIn: status });
  };
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
              <ToastContainer/>
                <Switch>
                  
                    <Route exact path="/" component={Home1}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    
                    <Route
            path="/login"
            render={props => (
              <Login
                setLogin={this.setLogin}
                isloggedIn={this.state.isloggedIn}
                {...props}
              />
            )}
          />
                    <Route path='/registration' component={Registration}/>
                    <Route path='/home1' component={Home1}/>
                    <Route path='/payment' component={Payment}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;