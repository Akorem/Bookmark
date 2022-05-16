import React from 'react'
import img2 from './images/illustration-hero.svg'
import './All.css'

const Two = () => {
  return (
    <div>
        <section className="hero container-fluid mt-5 d-md-flex align-items-center">
        <div className="hero-img order-md-2">
           <img className="img-fluid" src={img2} alt=""/>
        </div>
        <div className="hero-content mx-lg-5">
            <h1 className="hero-title mx-2 mx-lg-5 my-4">A Simple Bookmark Manager</h1>
            <p className="hero-text mx-5">A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.</p>
            <div className="hero-buttons d-flex justify-content-center">
                <button className="btn button mr-2">Get it on Chrome</button>
                <button className="btn button light">Get it on Firefox</button>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Two