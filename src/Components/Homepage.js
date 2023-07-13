import React from 'react'
import Poza from '../Assets/pozarct3.png'
import '../Styles/Homepage.css'
function Homepage() {
  return (
    <div className='PatratHome'>
    <div className='ParteaStanga'>
    <h1>Login</h1>
    <div class="form-group">
  <input type="text" id="username" required />
  <label for="username">Username</label>
</div>
<div class="form-group">
  <input type="password" id="password" required />
  <label for="password">Password</label>
</div>
    <button id='buton1'>Log in</button>
    <h2 className='h2nume'>Don't Have an Account?</h2>
    <button id='buton2'>Sing up</button>
    </div>
    <div className='ParteaDreapta'>
    <img src={Poza} alt='poza'></img>
    </div>
    </div>
  )
}

export default Homepage