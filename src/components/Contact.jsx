import React from 'react'
import { TbBrandGmail } from 'react-icons/Tb'
const Contact = () => {
  return (
    <div className='h-[500px] m-auto absolute w-full mt-440x'>
    <div id='contact' className='max-w-[800px] pb-20 m-auto'>
        <h1 className='text-white font-bold font-bebas text-emerald-300 text-center mb-10'>Connect with me.</h1>
        <p className='w-[500px] m-auto text-center text-white '>I am seeking more experiences and knowledge continuosly, Feel free to connect with me via gmail <b>ashley.rodriguez@ctu.edu.ph</b> and for sure i would be thrilled to be working with you.</p>
   <a href=""> <TbBrandGmail size={50} className='border border-green-900 bg-white/20  text-white m-auto mt-10 w-20 px-5 rounded-[5px]'/></a>
    </div>
    </div>
  )
}

export default Contact
