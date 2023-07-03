import React from 'react'

function About() {
  return (
    <>
    <br/><br/><br/><br/>
    <section id="about">
      <div className='contanier-fluid'>
        <div className='container'>
          <div className='row x'>
               <div className='col-md-6'>
                  <h1>ABOUT US</h1>
                  <p>Full cleaning and housekeeping services for companies and households.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                  <button className='btn btn-secondary'>Learn more..</button>
               </div>
               <div className='col-md-6'>
                <img src="https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            
               </div>
          </div>
        </div> 
      </div>
    </section>
    <br/><br/><br/><br/>
    </>
  )
}

export default About