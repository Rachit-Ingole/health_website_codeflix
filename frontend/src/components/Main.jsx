import React from 'react'
import QuoteGenerator from './QuoteGenerator'
import MultipurposeComp from './MultipurposeComp'
import TaskManager from './TaskManager'

export default function Main() {
  return (
    <div className=' m-auto main-body grid grid-cols-1 grid-rows-3 justify-center sm:flex sm:justify-evenly gap-10 sm:gap-15 mt-[100px] p-10 sm:p-15 md:p-20'>
        <div className='grid grid-cols-1 grid-rows-3 gap-5 w-full sm:w-fit '>
            <QuoteGenerator/>
            <MultipurposeComp/>
        </div>
        
        <TaskManager/>

    </div>
  )
}
