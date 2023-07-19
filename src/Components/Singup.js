import React from 'react'
import'../Styles/Singup.css'
import { useState } from 'react';
import axios from 'axios';


function Singup() {
  const [error, setError] = useState('');

  const handleSignup = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const nickname = document.getElementById('nickname').value;
    

    try {
      const response = await axios.post('http://localhost:5000/signup_request', {
        username,
        password,
        nickname
      });
      if (response.data['signup_result']=='SUCCESS') {
             //Aici fa redirect la homepage  
      } else {
        setError(response.data['signup_result']);
      }
    } catch (error) {
      console.log(error);
      setError('Error.');
    }
  };
  return (
    <div className='PatratSingup'>
    <button className='ButonoSingup' onClick={handleSignup}>Sing up</button>
        <div className='UssernameParola'>
        <div className='Ussername'>
  <form>
    <input type='text' placeholder='Ussername' id='username' />
  </form>
</div>

<div className='Parola'>
  <form>
    <input type='text' placeholder='Parola' id='password'/>
  </form>
</div>
        </div>
        <div className='NicknamePoza'>
        <div className='Nickname'>
  <form>
    <input type='text' placeholder='Nickname' id='nickname' />
  </form>
</div>

        </div>

    </div>
  )
}

export default Singup