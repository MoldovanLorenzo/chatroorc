import React from 'react'
import'../Styles/Singup.css'    

function Singup() {
  return (
    <div className='PatratSingup'>
        <button className='ButonoSingup'>Sing up</button>
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