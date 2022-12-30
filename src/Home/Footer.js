import React from 'react';


const Footer = () => {
  return (
    <div>
        <div className='container-fluid g-0'>
        <div className='eng_img pt-5'>
            <div className='row g-0'>
                <div className='col-12'>
      <div className='container g-0'>
        <div className='row g-0'>
            <div className='col-lg-6 col-12'>
                <div className='footer_input_box ps-lg-3 ps-md-5 ms-lg-2 pe-lg-3 pt-3 mb-5 me-lg-5 mt-5'>
                    <h1 className='subscribe_note pt-lg-2 ps-lg-3'>Subscribe And Follow Us</h1>
                    <p className='text-center fs-5 subscribe_p pt-3 pb-3'>Be part of the story and follow us on Twitter via <a href="#">@name</a> and subscribe to the newsletter for news and updates about our workshops</p>
                    <input placeholder='Email' className='mt-3 mb-4' ></input>
                    <button type="button" className='mb-4 mt-3'>Subscribe</button>
                    <p className='text-center pt-3'>Developed by : Usman Saleem</p>
                </div>
            </div>
            <div className='col-lg-6 col-12'>

            </div>
        </div>
        </div>
      </div>
                </div>
            </div>
        </div>
      <div className='footer_note d-flex justify-content-center'>
        <p className='mb-0'>Copyright &copy; All Rights reserved by <span>PlomX</span></p>
      </div>
    </div>
  )
}

export default Footer
