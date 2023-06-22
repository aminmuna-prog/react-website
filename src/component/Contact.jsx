import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const inputEvent = (event) =>{
      const {name, value} = event.target;

      setData((preVal) =>{
        return {
          ...preVal,
          [name]: value,
        }
      })
  }

  const formSubmit= (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}`
      )
  }
  return (
    <>
      <div className='my-5'>
         <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto">
            {/* form */}
            <form onSubmit={formSubmit}>
              {/* fullname */}
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">FullName</label>
                <input type="text" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="nameHelp"
                  name="fullname"
                  value = {data.fullname}
                  onChange={inputEvent}
                  placeholder='Enter Your Name'
                />
                
              </div>

               {/* phonenumber */}
               <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Your Number</label>
                  <input type="number" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name="phone"
                    value = {data.phone}
                    onChange={inputEvent}
                    placeholder='Your moblime Number'
                  />
                 
                </div>

                  {/* email */}
                  <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      name="email"
                      value = {data.email}
                      onChange={inputEvent}
                      />
                     
                  </div>

                 {/* message */}
                  <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea class="form-control"
                       id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value = {data.msg}
                      onChange={inputEvent}
                      ></textarea>
                  </div>
                  {/* submit btn */}
                  <button type="submit" class="btn btn-outline-primary">Submit</button>
              </form>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
