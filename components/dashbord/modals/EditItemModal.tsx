import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { Item } from '@prisma/client'
import axios from "axios";

function EditItemModal({item} : any) {
  
  const [name, setname] = useState(item?.name)
  const [price, setprice] = useState(item?.price)
  const [type, settype] = useState(item?.type)
  const [quantity, setquantity] = useState(item?.quantity)


  

  const handleSubmit = () => {
    axios.post("/api/db/NewItem", {
      name,price,type,quantity
    })
  }
  return (
    <div>
      {/* The button to open modal */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-edit" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border-black border-4 rounded-2xl ">
          <h3 className="font-bold text-lg">
            Edit Item
          </h3>
          <div className="py-4 flex flex-col">
          <label htmlFor="my-modal-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <p className="py-1 mx-5">Item Name</p>
            <span ><Input type="text" value={name} onChange={(e:any)=>{setname(e.target.value)}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Price (per unit)</p>
            <span ><Input type="text" value={price} onChange={(e:any)=>{setprice(parseFloat(e.target.value))}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Type</p>
            <span ><Input type="text" value={type} onChange={(e:any)=>{settype(e.target.value)}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          <p className="py-1 mx-5">Quantity</p>
            <span ><Input type="text" value={quantity} onChange={(e:any)=>{setquantity(parseFloat(e.target.value))}} placeholder="Type here" className="input input-bordered border-black w-full max-w-xs" /></span>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-edit" className="btn" onClick={handleSubmit}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItemModal;
