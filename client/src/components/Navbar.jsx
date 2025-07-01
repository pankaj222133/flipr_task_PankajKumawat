import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navB'>
        <div className="left">
            <img src="/images/logo.svg" alt="" />
        </div>
        <div className="right">
            <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>ABOUT PROJECTS</li>
                <li>CLIENTS</li>
            </ul>
            <button> CONTACT </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
