import React, { useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className='fixed z-1 w-full mt-[2vh]! '>
      <div className='w-full flex items-center justify-center max-[550px]:hidden' >
          <ul className=' text-zinc-400 flex items-center justify-center '>
            <li className='headerbtn p-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-300'>Home</li>
            <li className='headerbtn p-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-300'>About</li>
            <li className='headerbtn p-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-300'>Projects</li>
            <li className='headerbtn p-[1.5vw]! text-xl mr-1! font-[anzo2] hover:cursor-pointer hover:text-zinc-300'>Skills</li>
          </ul>
      </div>
      <div className={`sidebar ${menu? 'flex':'hidden'} absolute -top-7 z-11 right-0 pr-5! w-[250px] h-screen justify-end shadow-xl  shadow-gray-400 bg-linear-to-r from-zinc-900 from-30% to-zinc-400 to-95% `} >
          <ul className=' text-zinc-400 w-full p-4! flex flex-col items-center  '>
            <li onClick={() => setmenu(false)} className='headerbtn p-[5vw]! my-10! w-full text-4xl font-[anzo2] shadow-gray-400 hover:cursor-pointer hover:text-white'> <IoCloseSharp/></li>
            <li className='headerbtn p-[5vw]! border-b-2 w-full text-xl font-[anzo2] hover:cursor-pointer hover:text-white'>Home</li>
            <li className='headerbtn p-[5vw]! border-b-2 w-full text-xl font-[anzo2] hover:cursor-pointer hover:text-white'>About</li>
            <li className='headerbtn p-[5vw]! border-b-2 w-full text-xl font-[anzo2] hover:cursor-pointer hover:text-white'>Projects</li>
            <li className='headerbtn p-[5vw]! border-b-2 w-full text-xl font-[anzo2] hover:cursor-pointer hover:text-white'>Skills</li>
          </ul>
      </div>
      <div className='mr-[5vw]! absolute right-0 top-5 max-[767px]:text-[3vw] flex items-center justify-end'>
              <button className='bouncbtn px-3! z-1 py-2! bg-zinc-950 border-4 animate-bounce shadow-md shadow-gray-500 border-white rounded-4xl font-[anzo2]  text-white hover:cursor-pointer hover:bg-gray-500'>PLAN A CALL</button>
              <button onClick={()=>{setmenu(true)}} ><CgMenuGridO  className='hidden max-[550px]:block ml-2! text-5xl max-[767px]:text-[8vw] text-gray-700 hover:cursor-pointer' /></button>
          </div>
    </div>
  )
}

export default Header