import React, { useState , useRef} from 'react'
import emailjs from '@emailjs/browser';

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
        <div className='h-screen mt-[5vw]! p-4! max-[540px]:p-3!'>
          <div className='w-full relative h-full flex items-center  max-[767px]:flex-wrap justify-around overflow-hidden shadow-xl  shadow-gray-400 rounded-2xl bg-linear-to-r from-zinc-900 from-30% to-zinc-400 to-95% '>
              <video autoPlay controls={false} loop className='h-full w-full object-cover' src="/star.mp4"></video>
              <video autoPlay controls={false} loop className='h-full w-full absolute object-contain' src="/omon.mp4"></video>
              <h1 className='absolute left-[4vw] max-[767px]:top-[8vh] max-[767px]:text-8xl   text-white uppercase font-[anzo1] text-9xl'>Reach out to me</h1>
             <form  ref={form}
             onSubmit={(e)=>{
                submithandler(e);
             }}
              className='absolute right-[5vw] max-[767px]:bottom-[8vh] bg-gray-400/40 p-[2vw]! rounded-2xl text-2xl text-white'>
                <h4 className='text-4xl tracking-wide font-[anzo1] mt-3! uppercase'>How should I call you?</h4>
                <input 
                name='Name' required 
                className='border-2 border-white rounded-xl p-1! text-xl font-[anzo3] mt-3!' 
                type="text" placeholder='FullName'
                value={contact.Name} 
                onChange={inputval }/>
                <h4 className='text-4xl tracking-wide font-[anzo1] mt-3! uppercase'>Sending From</h4>
                <input 
                name='Email' required
                 className='border-2 border-white rounded-xl p-1! text-xl font-[anzo3] mt-3!' 
                 type="email" placeholder='name@gmail.com' 
                 value={contact.Email}
                 onChange={inputval  }/>
                <h4 className='text-4xl tracking-wide font-[anzo1] mt-3! uppercase'>Transmitted Data</h4>
                <textarea 
                rows={4} name='Message' required 
                className='border-2 border-white rounded-xl p-1! text-xl font-[anzo3] mt-3!' 
                type="text" placeholder='Hi, I write to you about...' 
                value={contact.Message}
                onChange={inputval }/>
                
                
                <div className='flex items-center justify-center mt-5!'>
                <button type='submit' className='text-xl font-[anzo2] border-2 border-white active:scale-90 cursor-pointer bg-black py-2! px-4! rounded-2xl'>Send Message</button>
                </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default Contact