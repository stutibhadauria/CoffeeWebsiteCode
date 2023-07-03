import React from 'react'

function Contact() {
  return (
    <>
    <br/><br/><br/><br/><br/><br/>
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

export default Contact