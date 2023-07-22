import React from 'react';
import '../Styles/Singup.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Imga from '../Assets/pozasingup.png';

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
      if (response.data['signup_result']==='SUCCESS') {
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
      <div className='PatratPoza'>
      <img src={Imga} alt='poza' className='ImgSgn' />
      </div>
      <div className='PatratDate'>
        <h1 className='Titlu'>Create An Account</h1>
      <div className='UssernameParola'>
        <div className='Ussername'>
  <form>
    <input type='text' placeholder='Ussername' />
  </form>
</div>

<div className='Parola'>
  <form>
    <input type='text' placeholder='Password' />
  </form>
</div>
        </div>
        <div className='NicknamePoza'>
        <div className='Nickname'>
  <form>
    <input type='text' placeholder='Nickname' />
  </form>
</div>
</div>
<Link to="/" className='ButonoSingup' onClick={handleSignup}>Sing up</Link>
  </div>
  
      </div>
  );
}

export default Singup;
