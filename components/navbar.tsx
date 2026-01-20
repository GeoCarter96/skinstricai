

export default function Navbar() {
  return (
    <div>
       <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
          <div className="flex flex-row pt-1 scale-75 justify-center items-center">
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000 " href='/'>
            SKINSTRIC
            </a>
            <img alt='left-bracket' loading='lazy' width='5' height='19' decoding='async' data-nimg='1' className="w-[4px] h-[17px]  " style={{color: 'transparent'}} src='/leftbracket.png'/>
            <p className="text-[#1a1b1c83] text-opacity-70 font-semibold text-sm m1-1.5 mr-1.5 pl-1 ">INTRO</p>
            <img alt='right-bracket' loading='lazy' width='5' height='19' decoding='async' data-nimg='1' className="w-[4px] h-[17px] " style={{color: 'transparent'}} src='/rightbracket.png' />
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1a1b1c] leading-[16px]">
          ENTER CODE
          </button>
        </div>
    </div>
  )
}
