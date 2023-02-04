import React from "react";
import { useState } from "react";
import Input from "../../Input";
import axios from "axios";

function AddItemModal({businessId}:any) {
  const [name, setname] = useState("")
  const [price, setprice] = useState(0)
  const [type, settype] = useState("")
  const [quantity, setquantity] = useState(0)



  const handleSubmit = () => {
    axios.post("/api/db/NewItem", {
      name,price,type,quantity,businessId
    })
  }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-add" className="btn">
        Add item
      </label>


      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-add" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border-black border-4 rounded-2xl ">
          <h3 className="font-bold text-lg">
            Add new item
          </h3>
        
          <div className="py-4 flex flex-col">
          <label htmlFor="my-modal-add" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <p className="py-1 mx-5">Item Name</p>
            <span ><Input type="text" onChange={(e:any)=>{setname(e.target.value)}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Price (per unit)</p>
            <span ><Input type="text" onChange={(e:any)=>{setprice(parseFloat(e.target.value))}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Type</p>
            <span ><Input type="text" onChange={(e:any)=>{settype(e.target.value)}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Quantity</p>
            <span ><Input type="text" onChange={(e:any)=>{setquantity(parseFloat(e.target.value))}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-add" className="btn" onClick={handleSubmit}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemModal;
