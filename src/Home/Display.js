import React from 'react'
import DisplayImage from '../assets/images/Display_image.jpg'

const Display = () => {
  return (
    <div>
        <div className='display_here'>
      <div className='pt-lg-5'>
        <div className='img_size d-flex justify-content-center m-3'>
            <img src={DisplayImage} className="rounded-5"></img>
        </div>
        <div className='container g-0'>
            <div className='row g-0'>
       <div className='col-lg-7 col-12'>
       </div>
       <div className='col-lg-5 col-12 pb-5'>
            <div className='card border-0'>
                <div className='display_card p-4 m-3'>
                    <h1 className='card_display_h'>Full-Service Engineering</h1>
                    <p className='pe-3'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <button
                      type="button"
                      className="read_button pt-2 pb-2 ps-4 pe-4 rounded-2"
                    >
                      Read More
                    </button>
                </div>
            </div>
                </div>
            </div>
           
       </div>
      </div>
    </div>
    </div>
  )
}

export default Display
