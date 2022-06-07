import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Question } from '../typings'

function Question({ q, a }: Question) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(prevState => {
      return !prevState
    })
  }
  return (
    <div className='flex flex-col w-full'>
      {/* question */}
      <div className='text-white bg-[#303030]  w-full flex items-center justify-between 
      px-10 py-5 text-2xl cursor-pointer' style={isVisible ? { marginBottom: "0px" } : { marginBottom: "10px" }}
        onClick={toggleVisibility}>
        <p>{q}</p>
        <div className='text-white'>
          {
            isVisible ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> :

              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
          }
        </div>
      </div>
      {/* question */}

      {/* answer */}
      <div className={isVisible ? "bg-[#303030] mt-1 mb-3" : "bg-[#303030] hidden"}>
        <p className='text-2xl font-normal px-10 py-8'>{a}</p>
      </div>
      {/* answer */}

    </div>
  )
}

export default Question