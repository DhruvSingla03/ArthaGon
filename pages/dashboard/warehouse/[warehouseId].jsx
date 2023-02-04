import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function warehouseId(props) {
    const router = useRouter()
    const [inventory, setinventory] = useState([])
    const id = router.query.warehouseId
   
    
    const getInventory = async (id) => {
        
        const result = await fetch("/api/db/warehouse/getinven",{body:{warehouseid:id}})
        console.log(result);
    }
    useEffect(() => {

        getInventory(id)

    }, [])











    
    return (
        <div>bitch</div>
    )
   
}

export default warehouseId