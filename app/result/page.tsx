import './result.css'

export default function Result() {
  return (
    <div>
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
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <img alt='camera icon' loading='lazy' width='136' height='136' decoding='async' data-nimg='1' className='absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer'  src='/camera.png' style={{color: 'transparent'}}/>
                    <div className='absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]'>
                        <p className='text-xs md:text-sm font-normal mt-1 leading-[24px]'>
                            ALLOW A.I.
                            <br></br>
                            TO SCAN YOUR FACE 
                        </p>
                        <img alt='scan line' loading='lazy' width='66' height='59' decoding='async' data-nimg='1' className='absolute hidden md:block md:right-[143px] md:top-[20px]' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate.png'style={{color: 'transparent'}}/>
                    </div>
                </div>
            </div>
            <div className='relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100' >
                <div className='w-[270px] h-[270px] md:w-[482px] md:h-[482px]'></div>
                <img alt='diamond large' loading='lazy' width='484' height='484' decoding='async' data-nimg='1' className='absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                 <img alt='diamond medium' loading='lazy' width='448' height='448' decoding='async' data-nimg='1' className='absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                  <img alt='diamond small' loading='lazy' width='408' height='408' decoding='async' data-nimg='1' className='absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest ' srcSet='/rotate.png 1x, /rotate2.png 2x' src='/rotate3.png' style={{color:'transparent'}}/>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <img alt='photo upload icon' loading='lazy' width='136' height='136' decoding='async' data-nimg='1' className='absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer' src='/photoupload.png'/>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
