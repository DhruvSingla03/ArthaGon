import React from 'react'

function Ratings() {
  return (
    <div><div className="rating">
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-2" className="mask mask-star" />
    <input type="radio" name="rating-3" className="mask mask-star" />
    <input type="radio" name="rating-4" className="mask mask-star checked" />
    <input type="radio" name="rating-5" className="mask mask-star" />
  </div></div>
  )
}

export default Ratings