import React, { useState } from 'react'
import date from "../assets/date.png"

const HomeForm = () => {
    const [trackDomestic,setTrackMode]=useState(true)
    const clickHandler1=()=>{
        if(trackDomestic===false){
            setTrackMode(true)
        }
    }

    const clickHandler2=()=>{
        if(trackDomestic===true){
            setTrackMode(false)
        }
    }
    
  return (
    <div className='w-full md:w-[487px] lg:h-[934px] rounded-md shadow-lg bg-[#F7F7F7] px-8 py-6 flex flex-col'>

        <div className='flex gap-x-2 items-center'>
            <button onClick={clickHandler1} className={`rounded-md font-semibold px-4 py-1  ${ (trackDomestic===true) ?"bg-[#A6A3B6] text-white" :"bg-[#ECECEC] text-[#808080]"}`}>
                Domestic
            </button>

            <button onClick={clickHandler2} className={`rounded-md px-4 py-1 font-semibold  ${ (trackDomestic===false) ?"bg-[#A6A3B6] text-white" :"bg-[#ECECEC] text-[#808080]"}`}>
                International
            </button>
        </div>


        <div className='flex flex-col gap-y-1 mt-12'>
            <label htmlFor='location1' className='text-[#444444] font-bold text-[12.67px] text-left'>Pick up location</label>
            <input id='location1' name='location1' type='text' className='w-[300px] md:w-[426.17px] h-[39.13px] rounded-md bg-white outline-none shadow-md'/>
        </div>


        <div className='flex flex-col gap-y-1 my-4'>
            <label htmlFor='location2' className='text-[#444444] font-bold text-[12.67px] text-left'>Drop up location</label>
            <input id='location2' name='location2' type='text' className='w-[300px] md:w-[426.17px] h-[39.13px] rounded-md bg-white outline-none shadow-md'/>
        </div>
        
        <div className='flex flex-col gap-y-1 my-4'>
            <label htmlFor='contact' className='text-[#444444] font-bold text-[12.67px] text-left'>Contact</label>
            <input id='contact' name='contact' type='text' className='w-[181.42px] h-[39.13px] rounded-md bg-white outline-none shadow-md'/>
        </div>


        <div className='flex flex-col gap-y-1 my-4'>
            <label htmlFor='date' className='text-[#444444] font-bold text-[12.67px] text-left'>Shipping Date</label>
            <div className='flex items-center gap-x-1'>
                <input id='date' name='date' type='text' className='w-[181.42px] h-[39.13px] rounded-md bg-white outline-none shadow-md'/>
                
                <div className='w-[26.32px] h-[26.32px]'>
                    <img src={date} alt='' className='w-full h-full'/>
                </div>

            </div>
        </div>


        <div className='w-[181.42px] h-[39.13px] bg-[#004019] text-white font-bold flex justify-center items-center rounded-md  text-[12.67px] mt-14 place-self-end' >
            Get Estimate
        </div>

    </div>
  )
}

export default HomeForm