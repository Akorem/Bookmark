import React from 'react'
import img1 from './images/logo-bookmark.svg'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={img1} alt="" className='logoo'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id='navtxt'>
                        <li className="nav-item">
                          <a className="nav-link" href="#">FEATURES</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">PRICING</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">CONTACT</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">LOGIN</a>
                        </li>
                   </ul>
               </div>
            </div>
       </nav>
    </div>
  )
}

export default Nav