import React from 'react'
import Ratings from '../dashbord/ratings'

function Card() {
  return (
    <div>
      <div className="card border-black border-2 border-b-8 border-r-4 rounded-2xl w-96 bg-neutral shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Item Name</h2>
            <p>Argon walks into a bar. The bartender says "Sorry we don't serve noble gasses here" Argon doesn't react</p>
            <div className="card-actions justify-end">
            <Ratings/>
            <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card