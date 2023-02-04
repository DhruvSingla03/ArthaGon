import React from 'react'

function Ratings() {
  return (
    <div><div className="rating">
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" checked />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" />
  </div></div>
  )
}

export default Ratings