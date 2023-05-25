import React from 'react'
import About from './About'
import images from '../assets/ashley.jpg'
const AboutItem = ({year,title,duration,details,tech1,tech2,tech3,tech4,tech5,tech6}) => {
  return (
    <ol>
      <li>
      <img src={images} className='shrink-0 overflow-hidden outline outline-emerald-300 outline-offset-8 w-36 rounded-full m-6 ml-0 absolute'/>
      
        <p className='max-w-[800px] m-auto ml-52 flex flex-wrap gap-2'>
          <span className='inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600'>{year}</span>
          <span className='inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600'>{title}</span>
          <span className='inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600'>{duration}</span>
        <br></br>
        <span className='px-30 text-xl text-gray-200 font-bebos font-medium mb-5 mt-5'>{details}</span>
        
        
        <span className='inline-block px-2 bg-emerald-100/60 rounded-md font-semibold text-green-900 py-2'>My Tech Stacks:</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech1}</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech2}</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech3}</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech4}</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech5}</span>
        <span className='inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2'>{tech6}</span>
        </p>
      </li>
    </ol>
  )
}

export default AboutItem
