import React from 'react';
import '../Styles/Singup.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <Link to="/" className='ButonoSingup' onClick={handleSignup}>Sign up</Link>
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
  );
}

export default Singup;
