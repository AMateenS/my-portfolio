import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Page2 = () => {
    const refec = useRef(null)

    gsap.registerPlugin(ScrollTrigger);
   
    useGSAP(() => {
        gsap.utils.toArray('.textrot').forEach((element) => {
            gsap.from(element, {
                rotateX: -100,
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                // scrollTrigger: {
                //     trigger: element,
                //     start: "top 90%",
                //     toggleActions: "play reset pause none",
                //     markers: false,
                // }
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none", // Play animation on enter
                    markers: false,
                    once: true,
                }
            });
        });
    }, { scope: refec }); // scope for cleanup and better performance

    return (
        <div id='page2' ref={refec} className='p-6! overflow-clip mt-[4rem]!'>
            <div className='textrot'>
                <h1 className='text-[30vw] text-center font-[anzo1] uppercase leading-[26vw]'>
                    Effective web
                </h1>
            </div>
            <div className='textrot'>
                <h1 className='text-[30vw] text-center font-[anzo1] uppercase leading-[26vw]'>
                    is one
                </h1>
            </div>
            <div className='textrot'>
                <h1 className='text-[30vw] text-center font-[anzo1] uppercase leading-[26vw]'>
                    that delivers
                </h1>
            </div>
        </div>
    )
}

export default Page2
