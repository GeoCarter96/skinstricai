'use client'
import { useState } from 'react'
import './summary.css'

export default function Summary() {
     const [selectedTab, setSelectedTab] = useState<'RACE' | 'AGE' | 'SEX'>('RACE');
 
 const ANALYSIS_DATA = {
  RACE: {
    label: "South Asian",
    percentage: 50,
    options: [
      { name: "South Asian", value: "50%" },
      { name: "White", value: "46%" },
      { name: "Black", value: "1%" },
      { name: "Southeast Asian", value: "0%" },
      { name: "Latino Hispanic", value: "0%" },
      { name: "East Asian", value: "0%" },
      { name: "Middle Eastern", value: "0%" },
    ]
  },
  AGE: {
    label: "50-59",
    percentage: 85,
    options: [
      { name: "50-59", value: "85%" },
      { name: "40-49", value: "10%" },
      { name: "30-39", value: "5%" },
      { name: "40-49", value: "0%" },
      { name: "50-59", value: "55%" },
    ]
  },
  SEX: {
    label: "Male",
    percentage: 98,
    options: [
      { name: "Male", value: "98%" },
      { name: "Female", value: "2%" },
    ]
  }
};
 const currentData = ANALYSIS_DATA[selectedTab];
  const strokeDashoffset = 308.819 - (308.819 * currentData.percentage) / 100;
const TABS = ['RACE', 'AGE', 'SEX'] as const;
  return (
    <div>
      <div className='h-screen md:h-[90vh] flex flex-col md:mt-5'>
        <main className='flex-1 w-full bg-white md:overflow-hidden overflow-auto'>
            <div className='md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col'>
                <div className='text-start ml-4 mb-4 md:mb-10 md:ml-0'>
                    <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">A.I. ANALYSIS</h2>
                    <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">DEMOGRAPHICS</h3>
                    <h4 className="text-sm mt-2 leading-[24px]">PREDICTED RACE &amp; AGE</h4>
                </div>
                <div className='grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0'>
                    <div className='bg-white-100 space-y-3 md:flex md:flex-col h-[62%]'>
                          {TABS.map((tab) => {
      const isActive = selectedTab === tab;
      return (
        <div
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t transition-colors duration-300 ${
            isActive ? 'bg-[#1A1B1C] text-white' : 'bg-[#F3F3F4] text-black hover:bg-[#E1E1E2]'
          }`}
        >    <p className="text-base font-semibold">{ANALYSIS_DATA[tab].label}</p>
          <h4 className="text-base font-semibold mb-1">{tab}</h4>
        </div>
      );
    })}
                    </div>
                    <div className='relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t'>
                        <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2"> {currentData.label}{selectedTab === 'AGE' && ' y.o.'}</p>
                        <div className='relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2'>
                            <div style={{width: '100%', height: '100%', maxHeight: '384px', position: 'relative', transform:'scale(1)', transformOrigin: 'center center'}}>
                                 <svg className="CircularProgressbar text-[#1A1B1C]" viewBox="0 0 100 100" data-test-id="CircularProgressbar"><path className="CircularProgressbar-trail" d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    " strokeWidth="1.7" fillOpacity="0" style={{ strokeDasharray: "308.819px, 308.819px"}}></path><path className="CircularProgressbar-path" d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    " strokeWidth="1.7" fillOpacity="0" style={{stroke: 'rgb(26, 27, 28)', transitionDuration: '0.8s', strokeDasharray: '308.819px, 308.819px', strokeDashoffset: `${strokeDashoffset}px`}}></path></svg>
                             <div className='absolute inset-0 flex items-center justify-center'>
                                <p className="text-3xl md:text-[40px] font-normal"> {currentData.percentage}<span className="absolute text-xl md:text-3xl">%</span></p>
                             </div>
                                 </div>
                        </div>
                        <p className='md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] xl:left-[45%]'>If A.I. estimate is wrong, select the correct one.</p>
                    </div>
                    <div className='bg-gray-100 pt-4 pb-4 md:border-t'>
                      <div className='space-y-0'>
  <div className='flex justify-between px-4'>
    <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">{selectedTab}</h4>
    <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">A.I. CONFIDENCE</h4>
  </div>

  
  {currentData.options.map((option, index) => {
    
    const isSelected = option.name === currentData.label;

    return (
      <div
        key={index}
        className={`flex items-center justify-between h-[48px] px-4 cursor-pointer transition-colors duration-200 ${
          isSelected 
            ? "bg-[#1A1B1C] text-white hover:bg-black" 
            : "text-black hover:bg-[#E1E1E2]"
        }`}
      >
        <div className="flex items-center gap-1">
          <img
            alt="radio button"
            loading="lazy"
            width="12"
            height="12"
            className={`w-[12px] h-[12px] mr-2 ${isSelected ? "invert" : ""}`}
            src="/radio-button.png"
            style={{ color: 'transparent' }}
          />
          <span className="font-normal text-base leading-6 tracking-tight">
            {option.name}
          </span>
        </div>
        <span className="font-normal text-base leading-6 tracking-tight">
          {option.value}
        </span>
      </div>
    );
  })}
</div>

                        </div>
                    </div>
                    <div className='pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16'>
                    <div className='flex justify-between max-w-full mx-auto px-4 md:px-0'>
                        <a href='/select'>
                        <div>
                            <div className='relative w-12 h-12 flex items-center justify-center boreder border-[#1A1B1C] rotate-45 scale-[1] sm:hidden'>
                                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                            </div>
                            <div className='group hidden sm:flex flex-row relative justify-center items-center'>
                                <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                <span className="text-sm font-semibold hidden sm:block ml-6 ">BACK</span>
                            </div>
                        </div>
                        </a>
                        <a href='/'>
                        <div>
                            <div className='w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 sclae-[1] sm:hidden'>
                                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">HOME</span>
                            </div>
                            <div className='hidden sm:flex flex-row relative justify-center items-center'>
                                <span className="text-sm font-semibold hidden sm:block mr-5">HOME</span>
                                <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>
                                <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block">▶</span>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}