import React from 'react'
import image from "../assets/heroBG.jpeg"
import data1 from "../data/TransportationData"
import data2 from "../data/SupervisionData"
import { GoDotFill } from "react-icons/go";
const HeroSection = () => {
  return (
    <div>
        
        <div className='w-full h-[350px] lg:w-[654px] lg:h-[408px] relative '>
            <img src={image} alt='' className='h-full w-full opacity-30 -z-10 '/>
            <div className='absolute z-10 top-5 left-0'>
                <div className='w-[300px] md:w-[459px] h-[118px] bg-[#EBE9FF9E] rounded-lg flex justify-center items-center flex-col -translate-x-8'>
                    <p className='text-[#292355] text-[16px] lg:text-[24.14px] leading-[29.22px]'>BOOK YOUR SERVICE NOW</p>
                    <p className='text-[#646464] text-[24px] lg:text-[43.89px] font-semibold leading-[53.16px]'>Fine art service</p>
                </div>

                <div className='mt-2'>
                    <p className=' md:pl-6 pl-3 text-[20px] lg:text-[43.63px] md:leading-[52.8px] text-left font-extrabold text-[#292355] '>ON TIME DELIEVERY</p>
                </div>

                <p className='md:pl-6 pl-3 text-[20px] lg:text-[43.63px] md:leading-[52.8px] text-[#292355] font-semibold text-left mt-2'>
                    ECONIMICAL PRICE
                </p>
                
                <p className='md:pl-6 pl-3  text-[20px] lg:text-[43.63px] md:leading-[52.8px] text-[#292355] font-semibold text-left mt-2' >
                    ZERO DAMAGE POLICY
                </p>
            </div>
        </div>


        <div className='flex flex-col lg:flex-row items-start gap-x-3 gap-y-5 place-content-center mx-6 mt-8'>


            <div className='w-full lg:w-[388px] lg:h-[520px] bg-[#F1F1F1] rounded-md py-2 px-1'>
                <div className='text-[#292355] text-[20px] leading-[24.2px] font-bold'>Transportation</div>
                <div className=' lg:h-[450px] mt-5'>
                    {
                        data1.map((item)=>{
                            return  <div key={item.id} className='flex items-start gap-x-1 '>
                                <div className='w-[15px]'><GoDotFill /></div>
                                <p className='text-[16px] text-left'>{item.text}</p>
                            </div>
                        })

                    }
                </div>
            </div>


            <div className='w-full lg:w-[388px] lg:h-[370px] bg-[#F1F1F1] rounded-md py-2 px-1'>
                <div className='text-[#292355] text-[20px] leading-[24.2px] font-bold'>Airport Supervision</div>
                <div className='mt-5'>
                    {
                        data2.map((item)=>{
                            return <div key={item.id} className='flex items-start gap-x-1'>
                                <div className='w-[15px]'><GoDotFill /></div>
                                <p className='text-[16px] text-left'>{item.text}</p>
                            </div>

                        })

                    }
                </div>

            </div>
        </div>

    </div>
  )
}

export default HeroSection