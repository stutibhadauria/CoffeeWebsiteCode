import React from 'react'

function Textimonial() {
  return (
    <>
    <br/><br/><br/><br/>
    <section id="textmonial">
    <div className="container">
      <div className="row">
                <div className="col-md-12">
                  <div className="title-box text-center">
                    <h1 className='text'>Textimonial  </h1>
                    <p className='p'>Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>
                    
                  </div>
                </div>
            </div>
            <div id="carouselExampleNew" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to="2" aria-label="Slide 3"></button> 
                  </div>
                <div className="carousel-inner py-5 text-center">
                  <div className="carousel-item active">
                    <div className="col-md-6 offset-md-3 mt-4">
                        <div className="testimonial-image">
                            <img src="https://app.firstfiddle.in/images/ff_meet_team/B.R.-Sachdeva.jpg" className="img-fluid rounded-circle border border-4 border-danger"/>
                        </div>
                        <blockquote className="blockquote">
                            <p className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <figure className="col-md-6 offset-md-3 mt-4">
                        <div className="testimonial-image">
                            <img src="https://app.firstfiddle.in/images/ff_meet_team/Sagar-Bajaj.jpg" className="img-fluid rounded-circle border border-4 border-danger"/>
                        </div>
                        <blockquote className="blockquote">
                            <p className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
                    </figure>
                  </div> 
                  <div className="carousel-item">
                    <figure className="col-md-6 offset-md-3 mt-4">
                        <div className="testimonial-image">
                            <img src="https://app.firstfiddle.in/images/ff_meet_team/vibhutiPR.jpg" className="img-fluid rounded-circle border border-4 border-danger"/>
                        </div>
                        <blockquote className="blockquote">
                            <p className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
                    </figure>
                  </div>
                </div> 
              </div>
    </div>
  </section>
  <br/><br/><br/><br/>
    </>
  )
}

export default Textimonial