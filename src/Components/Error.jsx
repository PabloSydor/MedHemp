// import { useState, useEffect } from "react"


function Error({children}) {
  return (
    <div className='bg-red-400 p-2 rounded-md mb-3'>
        <p className='text-white text-center text-sm'>{children}</p>
    </div>
  )
}

export default Error
