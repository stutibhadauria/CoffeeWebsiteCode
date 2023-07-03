import React from 'react'

function Login() {
  return (
    <>
    <div className='container-fluid login'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 l'>
                <h1>Login form</h1>
                <form>
            <div class="mb-3 ">
            <input type="text" name="" placeholder="frist name" required class="form-control"/>
            </div>
            <div class="mb-3">
            <input type="text" name="" placeholder="last name" required class="form-control"/>
            </div>
            <div class="mb-3">
            <input type="Email" name="" placeholder="Email" required class="form-control"/>
            </div>
            <div class="mb-3">
            <input type="text" name="" placeholder="password" required class="form-control"/>
            </div>
            <div class="mb-3">
            <input type="text" name="" placeholder="confirm password" required class="form-control"/>
            </div>
            <a href=" " class="btn btn-secondary">Submit</a>
            </form>
            </div>
            <div className='col-md-4'></div>
            </div>
        </div>
    </div><br/><br/>
    </>
  )
}

export default Login