'use client'
import './result.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export interface SkinstricPhaseTwoData {
    success: boolean,
    message: string
}


export default function Result() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const router = useRouter();
     const fileInputRef = useRef<HTMLInputElement>(null);
const [isUploading, setIsUploading] = useState(false);
const [previewImage, setPreviewImage] = useState<string | null>(null);



const uploadImage = async (base64String: string) => {
  try {
    const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        image: base64String,
        filename: 'profile.png' 
      })
    });
    const result = await response.json();
    console.log("Upload Success:", result);
  } catch (error) {
    console.error("Upload Error:", error);
  }
};


useEffect(() => {
  if (isUploading) {
    const timer = setTimeout(() => {
      alert("Image Analyzed Successfully!");
    }, 1000); 

    return () => clearTimeout(timer);
  }
}, [isUploading]);


const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const objectUrl = URL.createObjectURL(file);
  setPreviewImage(objectUrl);
  setIsUploading(true);

  const reader = new FileReader();
  reader.onload = () => {
    const base64Data = reader.result as string;
    const rawBase64 = base64Data.split(',')[1];
    uploadImage(rawBase64);
  };
  reader.readAsDataURL(file);

 
  setTimeout(() => {
    router.push('/select');
  }, 3500);
};

const handleGalleryClick = () => {
  fileInputRef.current?.click();
};



   if (isUploading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
         <img alt='diamond large' loading='lazy' width={482} height={482} decoding='async' data-nimg={1} className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        
        <img alt='diamond medium' loading='lazy' width={444.34} height={444.34} decoding='async' data-nimg={1} className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        
        <img alt='diamond small' loading='lazy' width={405.18} height={405.18} decoding='async' data-nimg={1} className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        <div className='absolute top-25 right-10 flex flex-col items-start animate-in fade-in slide-in-from-top-4 duration-1000'>
        <h1 className='font-roobert font-bold text-xs mb-1 uppercase tracking-widest '>Preview</h1>
        <div className='w-24 h-24 md:w-32 md:h-32 border border-black overflow-hidden bg-gray-50'>
          {previewImage && (
            <img 
              src={previewImage} 
              alt="Analyzing Preview" 
              className="w-full h-full object-cover grayscale brightness-110" 
            />
          )}
        </div>
      </div>
        <h2 className="mt-10 text-l font-light tracking-[0.2em] text-[#1A1B1C] uppercase animate-pulse">
          Preparing Your Analysis...
        </h2>
        <p className="mt-2 text-[10px] text-gray-400 uppercase tracking-widest">
          Skinstric A.I. Processing
        </p>
      </div>
    );
  }
  return (
    <div>
         <input 
  type="file" 
  ref={fileInputRef} 
  className="hidden" 
  accept="image/*" 
  onChange={handleFileChange} 
/>
      <div className='min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center'>
        <div className='absolute top-2 left-9 md:left-8 text-left'>
            <p className='font-semibold text-xs md:text-sm'>TO START ANALYSIS</p>
        </div>
        <div className='flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0'>
            <div className='relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center'>
                <div className='w-[270px] h-[270px] md:w-[482px] md:h-[482px]'></div>
                <img alt='diamond large' loading='lazy' width='482' height='482' decoding='async' data-nimg='1' className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
                <img alt='diamond medium' loading='lazy' width='444.34' height='444.34' decoding='async' data-nimg='1' className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
                <img alt='diamond small' loading='lazy' width='405.18' height='405.18' decoding='async' data-nimg='1' className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
                <div  onClick={() => setIsPopupVisible(true)}  className='absolute inset-0 flex flex-col items-center justify-center'>
                    <img alt='camera icon' loading='lazy' width='136' height='136' decoding='async' data-nimg='1' className='absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer'  src='/camera.png' style={{color: 'transparent'}}/>
                    <div    className='absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px] cursor-pointer'>
                        <p className='text-xs md:text-sm font-normal mt--1  leading-[24px]'>
                            ALLOW A.I.
                            <br></br>
                            TO SCAN YOUR FACE 
                        </p>
                        <img alt='scan line' loading='lazy' width='66' height='59' decoding='async' data-nimg='1' className='absolute hidden md:block md:right-[141px] md:top-[20px]'  src='/scanline2.png'style={{color: 'transparent'}}/>
                    </div>
                </div>
 {isPopupVisible && (
                <div className='absolute md:top-[43%] md:left-[360px] w-[352px] z-50'>
                    <div className='bg-[#1A1B1C] pt-4 pb-2'>
                        <h2 className='text-[#FCFCFC] text-base font-semibold mb-12 leading-[24px] pl-4'>
                            ALLOW A.I. TO ACCESS YOUR CAMERA 
                        </h2>
                        <div className='flex mt-4 border-t border-[#FCFCFC] pt-2'>
                            <button className='px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500'   onClick={(e) => {
                  e.stopPropagation(); 
                  setIsPopupVisible(false);
                }}  >DENY</button>
                            <button  onClick={() => router.push('/camera')} className='px-5 md:translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300'>ALLOW</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className='relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100' >
                <div className='w-[270px] h-[270px] md:w-[482px] md:h-[482px]'></div>
                <img alt='diamond large' loading='lazy' width='484' height='484' decoding='async' data-nimg='1' className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                 <img alt='diamond medium' loading='lazy' width='448' height='448' decoding='async' data-nimg='1' className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                  <img alt='diamond small' loading='lazy' width='408' height='408' decoding='async' data-nimg='1' className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest ' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <img   onClick={!isPopupVisible ? handleGalleryClick : undefined}  alt='photo upload icon' loading='lazy' width='136' height='136' decoding='async' data-nimg='1'  className={`absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] duration-700 ease-in-out transition-all
    ${isPopupVisible 
      ? 'opacity-20 grayscale brightness-150 cursor-default scale-95' 
      : 'opacity-100 grayscale-0 brightness-100 cursor-pointer hover:scale-108'
    }
  `} src='/photoupload.png'/>
     
                    <div  onClick={!isPopupVisible ? handleGalleryClick : undefined}   className={`absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[10px] transition-all duration-500 ease-in-out
    ${isPopupVisible ? 'grayscale opacity-30 pointer-events-none' : 'grayscale-0 opacity-100 cursor-pointer'}
  `}
>
                        <p className='text-xs  md:text-sm  font-normal mt-1 leading-[24px] text-right'>
                            ALLOW A.I.
                            <br></br>
                            ACCESS GALLERY
                        </p>
                        <img alt='scan line' loading='lazy' width='66.33' height='59.37' decoding='async' data-nimg='1' className='absolute pb-4 hidden md:block md:left-[120px] md:bottom-[39px]' src='/scanline1.png' />
                    </div>
                </div>
                
            </div>
            <div className='absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opactiy duration-300 opacity-100'>
                <h1 className='font-roobert font-bold text-xs mb-1 uppercase tracking-widest'>Preview</h1>
                <div className='w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden'></div>
            {previewImage ? (
            <img 
              src={previewImage} 
              alt="Upload Preview" 
              className="w-full h-full object-cover"
            />
        ) : (
            <span className="text-[8px] text-gray-400 uppercase">No Image</span>
        )}
            </div>
            <input accept='image/*' className='hidden' type='file'></input>
        </div>
        <div className='pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0'>
            <div className='absolute bottom-8 w-full flex justify-between md:px-9 px-13'>
                <a className='relative' aria-label='Back' href='/testing'>
                <div>
                    <div className='relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden'>
                        <span className='rotate-[-45deg] text-xs font-semibold sm:hidden'>BACK</span>
                    </div>
                    <div className='group hidden sm:flex flex-row relative justify-center items-center'>
                        <div className='w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300'><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-11 rotate-130"><path d="M7 6.007c0-1.222 1.333-1.977 2.383-1.353l10.5 6.233a1.562 1.562 0 0 1 0 2.706l-10.5 6.233C8.333 20.45 7 19.696 7 18.473V6.007Z" /></svg>
                        </div>
                        <span className='text-sm font-semibold hidden sm:block ml-6'>BACK</span>
                    </div>
                </div>
                </a>
                <a href='/select'>
                <div className='hidden'>
                    <div>
                        <div className='w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden'>
                            <span className='rotate-[-45deg] text-xs font-semibold sm:hidden'>PROCEED</span>
                        </div>
                        <div className='group hidden sm:flex flex-row relative justify-center items-center'>
                            <span className='text-sm font-semibold hidden sm:block mr-5'>PROCEED</span>
                            <div className='w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300'></div>
                            <span className='absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300'><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 6.007c0-1.222 1.333-1.977 2.383-1.353l10.5 6.233a1.562 1.562 0 0 1 0 2.706l-10.5 6.233C8.333 20.45 7 19.696 7 18.473V6.007Z" /></svg>
                          </span>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
