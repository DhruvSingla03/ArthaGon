

import { UserContext } from '@/context/role'
import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

function BusinessLanding() {
  
  useEffect(() => {
    Cookies.set('type', 'business', { expires: 7 });
    
    
  }, [])
  
  return (
    <div>{Cookies.get('type')}
    
    </div>
  )
}

export default BusinessLanding