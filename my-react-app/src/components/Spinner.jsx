import React from 'react'

const Spinner = () => {
  return (
    <div  className="flex justify-center items-center min-h-[80vh]">
        <div className='w-12 h-12 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin'></div>
    </div>
  )
}

export default Spinner