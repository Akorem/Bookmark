import React from 'react'

const Five = () => {
  return (
    <div className='Alll'>
        <div className='txxtt'>
            <h1 className='headie'>Frequently Asked Questions</h1>
            <p className='ppp'>Here are some of our FAQs. If you have any other questions you'd like answered, Please feel free to email us.</p>
        </div>
        <div className="accordion" id="accordionExample">
           <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"   aria-expanded="true" aria-controls="collapseOne">
                        What is Bookmark
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"   data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How can I request a new Browser
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia veritatis nihil at est corporis cumque unde aliquam quo deserunt, soluta dolorem autem quaerat sint quos architecto nobis mollitia. Voluptatum eius reiciendis odit ut unde nemo accusamus, inventore cupiditate quis officia id totam, sed, quo sapiente pariatur? Sequi, soluta voluptatem? Quidem cupiditate porro maxime optio nam a dolorem nisi deleniti debitis sed maiores quibusdam ipsam dolores iste distinctio, aliquid velit!
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Is there a mobile app?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptate odio ratione tenetur in voluptates impedit, soluta eum ad repellendus libero totam voluptas omnis quas recusandae molestiae officiis minima similique. Ab consequatur iusto neque esse laudantium dolorum quam cumque at, nam odio nobis culpa aliquam distinctio labore temporibus soluta magnam eligendi corrupti, ipsam ipsa voluptatibus eum pariatur voluptate. Odit perspiciatis ratione veniam expedita necessitatibus iusto, ducimus voluptatum impedit dolorem sequi.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"    aria-expanded="false" aria-controls="collapseFour">
                    What about other Chromium browsers?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea velit consequatur accusamus illo amet qui quo sunt vel iure porro, distinctio laboriosam non, ipsum, tempore est! Quam maiores veniam eligendi laboriosam magni. Voluptates et laborum minus enim. Facere unde saepe, maiores ducimus doloribus voluptatum quis. Architecto labore ipsum dolor voluptate incidunt eum optio at, rerum impedit nostrum accusamus dolorum consequatur facere nisi, iste corporis a quae praesentium eligendi velit ut.
                    </div>
                </div>
            </div>
       </div>
       <button className="btn button" id='info2'>More Info</button>
    </div>
  )
}

export default Five