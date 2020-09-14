import React from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import SignIn from './components/screens/SignIn'
import SignUp from './components/screens/SignUp'
import Profile from './components/screens/Profile'

function App() {
  return (
        <BrowserRouter>
        <NavBar/>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/signin'><SignIn /></Route>
        <Route exact path='/signup'><SignUp /></Route>
        <Route exact path='/profile'><Profile /></Route>
  
        </BrowserRouter>
   
  );
}

export default App;
