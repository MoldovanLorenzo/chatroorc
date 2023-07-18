import React, { useState,} from 'react';
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
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });
      if (response.data.success) {
        setIsLoggedIn(true);
      }
      else {
        setError(response.data.error);
      }
    } catch (error) {
      console.log(error);
      setError('The account is not created.');
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
        {isLoggedIn ? (
  <Link to="/chatroom" className='LinkTrimitereChat hoverLink'>Log in</Link>
) : (
  <button className='LinkTrimitereChat hoverLink' onClick={handleLogin}>Log in</button>
)}
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
