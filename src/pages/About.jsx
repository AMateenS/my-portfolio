import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Sesion2 = () => {

   const refec = useRef(null);
      gsap.registerPlugin(ScrollTrigger);
     
      useGSAP(() => {
    ScrollTrigger.matchMedia({
        // For screens larger than 767px
        "(min-width: 768px)": () => {
            gsap.utils.toArray('.aboutxt').forEach((element) => {
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        x: 100,
                        y: 100
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 50%",
                            toggleActions: "play reverse play reverse",
                            markers: false
                        }
                    }
                );
            });
        },

        // For screens 767px and below
        "(max-width: 767px)": () => {
            gsap.utils.toArray('.aboutxt').forEach((element) => {
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        x: 100,
                        y: 100
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%", // start animation earlier on small screens
                            toggleActions: "play reverse play reverse",
                            markers: false
                        }
                    }
                );
            });
        }
    });
}, { scope: refec });



//     const animate = () => {
//   const canvas = document.querySelector('canvas');
//   const ctx = canvas.getContext('2d');

//   canvas.width = canvas.offsetWidth || 500;
//   canvas.height = canvas.offsetHeight || 500;

//   const imgPaths = Array.from({ length: 150 }, (_, idx) => `/assets/astonet/frame(${idx+1}).png`);
//   const images = [];
//   let loadedCount = 0;

//   imgPaths.forEach((path, idx) => {
//     const img = new Image();
//     img.src = path;

//     img.onload = () => {
//       images[idx] = img;
//       loadedCount++;
//       if (loadedCount === 150) {
//         startAnimation();
//       }
//     };

//     img.onerror = () => {
//       console.error(`Failed to load image: ${path}`);
//     };
//   });

//   function startAnimation() {
//     let ffram = 0;
//     let lfram = 0;

//     const loopseqlenth = (tstep) => {
//       if (tstep - lfram >= 1000 / 30) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         const img = images[ffram];
//         if (img instanceof HTMLImageElement) {
//           ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//         } else {
//           console.warn(`Frame ${ffram} is not an image yet.`);
//         }

//         ffram = (ffram + 1) % 151;
//         lfram = tstep;
//       }
//       requestAnimationFrame(loopseqlenth);
//     }

//     requestAnimationFrame(loopseqlenth);
//   }
// };

// useEffect(() => {
//   animate();
// }, []);


    
    
  return (
    <>
    <div id='About' ref={refec} className='h-screen  mt-[60px]! p-4! max-[540px]:p-6!'>
          <div className='w-full relative h-full flex items-center p-4! max-[767px]:flex-wrap justify-around overflow-hidden shadow-xl  shadow-gray-400 rounded-2xl bg-linear-to-r from-zinc-900 from-30% to-zinc-400 to-95% '>
             <div className='max-[767px]:w-full relative h-full  max-[767px]:h-[300px] flex justify-center items-center'>
                <canvas className='h-[65%] w-[100%] absolute'></canvas>
              <h1 className='text-[40vw] max-[767px]:text-[50vw]  text-white font-[anzo1] text-center' >About</h1>
             </div>
             <div   className='aboutxt text-gray-300 w-[400px] max-[767px]:w-full items-center'>
              <p className='text-2xl max-[767px]:text-[15px] text-center font-[anzo3]'>I am an innovative <span className='bldtext text-white font-bold uppercase'>web developer</span> and  <span className='bldtext text-white font-bold uppercase'>BSc Computer Engineering</span> student. I have a strong passion for coding, problem-solving, and building efficient web applications. I specialize in creating responsive, user-friendly websites with a focus on performance and modern design. Always eager to learn new technologies and stay updated with industry trends, I strive to enhance my skills and deliver high-quality solutions</p>
             </div>
            </div>
        </div>
        </>
  )
}

export default Sesion2