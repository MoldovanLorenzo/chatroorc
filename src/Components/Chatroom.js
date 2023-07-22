import React from 'react'
import '../Styles/Chatroom.css'
import { useState } from 'react';
import axios from 'axios';


function Chatroom() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-message', {
        message,
      });

      if (response.data.success) {
        setMessages((prevMessages) => [...prevMessages, message]);
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='PatratTot'>
      <div className='PatratRoomuridisponibile'>
      <div className='NumeChat'>chatROOM.</div>
      <div className='ScrisAvalabile'>Available Rooms:</div>
      <div className='RoomuriDisponibile'>
        <div className='NumeCamera'>Room1</div>
        <div className='PersoaneOnline'>Online ussers: </div>
      </div>
      </div>
    <div className='Patratchat'>
        <div className='TextNumePoza'>
 <div className='mesaj'>
 <div class="DivStanga">

</div>
<div class="DivDreapta">
  <div class="DivNickname">
  </div>
  <div class="DivMesaj">
  </div>
</div>
</div>
    </div>
        <div className='Formchat'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='input-text'
            name='input-text'
            placeholder='Mesaj...'
            value={message}
            onChange={handleChange}
          />
        </form>
        </div>
    </div>
    <div className='UseriIntrati'>
      <div className='ProfilButon'>
        <div className='Profil'>
          <div className='PozaProfil'></div>
          <div className='NumeProfil'>
            <div className='NicknameProfil'>Nickname</div>
          <div className='DivUssername'>Ussername</div>
          </div>
        </div>
          <div className='SetareProfil'>
            <button className='Butonas' ></button>
          </div>
        <div className='Useri'></div>
      </div>
      <div className='UseriOnline'>
        <div className='BaraScris'>Online ussers:</div>
        <div className='Usser1'>Usser1
        <div className='Status'></div>
        </div>
        <div className='Usser2'>Usser2
        <div className='Status2'></div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Chatroom