import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Singup from '../Components/Singup'
import Chatroom from '../Components/Chatroom'
function Rute() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' Component={Homepage} />
            <Route path='/' Component={Singup}/>
            <Route path='/' Component={Chatroom}/> 
        </Routes>
    </Router>
  )
}

export default Rute