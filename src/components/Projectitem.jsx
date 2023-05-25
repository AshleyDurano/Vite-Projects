import React from 'react'

const Projectitem = ({img,title}) => {
  return (
    <div className=''>         
          <h1 className='inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600 text-2xl m-5'>{title}</h1>
        <img src={img} />
    </div>
  )
}

export default Projectitem
