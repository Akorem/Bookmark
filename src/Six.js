import React from 'react'
import './All.css'
import img10 from './images/logo2.svg'
import img11 from './images/icon-facebook.svg'
import img12 from './images/icon-twitter.svg'



const Six = () => {
  return (
    <div className='End'>
        <section id="contact" className="contact-us container-fluid mb-0">
            <p className="contact-us__text">35,000+ already joined</p>
            <h5 className="contact-us__title mx-md-auto">Stay up-to-date with what we’re doing</h5>
            <form id="contact-form" className="contact-form" novalidate>
                <input className="contact-us__email form-control" type="email" id="email" aria-describedby="emailHelp"     placeholder="Enter your email address" required/>
                <div id="error" className="error">Whoops, make sure it's an email</div>
                <button id="contact-button" className="btn button contact" type="submit">Contact Us</button>
            </form>
        </section>

        <section className="footer container-fluid m-0 d-md-flex flex-wrap justify-content-md-around align-items-md-center px-md-5">
            <img className="footer-logo-img" src={img10} alt="Bookmark Logo"/>
            <nav className="footer-nav nav flex-column flex-md-row justify-content-md-center">
            <a className="nav-link" href="">Features</a>
            <a className="nav-link" href="">Pricing</a>
            <a className="nav-link" href="">Contact</a>
            </nav>
            <div className="footer-social d-flex justify-content-center">
                <a className="mr-5" href="">
                    <img className="footer-social__img" src={img11} alt="Facebook logo"/>
                </a>
                <a href="">
                    <img className="footer-social__img" src={img12} alt="Twitter Logo"/>
                </a>
            </div>
        </section>
  
    </div>
  )
}

export default Six