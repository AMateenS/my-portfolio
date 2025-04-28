import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow,Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
    
  return (
    <>
    <div className='slider-container overflow-hidden my-[8vw]! p-[6vw]!'>
    <Swiper 
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={ {clickable: true, 
      color:'white',
    }}
    modules={[EffectCoverflow,Navigation, Pagination]}
    className="mySwiper -z-0! "
      navigation
      spaceBetween={50}
      // slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-[300px]! p-2! shadow-xl text-white shadow-gray-400 rounded-2xl bg-linear-to-b from-zinc-900 from-30% to-zinc-400 to-95% '>
        <img className='w-full h-[200px] rounded-2xl' src="ma.jpg" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <p className='py-3! font-[anzo2] h-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, explicabo.</p>
          <button className='my-3! py-1.5! px-5! font-[anzo2] text-xl border-2 border-white cursor-pointer bg-black rounded-4xl '>Explore</button>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
     

    </>
  )
}

export default Projects