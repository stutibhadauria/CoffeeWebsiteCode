import React from 'react'

function Gallery() {
  return (
    <>
    <br/><br/><br/><br/>
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
    <br/><br/><br/><br/>
    </>
  )
}

export default Gallery