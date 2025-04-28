import React from 'react'
import { TbBrandReact } from "react-icons/tb";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { PiFileCssBold } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa6";


const Skills = () => {
  return (
    <>
    <div className='spinmain overflow-hidden my-[6vw]! '>
     <div className='logospin w-fit h-[100px] gap-[8vw] flex items-center'>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <FaHtml5 className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>Html5</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <PiFileCssBold className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>Css</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'> 
            <RiJavascriptFill className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>JavaScript</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <TbBrandReact className='react w-[45px] h-[45px] mr-2! '/>
            <h1 className='text-4xl'>React.js</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <RiTailwindCssFill className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>TailwindCss</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3] '>
            <FaHtml5 className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>Html5</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <PiFileCssBold className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>Css</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'> 
            <RiJavascriptFill className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>JavaScript</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <TbBrandReact className='react w-[45px] h-[45px] mr-2! '/>
            <h1 className='text-4xl'>React.js</h1>
        </div>
        <div className='h-full flex items-center font-bold font-[anzo3]'>
            <RiTailwindCssFill className='w-[45px] h-[45px] mr-2!'/>
            <h1 className='text-4xl'>TailwindCss</h1>
        </div>
     </div>
     </div>
     <div className='w-1/2 h-[2px] rounded m-auto! bg-black '></div>
    </>
  
  )
}

export default Skills