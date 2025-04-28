import React, { useRef, useState } from 'react'
import './Home.css'
import Textab from '../component/Textab'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Sesion = () => {
   
  const [xval, setxval] = useState(0);
  const [yval, setyval] = useState(0);
  
  const titleraf = useRef(null)
  const mousemoving=(e)=>{

    setxval((e.clientX - titleraf.current.getBoundingClientRect().x - titleraf.current.getBoundingClientRect().width/2)/60);
    setyval(-(e.clientY - titleraf.current.getBoundingClientRect().y - titleraf.current.getBoundingClientRect().height/2)/30);

    // console.log(titleraf.current.getBoundingClientRect()     );
  }
  useGSAP(function(){
    gsap.to(titleraf.current,{
      transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
      duration:1.5,
      ease: 'power2.inout'
    })
  },[xval,yval])

  return (
    <div onMouseMove={(e)=>{
      mousemoving(e)} 
    }
    className='mainhome h-screen p-4! max-[540px]:p-3!'>
        <div className='home w-full relative h-full flex items-center justify-between overflow-hidden shadow-xl  shadow-gray-400 rounded-2xl bg-linear-to-r from-zinc-900 from-30% to-zinc-400 to-95% '>
          <div id='presp' className=' text-white relative flex justify-between flex-col pl-8! max-[767px]:pl-4!  py-10! max-[767px]:py-5! h-[100%] w-[800px]'> 
            <img id='logo' className='w-[8vw] h-[14vh] ml-[3vw]!' src="/logo.png" alt="" />
            <Textab raf={titleraf}/>           
            <div className='text-sm'>
              <h6 className='font-bold font-[anzo2]'>BUILD WEBSITE | MAINTAIN WEBSITE</h6>
              <p className='text-zinc-400 font-[anzo2]'>BESPOKE FREELANCE</p>
            </div>
          </div>
          <div className='imgsection h-full flex items-center w-[550px] '> 
            <div className='image h-[350px] w-[350px] relative ' >
            <img className='h-[350px] w-[350px] rounded-full'  src="/my.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sesion