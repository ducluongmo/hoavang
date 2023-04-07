import { AiFillCloseCircle } from "react-icons/ai";
import React from 'react'
import ban from '../../asset/image/ban.png'
import lu from '../../asset/image/lu2.png'
import ngua from '../../asset/image/ngua.png'
import ongcong from '../../asset/image/ongcongongtao.jpg'
import tien from '../../asset/image/tienvang.png'
import xe from '../../asset/image/XE.png'

const Content = () => {
  const btnOpen = () => {
    document.querySelector('.saple').classList.remove('hidden')
  }

  const btnClose = () => {
    document.querySelector('.saple').classList.add('hidden')
  }

  return (
    <div className='content relative'>
      <button className='btn top-52 px-1'>Hóa vàng</button>
      <button className='btn btn-saple top-64 px-2' onClick={btnOpen}>
        Sắp lễ
      </button>
      <div className='saple hidden absolute bg-black opacity-75 items-center h-28 top-72 w-full'>
        <button className="float-right text-white" onClick={btnClose}><AiFillCloseCircle /></button>
        <div className="item-saple mt-6 flex">
          <img className='img' src={ngua} alt="" />
          <img className='img' src={ongcong} alt="" />
          <img className='img' src={tien} alt="" />
          <img className='img' src={xe} alt="" />
        </div>
      </div>
      <img className='absolute h-32 bottom-40' src={lu} />
      <img className='absolute bottom-10 ml-5' src={ban} alt="" />
    </div>
  )
}

export default Content