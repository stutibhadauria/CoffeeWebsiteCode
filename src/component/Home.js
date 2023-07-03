import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        {/* slider */}
    <div class="carousel slide" data-bs-ride="carousel" id="a">
 
 <div class="carousel-indicators">
  <button type="button" data-bs-target="#a" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#a" data-bs-slide-to="1" ></button>
  <button type="button" data-bs-target="#a" data-bs-slide-to="2" ></button>
 </div>


 <div class="carousel-inner">
 <div class="carousel-item active" data-bs-interval="4000">

   <img src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-100" alt="..."/>
   <div class="col-md-6 text-start carousel-caption pt-4">
   </div>
   <div class="carousel-caption">
   </div>
 </div>

 <div class="carousel-item" data-bs-interval="4000">

   <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-100" alt="..."/>
 </div>

 <div class="carousel-item" data-bs-interval="4000">

   <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-100" alt="..."/>
 </div>
 </div>
<button class="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>

</button>
<button class="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
 
</button>
    </div>

    {/* about */}
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

{/* gallery */}
    <section id="gallery">
        <div className='container-fluid'>
          <div className='container'>
            <div className='row r'>
              <h1>Our Gallery</h1>
              <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an <br/>unknown printer took a galley of type and scra make a type specimen book. It has</p>
              <div className='row'>
                <div className='col-md-4 img'>
                  <img src='https://images.pexels.com/photos/3230010/pexels-photo-3230010.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/3491211/pexels-photo-3491211.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/8641247/pexels-photo-8641247.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4 img'>
                  <img src='https://images.pexels.com/photos/7400278/pexels-photo-7400278.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/15379279/pexels-photo-15379279/free-photo-of-coffee-and-dessert-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/8100531/pexels-photo-8100531.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4 img'>
                  <img src='https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/377903/pexels-photo-377903.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='col-md-4 img'>
                <img src='https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

{/* services */}
<section id='services'>
  <div className='contanier-fluid ser'>
    <div className='container'>
      <div className='row'>
        <h1 className='text-white text-center'>SERVICES</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
            <center><img src="https://cdn1.iconfinder.com/data/icons/rcons-basic-work-and-office/16/kitchen_restaurant_coffee_food_drink_tea_cup-256.png"/></center>
            <h3 className='text-white'>Original coffee</h3>
            <p className='text-white'>Exerci tation ullamcorper suscipit lobortis<br/> nisl ut aliquip ex ea</p>
            <center><button className='btn btn-warning'>Read more..</button></center>
          </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
         <center><img src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/coffee-cup-tray-256.png"/></center>
            <h3 className='text-white'>20 Coffee Flavors</h3>
            <p className='text-white'>Exerci tation ullamcorper suscipit lobortis<br/> nisl ut aliquip ex ea</p>
            <center><button className='btn btn-warning'>Read more..</button></center>
          </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
         <center> <img src="https://cdn1.iconfinder.com/data/icons/andriod-app/32/coffee_cup-256.png"/></center>
            <h3 className='text-white'>Pleasant Abient</h3>
            <p className='text-white'>Exerci tation ullamcorper suscipit lobortis<br/> nisl ut aliquip ex ea</p>
            <center><button className='btn btn-warning'>Read more..</button></center>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
testimonial */}
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

  {/* contact */}
  <section id="contact">
      <div className='container-fluid form'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h1>Any issue<br/> Please <b className='bold'>Contact</b> it.</h1>
              <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-64.png"/>
            </div>
            <div className='col-md-7'>
              <form action='' method='post'>
              <div class="form-group">
                <input class="form-control" type="text" name="name" required placeholder="Enter Your Full Name" />
                  <span class="Error"></span>
              </div>
              <div class="form-group">
                <input class="form-control" type="text" name="email" required placeholder="Enter Your email" />
                  <span class="Error"></span>
              </div>
              <div class="form-group">
                <input class="form-control" type="text" name="phone" required placeholder="Enter Your phone" />
                  <span class="Error"></span>
              </div>
              <div class="form-group">
                <textarea className='form-control' type="text" placeholder='message'></textarea>
                  <span class="Error"></span>
              </div>
              <button className='btn btn-secondary'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </section>
        </>
    )
}

export default Home