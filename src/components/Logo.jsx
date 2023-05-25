import React from 'react'

const Logo = ({img}) => {
  return (
    <div className="logo">
        <img src={img} alt="logo" className='w-[120px]'/>
    </div>
  )
}

export default Logo
