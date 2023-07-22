import React, { useState } from 'react';
import axios from 'axios';
import Poza from '../Assets/pozarct3.png';
import '../Styles/Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await axios.post('http://localhost:5000/login_request', {
        username,
        password
      });
      if (response.data['login_result']==='SUCCESS') {
        
        setIsLoggedIn(true);
      }
      else if(response.data['login_result']==='FAILED USER/PSWRD'){
        setError(response.data['login_result']);
      }
      else {
        setError(response.data['login_result']);
      }
    } catch (error) {
      console.log(error);
      setError('The account is not created.');
    }
  };

  const handleLinkClick = () => {
    if (!isLoggedIn) {
      handleLogin();
    }
  };

  return (
    <div className='PatratHome'>
      <div className='ParteaStanga'>
        <h1>Login</h1>
        <div className="form-group">
          <input type="text" id="username" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-group">
          <input type="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <Link
          to={isLoggedIn ? '/chatroom' : ''}
          className='LinkTrimitereChat hoverLink'
          onClick={handleLinkClick}
        >
          Log in
        </Link>
        {error && <p>{error}</p>}
        <h2 className='h2nume'>Don't Have an Account?</h2>
        <Link to="/singup" id='buton2' className='CustonSinguplink'>Sign up</Link>
      </div>
      <div className='ParteaDreapta'>
        <img src={Poza} alt='poza' />
      </div>
    </div>
  );
}

export default Homepage;
