import React from 'react'
import Projectitem from './Projectitem'
import project1 from '../assets/sample1.jpg'
import project2 from '../assets/sample2.jpg'
import project3 from '../assets/sample3.jpg'
const Projects = () => {
  return (
    <div className='h-[500px] m-auto absolute w-full mt-220x'>
    <div id='projects' className='max-w-[800px] pb-20 m-auto flex flex-wrap gap-2 '>
    <h1 className='text-white font-bold align-center font-bebas mb-10 m-auto'>sample</h1>
      <div className='grid gap-72 grid-cols-1 justify-center'>
        <Projectitem img={project1} title='item1'/>
        
        <Projectitem img={project2} title='item2'/>
  
        <Projectitem img={project3} title='item3'/>
 
        <Projectitem img={project3} title='item3'/>
        
      </div>
    </div>
    </div>
  )
}

export default Projects
