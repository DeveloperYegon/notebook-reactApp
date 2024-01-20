import React from 'react'

function Header() {
  return (
    <div className="header">
    {/* <nav className='header'> */}
        <div className='logoside'>
            <h1 className="title">NOTES</h1>
        </div>
        <div className='menu-links'>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
        </div>
        <div className='toggle'>
                <button class="nav-toggle">
                    <i class="fa-solid fa-bars"></i>
                </button>
        </div>

  {/* </nav> */}
     </div>
  );
}

export default Header