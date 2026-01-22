"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './camera.css'

export default function Camera() {
    const router = useRouter();


     useEffect(() => {
   
    const timer = setTimeout(() => {
      router.push('/camera/capture'); 
    }, 3000);


    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
         
    <div className="flex items-center justify-center min-h-screen w-screen bg-white mt-[-10vh]">
    
    
    <div className='relative flex flex-col items-center justify-center'>
        
      
        <div className='w-[270px] h-[270px] md:w-[482px] md:h-[482px]'></div>
        
       
        <img alt='diamond large' loading='lazy' width={482} height={482} decoding='async' data-nimg={1} className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        
        <img alt='diamond medium' loading='lazy' width={444.34} height={444.34} decoding='async' data-nimg={1} className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        
        <img alt='diamond small' loading='lazy' width={405.18} height={405.18} decoding='async' data-nimg={1} className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest rotate-190' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color: 'transparent'}}/>
        
     
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <div className="flex flex-col items-center cursor-pointer">
            <img alt='camera icon' loading='lazy' width={136} height={136} decoding='async' data-nimg={1} className=' w-[100px] h-[100px] md:w-[136px] md:h-[136px]  duration-700 ease-in-out cursor-pointer' src='/camera.png' style={{color: 'transparent'}}/>
             <p className='text-xs md:text-sm font-bold leading-[24px]'>
                    SETTING UP CAMERA
                </p>
                
            </div>
        </div>
    </div>
</div>
<div className='absolute bottom-8 left-0 right-0 text-center z-50'>
        {/* Changed text color from white to dark so it shows on the white background */}
        <p className='text-sm mb-2 font-normal leading-6 text-[#1A1B1C]'>
            TO GET BETTER RESULTS MAKE SURE TO HAVE
        </p>
        <div className='flex justify-center space-x-8 text-[10px] md:text-xs leading-6 text-[#1A1B1C] opacity-60'>
            <p>◇ NEUTRAL EXPRESSION</p>
            <p>◇ FRONTAL POSE</p>
            <p>◇ ADEQUATE LIGHTING</p>
        </div>
    </div>
    </div>
  )
}
