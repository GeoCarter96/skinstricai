'use client'
import { useState, useEffect } from 'react'

import './testing.css'



export default function Testing() {
     const [step, setStep] = useState(1); 
     const [tempName, setTempName] = useState("");
  const [formData, setFormData] = useState({ name: '', city: '' });
  const [inputValue, setInputValue] = useState('');
  const isCityFinished = step === 2 && inputValue.trim().length > 4;
  const [loading, setLoading] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);


const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();


  if (step === 1) {
    
    setTempName(inputValue);
    setStep(2);
      setInputValue("");
  } else {
     setLoading(true);
    const data = {
      name: tempName.trim(),
      location: inputValue.trim(),
    };

    try {
      const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
       
      if (response.ok) {
        
        setIsSubmitted(true);
      }
      const result = await response.json();
      console.log("API Result:", result);
      
       
    } catch (error) {
      console.error("Submission Error:", error);
    }finally {
     
      setLoading(false);
    }
  }
};




  return (
    <div>
      <div className='min-h-[90vh] flex flex-col items-center justify-center bg-white text-center'>
        <div className='absolute top-16 left-9 text-left'>
            <p className='font-semibold text-xs'>TO START ANALYSIS</p>
        </div>
        <div className='relative flex flex-col items-center justify-center mb-40 w-full h-full'>
             {loading ? (
    
    <p className='text-2xl animate-pulse uppercase tracking-widest'>Analyzing...</p>
  ) : isSubmitted ? (
      <div className='text-center animate-fadeIn'>
      <h2 className='text-5xl font-normal text-[#1A1B1C]'>Thank You! {formData.name}</h2>
      <p className='text-gray-400 mt-2 uppercase tracking-tighter'>Proceed for the next step</p>
    </div>
  ) : ( <>
            <p className='text-sm text-gray-400 tracking-wider uppercase mb-1'>CLICK TO TYPE</p>
            <form onSubmit={handleSubmit} className='relative z-10'>
                <div className='flex flex-col items-center'></div>
                <input className='text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10' placeholder={step === 1 ? 'Introduce Yourself' : 'City Name?'}  name="fullEntry"  autoComplete='off' type='text' required   value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus/>
                <button type='submit' className='sr-only'>Submit</button>
                
            </form>
            </>
              )}
            <img alt='diamond large' loading='lazy' width='484' height='484' decoding='async' data-nimg='1' className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                 <img alt='diamond medium' loading='lazy' width='448' height='448' decoding='async' data-nimg='1' className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                  <img alt='diamond small' loading='lazy' width='408' height='408' decoding='async' data-nimg='1' className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest ' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                
        </div>
        <div className='absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13'>
            <a className='inset-0' aria-label='Back' href='/'>
            <div>
            <div className='relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden'>
                <span className='rotate-[-45deg] text-xs font-semibold sm:hidden'>BACK</span>
                </div>
                <div className='group hidden sm:flex flex-row relative justify-center items-center'>
                    <div className='w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300'></div>
              
                <span className='absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300'><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6"><path d="M7 6.007c0-1.222 1.333-1.977 2.383-1.353l10.5 6.233a1.562 1.562 0 0 1 0 2.706l-10.5 6.233C8.333 20.45 7 19.696 7 18.473V6.007Z" /></svg>
                </span>
                <span className='text-sm font-semibold hidden sm:block ml-6'>BACK</span>
            </div>
            </div>
            </a>
            <a className='inine-block' href='/result'>
            <div style={{position: 'relative', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px,0%)'}}>
                <div>
                    <div className={`w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 transition-all duration-500 sm:hidden
                ${isCityFinished || isSubmitted 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 translate-y-10 invisible pointer-events-none'
                }`}>
                        <span   className='rotate-[-45deg] text-xs font-semibold sm:hidden transition-all duration-500'>PROCEED</span>


                        </div>
                        <div className={`group hidden sm:flex flex-row relative justify-center items-center transition-all duration-500
                ${isCityFinished || isSubmitted 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 translate-y-10 invisible pointer-events-none'
                }`}>
                            <span    className='text-sm font-semibold hidden sm:block mr-5'  >PROCEED</span>
                            <div className='w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300'></div>
                            <span className='absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300'>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>

                            </span>
                      </div>
                </div>
            </div>
            </a>
            </div>
        </div>
      </div>
    
  )
}
