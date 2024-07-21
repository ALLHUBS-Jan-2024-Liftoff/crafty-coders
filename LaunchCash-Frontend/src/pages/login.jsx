import React from 'react'
//import './assets/login'

//Code for Login page
export const Login = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required/>
        </div>

        {/* Links do not work yet. */}
        <div className='remember-forgot'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
    
  )
}

export default Login;