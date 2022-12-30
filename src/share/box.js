import React from 'react'

const Box = (props) => {
  return (
    <div>
        <div className="container-fluid g-0 text-center">
    <div className="numbers d-flex flex-md-row flex-wrap justify-content-center pt-lg-3 pb-lg-5 pb-3">
      <div className="rect">
        <p className='cards_text pt-4'>{props.heading}</p>
        <h1 className='cards_text_head text-white pt-2'>{props.number}</h1>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Box
