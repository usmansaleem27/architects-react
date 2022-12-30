import React from 'react'

const Rectbox = (props) => {
  return (
    <div>
      <div className="rect_box">
                    <div className="custom_ent_circles">
                        <h1 className="text-white d-flex align-items-center h-100 justify-content-center">{props.countB}</h1>
                    </div>
                    <p className="pt-5 pb-3">Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Magna fermentum iaculis eu non diam phasellus vestibulum. Et tortor consequat id porta nibh venenatis cras sed.</p>
                    <a className="cards_links pt-3">More</a>
      </div>
      </div>
  )
}

export default Rectbox
