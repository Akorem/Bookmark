import React from 'react'
import img6 from './images/bg-dots.svg'
import img7 from './images/logo-chrome.svg'
import img8 from './images/logo-firefox.svg'
import img9 from './images/logo-opera.svg'
import './All.css'

const Four = () => {
  return (
    <div>
        <section id="download" className="download container-fluid">
            <h2 className="download-title">Download the extension</h2>
            <p className="download-text px-4">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a
            favourite you’d like us to prioritize.</p>
            {/* <!-- download cards --> */}
            <div className="download-cards-container d-md-flex justify-content-center">
                <div className="download-card card card-1 text-center mx-3">
                    <img className="card-img-top mx-auto" src={img7} alt=""/>
                    <h5 className="card-title">Add to Chrome</h5>
                    <p className="card-text">Minimum version 62</p>
                    <img className="card-img" src={img6} alt=""/>
                    <button className="btn button card-button">Add & Install Extension</button>
                </div>
                <div className="download-card card card-2 text-center mx-3 align-self-md-center">
                    <img className="card-img-top mx-auto" src={img8} alt=""/>
                    <h5 className="card-title">Add to Firefox</h5>
                    <p className="card-text">Minimum version 55</p>
                    <img className="card-img" src={img6} alt=""/>
                    <button className="btn button card-button">Add & Install Extension</button>
                </div>
                <div className="download-card card card-3 text-center mx-3 align-self-md-end">
                    <img className="card-img-top mx-auto" src={img9} alt=""/>
                    <h5 className="card-title">Add to Opera</h5>
                    <p className="card-text">Minimum version 46</p>
                    <img className="card-img" src={img6} alt=""/>
                    <button className="btn button card-button">Add & Install Extension</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Four