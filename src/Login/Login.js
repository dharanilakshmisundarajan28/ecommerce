import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
// import Props2 from './Props2'


const Login = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate("/Home")
  }
  const handleHome1=()=>{
    navigate("/Signin")
  }
  return (
    <div className='login-card-container'>
      <div className='login-card'>
        <div className='login-card-header'>
          <h1>Login In</h1>
          <div>Welcome to BrandName</div>
        </div>
        <form className='login-card-form'>
          <div className='form-item'>
            <span className='form-item-icon material-symbols-rounded'></span>
            <input type='text' placeholder='Enter Email' required autoFocus></input>
          </div>
          <div className='form-item'>
            <span className='form-item-icon material-symbols-rounded'></span>
            <input type='password' placeholder='Enter Password' required></input>
          </div>
          <div className='form-item-other'>
            <div className='checkbox'>
              <input type='checkbox' id='remeberMeCheckbox'></input>
              <label for='rememberMeCheckbox'>Remember me</label>
            </div>
            <a href='#'>I forget my password!</a>
          </div>
          <button type='submit' onClick={handleHome}>Login In</button>
        </form>
        <div className='login-card-footer'>Dont have an Account?<a href='#' onClick={handleHome1}>Create account</a>.</div>
      </div>
     
    </div>
  )
}

export default Login