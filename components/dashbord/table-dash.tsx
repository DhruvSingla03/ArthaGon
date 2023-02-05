import React from 'react'
import Container from '@/components/container'
import Ratings from './ratings'
import {FiEdit} from "react-icons/fi"
import { Item } from '@prisma/client'

function ItemTable({ items,ChooseItem }: any) {
  const itemsArray:Item[] = items
  return (
    <Container className="flex items-center flex-col w-full mt-3 ">
      <div className="overflow-x-auto border-black border-2 rounded-2xl w-full">
        <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
            
            {
              itemsArray.map((item: Item , index) => {
                return (<tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{ item.quantity}</td>
                <td><Ratings /></td>
                  <td><label htmlFor="my-modal-edit" className='btn text-xl' onClick={() => {
                    ChooseItem(item.id);
                    console.log("yaha kuch hua")
                  }}>
                  <FiEdit />
                </label></td>

              </tr>)
              })
           }
            
      </tbody>
      </table>
     </div>

      <div className="btn-group border-black border-2 rounded-2xl p-1 mt-4">
        <button className="btn">«</button>
        <button className="btn">Page 22</button>
        <button className="btn">»</button>
      </div>
    </Container>
        )
}

export default ItemTable