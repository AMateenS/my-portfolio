import React, { useState , useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {

  const form = useRef();
  
  const [contact, setcontact] = useState({
    Name:"",
    Email:"",
    Message:"",
  });

  const inputval=(e)=>{
    const {name,value}=e.target;
    setcontact((prev)=>({...prev, [name]:value}))
  }
  
  const submithandler=(e)=>{
    e.preventDefault();

    emailjs
      .sendForm('service_5ivoddc', 'template_rswylir', form.current, {
        publicKey: 'iS7dkgrEOla-5jIh0',
      })
      .then(
        () => {
          setcontact({ Name: '', Email: '', Message: '' });
          alert('MESSAGE SEND SUCCESSFULLY!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('FAILED... Please try again later.');
        },
      );
  }

  return (
    <>
        <div id='Contact' className='h-screen mt-[5vw]! p-4! max-[540px]:p-3!'>
          <div className='w-full relative h-full flex  overflow-hidden shadow-xl  shadow-gray-400 rounded-2xl bg-linear-to-r from-zinc-900 from-30% to-zinc-400 to-95% '>
              <video autoPlay muted controls={false} loop className='h-full w-full object-cover' src="/star.mp4"></video>
              <video autoPlay muted controls={false} loop className='h-full w-full max-[767px]:opacity-70 absolute object-contain' src="/omon.mp4"></video>
              <div className='w-full absolute h-full flex items-center max-[767px]:justify-center  max-[767px]:flex-wrap justify-between px-[5vw]!'>
              <h1 className='max-[767px]:top-[3vh] max-[767px]:text-8xl max-[400px]:text-7xl text-white uppercase font-[anzo1] text-9xl'>Reach out to me</h1>
             <form  ref={form}
             onSubmit={(e)=>{
                submithandler(e);
             }}
              className='max-[767px]:bottom-[4vh] bg-gray-400/40 p-[2vw]! rounded-2xl text-2xl text-white'>
                <h4 className='text-4xl max-[767px]:text-3xl tracking-wide font-[anzo1] mt-3! max-[767px]:mt-1! uppercase'>How should I call you?</h4>
                <input 
                name='Name' required 
                className='border-2 border-white rounded-xl p-1! text-xl max-[450px]:text-sm font-[anzo3] mt-3!' 
                type="text" placeholder='FullName'
                value={contact.Name} 
                onChange={inputval }/>
                <h4 className='text-4xl max-[767px]:text-3xl tracking-wide font-[anzo1] mt-3! max-[767px]:mt-1! uppercase'>Sending From</h4>
                <input 
                name='Email' required
                 className='border-2 border-white rounded-xl p-1! text-xl max-[450px]:text-sm font-[anzo3] mt-3!' 
                 type="email" placeholder='name@gmail.com' 
                 value={contact.Email}
                 onChange={inputval  }/>
                <h4 className='text-4xl max-[767px]:text-3xl tracking-wide font-[anzo1] mt-3! max-[767px]:mt-1! uppercase'>Transmitted Data</h4>
                <textarea 
                rows={4} name='Message' required 
                className='border-2 border-white rounded-xl p-1! text-xl max-[450px]:text-sm font-[anzo3] mt-3!' 
                type="text" placeholder='Hi, I write to you about...' 
                value={contact.Message}
                onChange={inputval }/>
                
                
                <div className='flex items-center justify-center mt-5!'>
                <button type='submit' className='text-xl max-[450px]:text-sm font-[anzo2] border-2 border-white active:scale-90 cursor-pointer bg-black py-2! px-4! rounded-2xl hover:bg-white hover:text-black transition duration-700'>Send Message</button>
                </div>
              </form>
              </div>
              <div className='absolute bottom-[60px] max-[685px]:bottom-[15px] max-[685px]:left-6 gap-3 left-12 flex '>
              <a className='linkicon relative' href="https://www.linkedin.com/in/abdul-mateen-046143273"><FaLinkedin className='text-white rounded-3xl cursor-pointer max-[600px]:w-[25px] w-[40px] h-[40px]' /></a>
              <a className='giticon relative' href="https://github.com/AMateenS"><FaGithubSquare className='text-white rounded-3xl cursor-pointer max-[600px]:w-[25px] w-[40px] h-[40px]' /></a>
            </div>
            </div>
        </div>
    </>
  )
}

export default Contact