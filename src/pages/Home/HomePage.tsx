import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import StatusNotification from '../../components/notification/StatusNotification'

function HomePage() {
  return (
    <div className='w-full h-screen bg-white'>
        <Navbar />
        <div className=''>
            <StatusNotification message="Zal açıqdır!" status="open" />
        </div>
    </div>
  )
}

export default HomePage