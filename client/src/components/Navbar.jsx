import React , {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from '../images/logo1.jpg';

import { UserContext } from '../App';

const Navbar = () => {

  const {state, dispatch} = useContext(UserContext);
  console.log(UserContext);
  const RenderMenu = () => {
    if(state){
      return (
        <>
         <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/" activeClassName='active'>Home</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/about" activeClassName='active'>About</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/contact" activeClassName='active'>Contact</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/logout" activeClassName='active'>Logout</NavLink>
              </li>
        </>
      )
    }
    else{
      return(
        <>
         <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/" activeClassName='active'>Home</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/about" activeClassName='active'>About</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/contact" activeClassName='active'>Contact</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/login" activeClassName='active'>Login</NavLink>
              </li>
              <li className='ml-5 nav-item'>
                <NavLink className="nav-link" to="/register" activeClassName='active'>Register</NavLink>
              </li>
          
        </>
      )
    }
  }

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="/">Navbar</a> */}
          <NavLink className="navbar-brand" to='/'>Logo</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

             <RenderMenu/>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar;