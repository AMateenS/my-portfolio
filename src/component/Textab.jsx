import React from 'react'

const Textab = ( reference) => {
  return (
    <div>
        <div ref={reference.raf} id='titledev' className=' leading-none max-[540px]:leading-10 '>
            <h1 className=' text-[4.2vw] max-[767px]:text-[8vw] font-bold font-[anzo2] text-base/10 '>I AM <span className='text-zinc-600 pl-5! font-extrabold font-[anzo3]'> ABDUL MATEEN </span></h1>
            <h1 className=' text-[5vw] max-[767px]:text-[10vw] font-extrabold font-sans'>WEB DEVELOPER</h1>
            <h1 className=' text-[4vw] max-[767px]:text-[8vw] font-[anzo3]'>TO HIRE</h1>
            </div>    
    </div>
  )
}

export default Textab