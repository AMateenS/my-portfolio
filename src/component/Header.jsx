import React, { useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className='fixed z-1 w-full mt-[2vh]! '>
      <div className='w-full flex items-center justify-center max-[767px]:hidden' >
          <ul className=' text-zinc-400 flex items-center justify-center '>
            <li className='headerbtn relative overflow-hidden text-center mx-[3vw]! py-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-200'><a href="#Home">Home</a></li>
            <li className='headerbtn relative overflow-hidden text-center mx-[3vw]! py-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-200'><a href="#About">About</a> </li>
            <li className='headerbtn relative overflow-hidden text-center mx-[3vw]! py-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-200'><a href="#Skills">Skills</a> </li>
            <li className='headerbtn relative overflow-hidden text-center mx-[3vw]! py-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-200'><a href="#Projects">Projects</a> </li>
            
          </ul>
      </div>
      <div className={`sidebar fixed top-0 right-0 z-50 w-[280px] h-screen backdrop-blur-sm shadow-xl shadow-gray-400 bg-zinc-300/60 transform transition-transform duration-300 ease-in-out
    ${menu ? 'translate-x-0' : 'translate-x-full'}  `}>
  <ul className='text-zinc-900 w-full p-4! flex flex-col items-center'>
    <li className='headerbtn p-[5vw]! my-5!  w-full text-4xl font-[anzo2] cursor-pointer'>
      <IoCloseSharp onClick={() => setmenu(false)} />
    </li>
    <li className='p-[5vw]! border-b-3 w-full text-xl font-[anzo2] hover:cursor-pointer'><a href="#Home" onClick={() => setmenu(false)}>Home</a></li>
    <li className='p-[5vw]! border-b-3 w-full text-xl font-[anzo2] hover:cursor-pointer'><a href="#About" onClick={() => setmenu(false)}>About</a></li>
    <li className='p-[5vw]! border-b-3 w-full text-xl font-[anzo2] hover:cursor-pointer'><a href="#Skills" onClick={() => setmenu(false)}>Skills</a></li>
    <li className='p-[5vw]! border-b-3 w-full text-xl font-[anzo2] hover:cursor-pointer'><a href="#Projects" onClick={() => setmenu(false)}>Projects</a></li>
  </ul>
</div>

      <div className='mr-[5vw]! absolute right-0 top-5  flex items-center justify-end'>
              <button className='bouncbtn px-3! z-1 py-2! text-xl max-[767px]:text-sm bg-zinc-950 border-4 animate-bounce shadow-md shadow-gray-500 border-white rounded-4xl font-[anzo2]  text-white hover:cursor-pointer hover:bg-gray-500'><a href="#Contact">PLAN A CALL</a> </button>
              <button onClick={()=>{setmenu(true)}} ><CgMenuGridO  className='hidden max-[767px]:block ml-2! text-5xl max-[767px]:text-[6vh] text-gray-700 hover:cursor-pointer' /></button>
          </div>
    </div>
  )
}

export default Header