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
    const poza = document.getElementById('poza').value;

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        password,
        nickname,
        poza
      });
      if (response.data.success) {
      } else {
        setError(response.data.error);
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
    <input type='text' placeholder='Ussername' />
  </form>
</div>

<div className='Parola'>
  <form>
    <input type='text' placeholder='Parola' />
  </form>
</div>
        </div>
        <div className='NicknamePoza'>
        <div className='Nickname'>
  <form>
    <input type='text' placeholder='Nickname' />
  </form>
</div>

<div className='Poza'>
  <form>
    <input type='file' placeholder='Poza' />
  </form>
</div>
        </div>

    </div>
  )
}

export default Singup