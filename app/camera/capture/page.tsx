'use client'
import { useRouter } from 'next/navigation';
import './capture.css'
import { useEffect, useRef,  useState } from 'react';
import { useAnalysisStore } from '@/Library/store';
export default function Capture() {
     const videoRef = useRef<HTMLVideoElement>(null);
const canvasRef = useRef<HTMLCanvasElement>(null);
const [capturedImage, setCapturedImage] = useState<string | null>(null);
const [isAnalyzing, setIsAnalyzing] = useState(false);
const video = videoRef.current;
const router = useRouter();
  const canvas = canvasRef.current;
  const setAnalysisResults = useAnalysisStore((state) => state.setAnalysisResults);
const uploadCapturedImage = async (dataUrl: string) => {
  

  
  const base64String = dataUrl.split(',')[1];

  try {
    const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        image: base64String,
        filename: 'selfie.png' 
      })
    });
    if (!response.ok) throw new Error('Upload failed');
    const data = await response.json();
     setAnalysisResults({
    race: data.race,
    racePercentage: data.race_confidence,
    age: data.age_range,
    agePercentage: data.age_confidence,
    sex: data.gender,
    sexPercentage: data.gender_confidence,
  });

    console.log("Analysis Success:", data);

   

  } catch (error) {
    console.error("Upload Error:", error);
    
     alert("Upload failed. Please try again.");
  }
};


  
 const takePicture = () => {
  const video = videoRef.current;
  const canvas = canvasRef.current;

  if (video && canvas) {
    const context = canvas.getContext('2d');
    
    
    canvas.width = video.videoWidth || 640;
canvas.height = video.videoHeight || 480;

    
    if (context) {
      
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
     
      const imageData = canvas.toDataURL('image/png');
      setCapturedImage(imageData);
       uploadCapturedImage(imageData); 
      console.log("Photo Captured!");
      
    }
  }
};

       useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "user" } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        
        console.error("Camera access denied:", err);
        
        
        alert("Camera access is required for analysis. ");
        
        
        router.push('/result'); 
         }
    }

    startCamera();
    
    
   return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [router]);
  return (
    <div>
      <div className='h-[90vh] w-screen'>
        <div className='relative h-[92vh] w-screen overflow-hidden bg-gray-900'>
            <div className='absolute inset-0 z-10'>
                 
{capturedImage && (
  <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
   <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40">GREAT SHOT!</div>
    <img 
      src={capturedImage} 
      alt="Captured" 
      className="w-full h-full object-cover" 
    />
      {isAnalyzing ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 animate-in fade-in duration-500">
        <div className="w-16 h-16 border-4 border-[#FCFCFC] border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-10 text-xl font-light tracking-[0.2em] text-[#FCFCFC] uppercase animate-pulse">
          Analyzing Image...
        </h2>
        <p className="mt-2 text-[10px] text-[#FCFCFC] opacity-60 uppercase tracking-widest">
          Skinstric A.I. Processing
        </p>
      </div>
    ) : (
        <>
     <div className="absolute bottom-20 left-0 right-0 text-center">
          <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">Preview</h2>
      </div>
    <div className="absolute bottom-10 flex gap-4">
        
       <button onClick={() => setCapturedImage(null)} className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm">Retake</button>
       <button onClick={() => {
            setIsAnalyzing(true);
            uploadCapturedImage(capturedImage); 
            setTimeout(() => {
              router.push('/select');
            }, 3000); 
          }}  className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm">Use This Photo</button>
    </div>
    </>
    )}
  </div>
)}

                 <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted 
              className='absolute inset-0 w-full h-full object-cover'
            ></video>
                <video autoPlay playsInline className='absolute inset-0 w-full h-full object-cover'></video>
                <div className='absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3'>
                <div className='font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block'>TAKE PICTURE</div>
                <div className='transform hover:scale-105 ease-in-out duration-300'>
                    <img  onClick={takePicture} alt='take picture' loading='lazy' width='60' height='60' decoding='async' data-nimg='1' className='w-16 h-16 cursor-pointer' src='/capture.png' style={{color: 'transparent'}}/>
                </div>
                </div>
                <div className='absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20'>
                    <p className='text-sm mb-2 font-normal leading-6 text-[#FCFCFC]'>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
                    <div className='flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC] '>
                        <p>◇ NEUTRAL EXPRESSION</p>
                        <p>◇ FRONTAL POSE</p>
                        <p>◇ ADEQUATE LIGHTING</p>
                    </div>
                </div>
            </div>
            <div className='absolute md:bottom-8 bottom-60 left-8 z-20'>
                <a href='/result'>
                <div>
                <div className='relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden'>
                    <span className='rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]'>BACK</span>
                </div>
                <div className='group hidden sm:flex flex-row relative justify-center items-center'>
                    <div className='w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300'></div>
                    <span className='absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300'>
                        <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-white ml-0.5" 
  >
    <path d="M8 5v14l11-7z" />
  </svg></span>
  <span className='text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]'>BACK</span>
                </div>
                </div>
                </a>
            </div>
            <canvas  ref={canvasRef} className='hidden'/>
        </div>
      </div>
    </div>
  )
}
