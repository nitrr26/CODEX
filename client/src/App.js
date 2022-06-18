import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Error404 from './pages/error404';

import { initialSatate, reducer } from '../src/reducer/UseReducer';


export const UserContext = createContext();

const Routing = () => {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error404 />} />
    </Routes>

  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialSatate);
  console.log(reducer);
  return (
    <>
      < UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </ UserContext.Provider>
    </>
  )
}

export default App;
