import React, { useState } from 'react'
import img3 from './images/illustration-features-tab-1.svg'
import img4 from './images/illustration-features-tab-2.svg'
import img5 from './images/illustration-features-tab-3.svg'
import './App.css'

const Three = () => {
    
    let [text, setText] = useState('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')

    function txtchange() {
        
        if(text === 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'){
            console.log(text);
           setText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea velit consequatur accusamus illo amet qui quo sunt vel iure porro, distinctio laboriosam non, ipsum, tempore est! Quam maiores veniam eligendi laboriosam magni. Voluptates et laborum minus enim. Facere unde saepe, maiores ducimus doloribus voluptatum quis. Architecto labore ipsum dolor voluptate incidunt eum optio at, rerum impedit nostrum accusamus dolorum consequatur facere nisi, iste corporis a quae praesentium eligendi velit ut.')
        }
   
       
        
        else{
            setText('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
        }
   
       }



  return (
    <div>
        <section id="features" className="features container-fluid">
            <h2 className="features-title">Features</h2>
            <p className="features-text mx-4 mx-md-auto">Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your
            devices so you can access them on the go.</p>
            {/* <!-- features tab list --> */} 
            <div className="features-list list-group list-group-flush list-group-horizontal-md" id="features-list" role="tablist">
                <a className="features-list__item list-group-item list-group-item-action active" data-toggle="list" role="tab"
                href="#bookmarking">Simple Bookmarking</a>
                <a className="features-list__item list-group-item list-group-item-action" data-toggle="list" role="tab"
                href="#searching">Speedy Searching</a>
                <a className="features-list__item list-group-item list-group-item-action" data-toggle="list" role="tab"
                href="#sharing">Easy Sharing</a>
            </div>
            {/* <!-- features tab content --> */}
            <div className="features-content tab-content mx-3 mx-lg-5">
                <div className="features-content__tab tab-pane active" id="bookmarking" role="tabpanel">
                    <div className="features-content__img tab-1">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="features-content__text">
                        <h2>Bookmark in one click</h2>
                        <p>{text}</p>
                        <button onClick={txtchange} className="btn button" id='info1'>More Info</button>
                    </div>
                    
                </div>
                <div className="features-content__tab tab-pane" id="searching" role="tabpanel">
                   <div className="features-content__img tab-2">
                       <img src={img4} alt=""/>
                   </div>
                   <div className="features-content__text">
                   <h2>Intelligent search</h2>
                   <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of
                    your bookmarks.</p>
                    </div>
                </div>
                <div className="features-content__tab tab-pane" id="sharing" role="tabpanel">
                    <div className="features-content__img tab-3">
                        <img src={img5} alt=""/>
                    </div>
                    <div className="features-content__text">
                       <h2>Share your bookmarks</h2>
                       <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
                        click of a button.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Three