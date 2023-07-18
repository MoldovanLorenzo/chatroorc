import React from 'react';
import Homepage from './Components/Homepage';
import Singup from './Components/Singup';
import Chatroom from './Components/Chatroom';
import { Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="singup" element={<Singup />}/>
      <Route path="chatroom" element={<Chatroom />} />
    </Routes>
    
  );
}

export default App;
