import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header flex bg-blue-50 items-center'>
      <div className='flex-1'>
        <button className='p-3'><FaBars /></button>
      </div>
      <div className='flex-1'>
        <p className='text-center uppercase text-black'>Hóa vàng online</p>
      </div>
      <div className='flex flex-1 justify-end'>
        <button className='p-3 ml-6'>Submit</button>
      </div>
    </div>
  )
}

export default Header