import React from 'react'
import "./Signin.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate=useNavigate();
  const handleSign=()=>
  {
    navigate("/")
  }

  return (
    <div className='login-card-container'>
      <div className='login-card'>
        {/* <div className='login-card-logo'>
          <img src='https://i.pinimg.com/736x/4f/df/bb/4fdfbbb1a48d9fa0d3ec9af6dfbafca1.jpg' alt='logo'></img>
        </div> */}
        <div className='login-card-header'>
          <h1>SignUp</h1>
          {/* <div>Please login to use platform</div> */}
        </div>
        <form className='login-card-form'>
          <div className='form-item'>
            <span className='form-item-icon material-symbols-rounded'></span>
            <input type='text' placeholder='Name' required autoFocus></input>
          </div>
          <div className='form-item'>
            <span className='form-item-icon material-symbols-rounded'></span>
            <input type='text' placeholder='Email' required autoFocus></input>
          </div>
          <div className='form-item'>
            <span className='form-item-icon material-symbols-rounded'></span>
            <input type='password' placeholder='Password' required></input>
          </div>
          <button type='submit' onClick={handleSign}>Login in</button>
        </form>
        <div className='login-card-footer'>Or Signup with</div>
        <div className='icons' >
        <GoogleIcon/>
        <FacebookOutlinedIcon/>
         <LinkedInIcon/>
        </div>
      </div>
    </div>
  )
}

export default Signin